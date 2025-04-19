import AppImage from "@/components/common/AppImage";
import { getUser } from "@/lib/auth/getUser";
import Link from "next/link";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const RareToken = async() => {
    const user = await getUser()

    return (
        <div className="container">
            <div className="rare-token-card">
                <div className="rare-token-glow"></div>
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <div>
                            <AppImage
                                src="/assets/img/wonderland.jpg"
                                alt="Rare Token"
                                className="rare-token-image"
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="rare-token-content">
                            <div className="token-name-wrapper">WONDERLAND TOKEN</div>
                            <h3 className="mb-3">🌟 Exclusive Rare Token Alert!</h3>
                            <p className="mb-4">
                                Here&apos;s your chance to win this exclusive limited edition coupon
                                token! Play our Coupon Match game to win this rare token.
                            </p>
                            <div className="points-badge mb-3">
                                <i className="bi bi-star-fill text-warning me-2"></i>
                                Required: 100+ points to play
                            </div>
                            <div className="mt-4">
                                <Link
                                    href="/coupon-match"
                                    className={`${user && user.points >= 100 ? "play-button" : "play-button-disabled"} text-decoration-none`}
                                >
                                    {
                                        (user && user.points < 100) ? (
                                            <>
                                                <i className="bi bi-lock me-2"></i>
                                                <span>Need {100 - user?.points} More Points</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-controller me-2"></i>Play Coupon Match
                                            </>
                                        )
                                    }
                                </Link>
                                {!user && (
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={
                                            <Tooltip id="tooltip-right">
                                                Login to play coupon match
                                            </Tooltip>
                                        }
                                    >
                                        <i
                                            className="bi bi-info-circle ms-2"
                                            style={{ fontSize: "1.2rem" }}
                                        ></i>
                                    </OverlayTrigger>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RareToken;