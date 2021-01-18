import ReactPaginate from 'react-paginate';

export default function Pagination({
  currentPage,
  pageCount,
  paginationHandler,
  forcePage,
}) {
  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'pagination-break'}
        containerClassName={'pagination-wrapper'}
        previousClassName={'pagination-previous-button'}
        nextClassName={'pagination-next-button'}
        pageClassName={'pagination-item'}
        activeClassName={'pagination-item-active'}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={paginationHandler}
        forcePage={forcePage - 1}
      />
    </div>
  );
}
