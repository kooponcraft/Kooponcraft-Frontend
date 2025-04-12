'use client'

import AppImage from '@/components/common/AppImage'
import { acceptCouponSwap } from '@/lib/acceptCouponSwap'
import { declineCouponSwap } from '@/lib/declineCouponSwap'
import { getSwapOffers } from '@/lib/getSwapOffers'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Modal, Button, Toast, ToastContainer } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const DashboardCouponSwap = () => {
    const [swapOffersData, setSwapOffersData] = useState<any>([])
    const [selectedOffer, setSelectedOffer] = useState<any>(null)
    const [showModal, setShowModal] = useState(false)
    const [toast, setToast] = useState({
        show: false,
        message: '',
        bg: ''
    })
    const [{ loading, calledFunc }, setLoading] = useState({
        loading: false,
        calledFunc: ''
    })

    useEffect(() => {
        const fetchSwapOffers = async () => {
            try {
                const data = await getSwapOffers()
                setSwapOffersData(data)
            } catch (error) {
                console.error('Error fetching swap offers:', error)
            }
        }

        fetchSwapOffers()
    }, [])

    const timeAgo = (dateString: string) => {
        const diff = Math.floor((new Date().getTime() - new Date(dateString).getTime()) / 1000)
        return diff < 60
            ? `${diff} seconds ago`
            : diff < 3600
            ? `${Math.floor(diff / 60)} minutes ago`
            : diff < 86400
            ? `${Math.floor(diff / 3600)} hours ago`
            : `${Math.floor(diff / 86400)} days ago`
    }

    const approveOffer = async (offerId: any) => {
        setLoading({ loading: true, calledFunc: 'approveOffer' })
        try {
            await acceptCouponSwap(offerId)
            setToast({
                show: true,
                message: 'Offer accepted successfully',
                bg: 'success'
            })
            setShowModal(false)
        } catch (error: any) {
            console.error('Error accepting swap offers:', error)
            setToast({
                show: true,
                message: error.response.data.message || error.message || 'Error accepting offer',
                bg: 'danger'
            })
        } finally {
            setLoading({ loading: false, calledFunc: 'approveOffer' })
        }
    }

    const declineOffer = async (offerId: any) => {
        setLoading({ loading: true, calledFunc: 'declineOffer' })
        try {
            await declineCouponSwap(offerId)
            setToast({
                show: true,
                message: 'Offer declined successfully',
                bg: 'success'
            })
            setShowModal(false)
        } catch (error: any) {
            console.error('Error declining swap offers:', error)
            setToast({
                show: true,
                message: error.response.data.message || error.message || 'Error declining offer',
                bg: 'danger'
            })
        } finally {
            setLoading({ loading: false, calledFunc: 'declineOffer' })
        }
    }

    return (
        <>
            {
            swapOffersData.length >= 1 && (
                <div id="swapOffersPanel" className="col-12 col-xxl-12">
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                        <h5>Coupon Swap Offers</h5>
                        </div>
                        <ul className="nav nav-tabs border-0 mb-2" id="kooponcraftTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                            className="rounded-pill btn btn-sm btn-primary me-1 active"
                            id="tab--1"
                            data-bs-toggle="tab"
                            href="#tab1"
                            role="tab"
                            aria-controls="tab1"
                            aria-selected="true"
                            >
                            Recent Offers
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div
                        className="tab-pane fade show active"
                        id="tab1"
                        role="tabpanel"
                        aria-labelledby="tab--1"
                        >
                        <div className="table-responsive border shadow-sm dashboard-table activity-table">
                            <table id="offersTable" className="table mb-0">
                            <thead>
                                <tr>
                                <th scope="col">My Coupon</th>
                                <th scope="col">Their Coupon</th>
                                <th scope="col">Status</th>
                                <th scope="col">Time</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {swapOffersData.swapOffers.map((offer: any, id: number) => (
                                <tr key={id}>
                                    <th scope="row">
                                    <Link
                                        className="btn btn-minimal text-dark hover-primary"
                                        href="#"
                                    >
                                        <AppImage
                                        className="rounded me-1"
                                        src={offer.ownTokenImage}
                                        alt=""
                                        />
                                        <Link
                                        target="_blank"
                                        href={`/getCoupon/${offer.ownCollectionId}/${offer.ownTokenId}`}
                                        >
                                        {offer.ownTokenName}
                                        </Link>
                                    </Link>
                                    </th>
                                    <td>
                                    <span className="d-inline-block fw-bold fz-14">
                                        <Link
                                        target="_blank"
                                        href={`/getCoupon/${offer.desiredCollectionId}/${offer.desiredTokenId}`}
                                        >
                                        {offer.desiredTokenName}
                                        </Link>
                                    </span>
                                    </td>
                                    <td>{offer.status}</td>
                                    <td>
                                    <i className="bi bi-clock"></i>
                                    {timeAgo(offer.createdAt)}
                                    </td>
                                    <td>
                                    {offer.currentUserId === offer.initiator._id ? (
                                        <span className="text-muted">
                                        {offer.status == 'cancelled'
                                            ? 'declined'
                                            : 'pending'}
                                        </span>
                                    ) : (
                                        <Button
                                        variant='primary'
                                        className="rounded-pill"
                                        onClick={() => {setSelectedOffer(offer);setShowModal(true)}}
                                        >
                                        View
                                        </Button>
                                    )}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            )
            }
            <Modal show={showModal} onHide={() => setShowModal(false)} id={selectedOffer?._id} centered>
                <Modal.Body className='text-center'>
                    <p className='fs-4'>Are you sure you want to proceed with this swap offer?</p>
                    <p className='fs-5'><strong>Offer Details:</strong></p>
                    <p id="offerDetails">{selectedOffer?.ownTokenName} <BsArrowRight /> {selectedOffer?.desiredTokenName}</p>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="secondary" onClick={() => setShowModal(false)} disabled={loading}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => approveOffer(selectedOffer?._id)} disabled={loading}>
                        {
                            loading && calledFunc === 'approveOffer' ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ) : (
                                'Approve'
                            )
                        }
                    </Button>
                    <Button variant="danger" disabled={loading} onClick={() => declineOffer(selectedOffer?._id)}>
                        {
                            loading && calledFunc === 'declineOffer' ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ) : (
                                'Decline'
                            )
                        }
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-end" containerPosition='fixed' className="p-3" style={{ zIndex: 999999999 }}>
                <Toast bg={toast.bg} show={toast.show} onClose={() => setToast({...toast, show: false})} delay={3000} autohide>
                    <Toast.Body className='text-white fs-5'>{toast.message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default DashboardCouponSwap