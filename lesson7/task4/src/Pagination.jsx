import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 0; // если самая первая страничка 
  const isNextPageAvailable = currentPage === Math.ceil(totalItems / itemsPerPage) - 1; // если последняя страничка тут мы минусуем еденицу потому что начинаем отсчет с 0
  console.log(totalItems / itemsPerPage);
  console.log(Math.ceil(totalItems / itemsPerPage) - 1)
  return (
    <div className="pagination">
      <button onClick={goPrev} disabled={isPrevPageAvailable} className="btn">{isPrevPageAvailable ? "" : "←"}</button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button onClick={goNext} disabled={isNextPageAvailable} className="btn">{isNextPageAvailable ? "" : "→"}</button>
    </div>
  );
};

export default Pagination;