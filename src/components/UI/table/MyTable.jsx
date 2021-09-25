import React from 'react'
import MyTableThead from './MyTableThead'
import PropTypes from 'prop-types'
import MyTableBody from "./MyTableBody";


const MyTable = ({data, columns, onSort, selectedSort, children}) => {
    return (
        <table>
            {children || <>
            <MyTableThead {...{onSort, selectedSort, columns}}/>
            <MyTableBody {...{columns, data}}/>
            </>}
        </table>
    )
}

MyTable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    children: PropTypes.array
}

export default MyTable
