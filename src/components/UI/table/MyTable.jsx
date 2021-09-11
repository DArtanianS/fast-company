import React from 'react';
import MyTableThead from "./MyTableThead";
import Users from "../../users";

const MyTable = ({users, handleDelete}) => {
    return (
        <table key='Table12' className="table">
            <MyTableThead/>
            <Users
                users={users}
                handleDelete={handleDelete}
            />
        </table>
    );
};

export default MyTable;