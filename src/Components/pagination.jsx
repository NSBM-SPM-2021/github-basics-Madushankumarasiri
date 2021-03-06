import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

    const { itemCount, pageSize, currentPage, onPageChange } = props;
    //console.log(currentPage)
    const pagesCount = Math.ceil(itemCount / pageSize);
    if(pagesCount === 1 ) return null;
    const pages = _.range(1, pagesCount + 1);

    return ( 
        <nav className="m-3">
          <ul className="pagination">
              { pages.map(page => (
                <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                <a href="/#" className="page-link shadow-none" onClick={() => onPageChange(page)}>{ page }</a>
              </li>
        ))}
          </ul>  
        </nav>
     );
}

 
export default Pagination;