import React from 'react';

const Pagination = ({ next, previous, changeState }) => {
  return (
    <nav>
      <div className="row">
        <ul className="pagination">
          <button
            disabled={!previous}
            className="btn"
            onClick={() => {
              changeState({
                currentPage: previous.page,
                loading: true
              })
            }}>
            Previous
          </button>
          <button
            disabled={!next}
            className="btn"
            onClick={() => {
              changeState({
                currentPage: next.page,
                loading: true
              })
            }}>
            Next
          </button>
        </ul>
      </div>
    </nav>
  )
};

export default Pagination;