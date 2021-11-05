import React from 'react';
import Qualities from "./qualities";
import MyBookmark from "../common/MyBookmark";
import MyButtonDelete from "./button/MyButtonDelete";
import MyTable from "../common/table";
import {Link} from "react-router-dom";

const UsersTable = ({ users : data, handleDelete, handleBookmark, onSort, selectedSort}) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Имя',
            component: (item) => (<Link to={`/users/${item._id}`}>{item.name}</Link>)
        },
        qualities: {
            name: 'Качества',
            component: (item) => (<Qualities qualities={item.qualities}/>)
        },
        profession: {path: 'profession.name', name: 'Профессия'},
        completedMeetings: {path: 'completedMeetings', name: 'Встретился, раз'},
        rate: {path: 'rate', name: 'Оценка'},
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (item) => (<MyBookmark onClick={() => {handleBookmark(item._id)}} status={item.bookmark}/>)
        },
        delete: {component: (item) => (<MyButtonDelete onClick={() => {handleDelete(item._id)}} id={item._id} />)}

    }
    return (
            <MyTable {... {selectedSort, columns, data, onSort}}/>
    );
};

export default UsersTable;
