import React from 'react';
import SerchStatus from "./serchStatus";
import UsersTable from "./usersTable";
import MyPagination from "./UI/pagination/MyPagination";

const Maincontent = ({
                 count,
                 handleBookmark,
                 handelSort,
                 userCropt,
                 handleDelete,
                 sortBy, pageSize,
                 currentPage,
                 handlePageChange}) => {
    return (
        <div className="d-flex flex-column">
            <SerchStatus usersCount={count}/>
            {count > 0 ? (
                <UsersTable
                    handleBookmark={handleBookmark}
                    onSort={handelSort}
                    users={userCropt}
                    handleDelete={handleDelete}
                    selectedSort={sortBy}
                />
            ) : (
                ''
            )}
            <div className="d-flex justify-content-center">
                <MyPagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageCange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Maincontent;