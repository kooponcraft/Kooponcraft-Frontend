import { getAllTransactions } from '@/lib/getAllTransactions'
import Link from 'next/link'
import React from 'react'

const MyTransactionsArea = async () => {
    const transactions = await getAllTransactions()
    const icons = [
        { icon: '<i class="me-1 bi bi-percent"></i>', message: 'You have an offer!' },
        { icon: '<i class="bg-info me-1 bi bi-tags"></i>', message: 'Congratulations! You sold an item.' },
        { icon: '<i class="bg-danger me-1 bi bi-gift"></i>', message: 'January freebies have arrived.' },
        { icon: '<i class="bg-warning me-1 bi bi-star"></i>', message: 'A new rating has been received.' }
      ];

  return (
    <>
        <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning" href="/create-new"
          data-bs-toggle="tooltip"
          data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg"></i>
        </Link>
        </div>
        <div className="admin-wrapper">
            <div className="container">
            <div className="row g-4 justify-content-center">
                <div className="col-12 col-lg-10">
                <h5>My Transactions</h5>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                    <div className="notification-content-wrap">
                        <ul id="transactionsContainer" className="notification-list ps-0 mb-0">
                            {
                                transactions.length === 0 ? (
                                    <li>
                                        No transactions found.
                                    </li>
                                ) : (
                                    transactions.map((transaction: any, id: number) => {
                                        const purchaseDate = new Date(transaction.purchaseDate);
                                        const day = purchaseDate.getDate();
                                        const monthYear = purchaseDate.toLocaleDateString("en-GB", {
                                        month: "short",
                                        year: "numeric",
                                        });
                                        const time = purchaseDate.toLocaleTimeString("en-GB", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        });

                                        const randomIcon = icons[Math.floor(Math.random() * icons.length)];

                                        return (
                                            <li key={id}>
                                                <Link href="#">
                                                {randomIcon.icon} ${transaction.nameOfItemPurchased}
                                                <span className=" mx-4 badge bg-dark fz-12 rounded-pill ms-auto">Total: ${transaction.totalPrice.toFixed(2)} UNQ</span>
                                                <small className="text-muted">Purchased on ${day} ${monthYear}, ${time}</small>
                                                </Link>
                                            </li>
                                        )
                                    })
                                )
                            }
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default MyTransactionsArea