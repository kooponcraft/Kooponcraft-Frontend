"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import AppImage from "@/components/common/AppImage";
import appAxios from "@/config/axios";
import { useRouter } from "next/navigation";
import { connectWallet } from "@/lib/connectWallet";

const LoginArea = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>("");
	const [{email, password, rememberMe}, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: true,
	});
	const router = useRouter()

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			await appAxios.post('/loginUser', {
				email,
				password,
			});
			router.push('/dashboard');
		} catch (error: any) {
			setError(error?.response?.data?.error || "An error occured")
		} finally {
			setLoading(false); // Reset loading state after submission
		}
	};

	const loginWallet = async (type: "polkadot-js" | "talisman" | "subwallet-js" | "nova" | "fearless" | "mathwallet" | "clover" | "polkagate" | "pontem") => {
		setLoading(true)
		const wallet = await connectWallet(type)
		if(!wallet.connected){
		  setError(wallet.error)
		  if(wallet.error.includes("Extension Not Found")){
			setError(
			  <>
				{wallet.error}. <Alert.Link href={type == "polkadot-js" ? "https://polkadot.js.org/extension/" : "https://subwallet.app/"} target="__blank">Install</Alert.Link>
			  </>
			);
		  }
		  setLoading(false)
		  return;
		}
	
		try{
		  await appAxios.post(type == "polkadot-js" ? "/loginWithPolkadot" : "/loginWithSubWallet", {
			  address: wallet.address
		  })
		  router.push("/dashboard")
		}catch(err: any){
		  setError(err.response.data.error || "An error occured")
		}finally{
		  setLoading(false)
		}
	  }

	return (
		<div className="register-area">
			<Container>
				<Row className="g-4 g-lg-5 align-items-center justify-content-between">
					<Col xs={12} md={6} xl={5}>
						<div className="register-card">
							<h2>Welcome Back!</h2>
							<p>
								Didn't have an account?
								<Link className="ms-1 hover-primary" href="/register">
									Register now!
								</Link>
							</p>

							<div className="register-form mt-5">
								{error && <Alert variant="danger">{error}</Alert>}
								<Form onSubmit={handleSubmit}>
									<Form.Group className="mb-4" controlId="formEmail">
										<Form.Control
											type="email"
											placeholder="Email Address"
											name="email"
											value={email}
											onChange={handleInputChange}
											required
										/>
									</Form.Group>
									<Form.Group className="position-relative mb-4" controlId="formPassword">
										<Form.Label
											className="position-absolute fs-4 top-50 translate-middle-y p-0"
											style={{ cursor: "pointer", right: "2rem" }}
											onClick={togglePasswordVisibility}
										>
											{passwordVisible ? (
												<i className="bi bi-eye-slash-fill"></i>
											) : (
												<i className="bi bi-eye-fill"></i>
											)}
										</Form.Label>
										<Form.Control
											type={passwordVisible ? "text" : "password"}
											placeholder="Password"
											name="password"
											value={password}
											onChange={handleInputChange}
											required
										/>
									</Form.Group>
									<Button variant="success" type="submit" className="w-100">
										{loading ? (
											<span
												className="spinner-border spinner-border-sm ms-2"
												role="status"
												aria-hidden="true"
											></span>
										) : (
											"Log In"
										)}
									</Button>
								</Form>
								<div className="login-meta-data d-flex align-items-center justify-content-between">
									<Form.Check
										className="mt-4"
										type="checkbox"
										id="rememberMe"
										label="Keep me logged in"
										name="rememberMe"
										checked={rememberMe}
										onChange={handleInputChange}
									/>
									<Link
										className="forgot-password mt-4 text-primary fz-16"
										href="/forget-password"
									>
										Forgot Password?
									</Link>
								</div>
								<p className="text-center p-4 fw-semibold">Or connect with</p>
								<div className="text-center d-flex flex-column align-items-stretch justify-content-center gap-3 w-75 m-auto">
									<Button
										variant="outline-primary"
										className="d-flex align-items-center gap-2"
										type="button"
										onClick={() => loginWallet("polkadot-js")}
										disabled={loading}
									>
										<AppImage
											src="/assets/img/core-img/polkadot.png"
											alt="Polkadot icon"
											width={30}
											height={30}
											title="Polkadot Wallet"
										/>
										Polkadot Wallet
										{loading && (
											<span
												className="spinner-border spinner-border-sm ms-2"
												role="status"
												aria-hidden="true"
											></span>
										)}
									</Button>
									<Button
										variant="outline-secondary"
										className="d-flex align-items-center gap-2"
										type="button"
										onClick={() => loginWallet("subwallet-js")}
										disabled={loading}
									>
										<AppImage
											src="/assets/img/core-img/subwallet.png"
											alt="Subwallet icon"
											width={30}
											height={30}
											title="Subwallet"
											className="rounded-circle"
										/>
										Subwallet
										{loading && (
											<span
												className="spinner-border spinner-border-sm ms-2"
												role="status"
												aria-hidden="true"
											></span>
										)}
									</Button>
								</div>
							</div>
						</div>
					</Col>

					<Col xs={12} md={6}>
						<div className="register-thumbnail mt-5 mt-md-0">
							<AppImage src="/assets/img/illustrator/4.png" alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default LoginArea;
