import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const MyPagination = ({ onPageCange, itemsCount, pageSize, currentPage }) => {
    console.log('currentPage', currentPage)
    const pageCount = itemsCount / pageSize
    console.log('pageCount', pageCount)

    if (Math.ceil(pageCount) === 1) return null

    const pages = _.range(1, pageCount + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={`page-item${
                            currentPage === page ? 'active' : ''
                        }`}
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => {
                                onPageCange(page)
                            }}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

MyPagination.propTypes = {
    onPageCange: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default MyPagination
