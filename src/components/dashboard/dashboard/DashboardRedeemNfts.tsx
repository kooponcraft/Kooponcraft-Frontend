'use client'

import { acceptRedeemRequest } from '@/lib/acceptRedeemRequest'
import { getAllRedeemRequests } from '@/lib/getAllRedeemRequests'
import React, { useEffect, useState } from 'react'
import { ToastContainer, Toast } from 'react-bootstrap'

const DashboardRedeemNfts = () => {
    const [redeemRequests, setRedeemRequests] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({
        show: false,
        message: '',
        bg: ''
    })

    useEffect(() => {
        const fetchRedeemRequests = async () => {
            try {
                const data = await getAllRedeemRequests()
                setRedeemRequests(data)
            } catch (error) {
                console.error('Error fetching redeem requests:', error)
            }
        }

        fetchRedeemRequests()
    }, [])

    const handleAcceptRedeemRequest = async (requestId: string) => {
        setLoading(true)
        try {
            await acceptRedeemRequest(requestId)
            setToast({
                show: true,
                message: 'Redeem request accepted successfully',
                bg: 'success'
            })
        } catch (error: any) {
            console.error('Error accepting redeem request:', error)
            setToast({
                show: true,
                message: error?.response.data.message || error.message || 'Error accepting redeem request',
                bg: 'danger'
            })
        } finally {
            setLoading(false)
        }
    }

  return (
    <>
        {
            redeemRequests.length >= 1 && (
                <div id="redeemReqPanel" className="col-12 col-xxl-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h5>Redeem Coupon Requests</h5>
                                </div>
                                <ul className="nav nav-tabs border-0 mb-2" id="funtoTab" role="tablist">
                                    <li className="nav-item" role="presentation"><a className="rounded-pill btn btn-sm btn-primary me-1 active" id="tab--1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Recent Requests</a></li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                                    <div className="table-responsive border shadow-sm dashboard-table activity-table">
                                        <table id="redeemRequestsTable" className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Initiator</th>
                                                    <th>Coupon Name</th>
                                                    <th>Coupon Price</th>
                                                    <th>Coupon-Collection ID</th>
                                                    <th>Status</th>
                                                    <th>Requested At</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    redeemRequests.map((request: any, id: number) => (
                                                        <tr key={id}>
                                                            <td>{request.initiator.username}</td>
                                                            <td>{request?.tokenDetails?.tokenName}</td>
                                                            <td>{request?.tokenDetails?.priceOfCoupon} UNQ</td>
                                                            <td>#{request.couponToRedeem.tokenId} - {request.couponToRedeem.collectionId}</td>
                                                            <td>{request.status}</td>
                                                            <td className="text-success">{new Date(request.requestedAt).toLocaleString()}</td>
                                                            <td>
                                                                {
                                                                    request.status === 'pending' ? (
                                                                        <button className="btn btn-success accept-redeem" onClick={() => handleAcceptRedeemRequest(request._id)} disabled={loading}>
                                                                            {loading ? (
                                                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                            ) : (
                                                                                'Accept'
                                                                            )}
                                                                        </button>
                                                                    ) : (
                                                                        <button className="btn btn-success" disabled>Redeemed</button>
                                                                    )
                                                                }
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
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
        <ToastContainer position="top-end" containerPosition='fixed' className="p-3" style={{ zIndex: 999999999 }}>
            <Toast bg={toast.bg} show={toast.show} onClose={() => setToast({...toast, show: false})} delay={3000} autohide>
                <Toast.Body className='text-white fs-5'>{toast.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    </>
    )
}

export default DashboardRedeemNfts