import React from 'react';
import User from "../../user";

const MyTableBody = ({users, handleDelete, handleBookmark}) => {
    return <>
        {users.map( item =>
            <User key={item._id}
                item={item}
                handleDelete={handleDelete}
                handleBookmark={handleBookmark}
            />)}
    </>
};

export default MyTableBody;