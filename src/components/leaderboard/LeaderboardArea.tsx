'use client';

import { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Breadcrumb, 
  Table, 
  Pagination,
  Button
} from 'react-bootstrap';
import { getLeaderboard } from '@/lib/getLeaderboard';

export default function LeaderboardArea() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    loadLeaderboard(currentPage);
  }, [currentPage]);

  const loadLeaderboard = async (page: number) => {
      setLoading(true);
      const data = await getLeaderboard({
        page,
        limit
      })

    setLeaderboard(data.leaderboard || []);
    setTotalPages(data.totalPages == 0 ? 1 : data.totalPages);
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      
      <div className="activity-wrapper">
        <div className="mt-4 d-block w-100"></div>
        <Container>
          {loading ? (
            <div className="text-center my-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive border shadow-sm ranking-table mb-70">
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Username</th>
                    <th scope="col">KooponCraft Points</th>
                    <th scope="col">Last 1 Day<i className="ms-1 bi bi-arrow-down-up"></i></th>
                    <th scope="col">7 Days<i className="ms-1 bi bi-arrow-down-up"></i></th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((user) => (
                    <tr key={user.position}>
                      <th scope="row">#{user.position}</th>
                      <td>
                        <Button variant="link" className="text-dark hover-primary fw-bold p-0">
                          {user.username}
                        </Button>
                      </td>
                      <td>
                        <span className="d-inline-block">
                          <i className="bi bi-coin"></i>{user.points}
                        </span>
                      </td>
                      <td>
                        <span className={user.last1DayChange >= 0 ? 'text-success' : 'text-danger'}>
                          {user.last1DayChange}%
                        </span>
                      </td>
                      <td>
                        <span className={user.last7DaysChange >= 0 ? 'text-success' : 'text-danger'}>
                          {user.last7DaysChange}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
          
          {/* Pagination */}
          <div className="kooponcraft-pagination">
            <Pagination className="justify-content-center mb-0">
              <Pagination.Prev 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))} 
                disabled={currentPage === 1}
              />
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Pagination.Item
                  key={page}
                  active={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Pagination.Item>
              ))}
              
              <Pagination.Next 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} 
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </Container>
      </div>
    </>
  );
}