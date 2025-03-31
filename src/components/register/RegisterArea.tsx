'use client'
import Link from 'next/link';
import AppImage from "@/components/common/AppImage";
import React, { FormEvent, useState } from 'react';
import appAxios from '@/config/axios';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { BsCheckCircleFill, BsClipboard } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { connectWallet } from '@/lib/connectWallet';

const RegisterArea = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state
  const [isOpen, setIsOpen] = useState(false);
  const [mnemonic, setMnemonic] = useState("")
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<any>("")
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const modalClose = () => {
    setIsOpen(false)
    router.push("/dashboard")
  }

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    try {
      const res = await appAxios.post('/createUser', {
        username,
        email,
        password,
      });

      setIsOpen(true)
      setMnemonic(res.data.mnemonic)
    } catch (error: any) {
        setError(error?.response?.data?.error || "An error occured")
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  const registerWallet = async (type: "polkadot-js" | "talisman" | "subwallet-js" | "nova" | "fearless" | "mathwallet" | "clover" | "polkagate" | "pontem") => {
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
      await appAxios.post(type == "polkadot-js" ? "/createUserWithPolkadot" : "/createUserWithSubWallet", {
          address: wallet.address,
          username: wallet.name || wallet.meta.name,
          walletType: wallet.walletType, // This will be "Acala" for Acala accounts
          networkType: wallet.networkType,
      })
      router.push("/dashboard")
    }catch(err: any){
      setError(err.response.data.error || "An error occured")
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
      <Modal show={isOpen} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Copy and Store your mnemonic safely.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your mnemonic is a secret phrase that gives you access to your
            wallet and funds. Never share it with anyone and store it securely
            offline.
          </p>
          <label htmlFor="mnemonic" className="form-label">Mnemonic:</label>
            <div className="position-relative">
            <textarea
              id="mnemonicText"
              className="form-control p-4"
              value={mnemonic}
              readOnly
              style={{ resize: "none", height: "100px" }}
            />
            {copied ? (
              <BsCheckCircleFill
              className="position-absolute"
              style={{ top: "10px", right: "10px", fontSize: "1.5rem", color: "green" }}
              />
            ) : (
              <BsClipboard
              className="position-absolute"
              style={{ cursor: "pointer", top: "10px", right: "10px", fontSize: "1.5rem", color: "#6c757d" }}
              onClick={() => {
                navigator.clipboard.writeText(mnemonic);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
              }}
              />
            )}
            </div>
        </Modal.Body>
      </Modal>
      <div className="register-area">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-xl-5">
              <div className="register-card">
                <h2>Create your free account</h2>
                <p>
                  Already have an account?
                  <Link className="ms-1 hover-primary" href="/login">Log In</Link>
                </p>

                {error && <Alert variant='danger'>{error}</Alert>}

                <Form className="register-form mt-5" onSubmit={register}>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading} // Disable field when loading
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={loading} // Disable field when loading
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <div className="position-relative d-flex align-items-center">
                      <Form.Control
                        id="registerPassword"
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading} // Disable field when loading
                      />
                      <Form.Label
                        className="position-absolute fs-4 top-50 translate-middle-y p-0"
                        style={{cursor: "pointer", right: "2rem"}}
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <i className="bi bi-eye-slash-fill"></i>
                        ) : (
                          <i className="bi bi-eye-fill"></i>
                        )}
                      </Form.Label>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="rememberMe">
                    <Form.Check
                      type="checkbox"
                      label="I agree to all terms & conditions."
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      required
                      disabled={loading} // Disable checkbox when loading
                    />
                  </Form.Group>
                  <Button
                    className="w-100"
                    type="submit"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span> : 'Register Now'}
                  </Button>
                  <p className="text-center p-4 fw-semibold">Or connect with</p>
                    <div className="text-center d-flex flex-column align-items-stretch justify-content-center gap-3 w-75 m-auto">
                    <Button
                      variant="outline-primary"
                      className="d-flex align-items-center gap-2"
                      onClick={() => registerWallet("polkadot-js")}
                      type="button"
                      disabled={loading} // Disable button when loading
                    >
                      <AppImage
                      src="/assets/img/core-img/polkadot.png"
                      alt="Polkadot icon"
                      width={30}
                      height={30}
                      title="Polkadot Wallet"
                      />
                      Polkadot Wallet
                      {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="d-flex align-items-center gap-2"
                      onClick={() => registerWallet("subwallet-js")}
                      type="button"
                      disabled={loading} // Disable button when loading
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
                      {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                    </Button>
                    </div>
                </Form>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="register-thumbnail mt-5 mt-md-0">
                <AppImage src="/assets/img/illustrator/4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;