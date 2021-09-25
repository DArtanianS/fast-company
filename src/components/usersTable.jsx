import React from 'react';
import QualitiesList from "./qualitiesList";
import MyBookmark from "./UI/bookmark/MyBookmark";
import MyButtonDelete from "./UI/button/MyButtonDelete";
import MyTable from "./UI/table/MyTable";
import MyTableThead from "./UI/table/MyTableThead";
import MyTableBody from "./UI/table/MyTableBody";

const UsersTable = ({ users : data, handleDelete, handleBookmark, onSort, selectedSort}) => {
    const columns = {
        name: {path: 'name', name: 'Имя'},
        qualities: {
            name: 'Качества',
            component: (item) => (<QualitiesList qualities={item.qualities}/>)
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
            <MyTable>
                <MyTableThead {... {selectedSort, onSort, columns}}/>
                <MyTableBody {...{data, columns}}/>
            </MyTable>
    );
};

export default UsersTable;