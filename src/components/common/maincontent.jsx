import React from 'react';
import SerchStatus from "../UI/serchStatus";
import UsersTable from "../UI/usersTable";
import MyPagination from "./pagination/MyPagination";
import MySearchInput from '../UI/input/MySearchInput'

const Maincontent = ({
                count,
                userCropt,
                sortBy,
                pageSize,
                serchNames,
                currentPage,
                handleDelete,
                handleBookmark,
                handelSort,
                handleSerch,
                handlePageChange}) => {
    return (
        <div className="d-flex flex-column">
            <SerchStatus  usersCount={count}/>
            <MySearchInput serchNames={serchNames} handleSerch={handleSerch}/>
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