import React from 'react'
import PropTypes from 'prop-types'

const MyTableThead = ({selectedSort, onSort, columns}) => {

    const handleSort = (item) => {
        if(selectedSort.iter === item) {
            onSort({...selectedSort, order: selectedSort.order === 'asc' ? 'desc' : 'asc'})
        } else {
            onSort({iter: item, order: 'asc'})
        }

    }

    const handleArrow = (path) => {
        if(selectedSort.iter === path){
            if(selectedSort.order === 'asc') {
                return <i className="bi bi-caret-up-fill"></i>
            }
            if(selectedSort.order === 'desc'){
                return <i class="bi bi-caret-down-fill"></i>
            }
            return ''
        }

    }

    return (
        <thead key="headTable12">
            <tr key="headTable1111">
                {Object.keys(columns).map(column =>
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                && (() => handleSort(columns[column].path))}
                        {...{role: columns[column].path && 'button'}}
                        scope="col"
                    >
                        {columns[column].name}
                        {handleArrow(columns[column].path)}
                    </th>
                )}
            </tr>
        </thead>
    )
}

export default MyTableThead

MyTableThead.protoTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}
