import React from 'react';
import PropTypes from 'prop-types'
import MyTable from "../table/MyTable";

const MyButtonDelete = ({id, ...rest}) => {
    return (
        <button
            key={id + 'bt-button'}
            type="button"
            className="btn btn-danger"
            {...rest}
        >
            Delete
        </button>
    );
};

MyButtonDelete.propTypes = {
    id: PropTypes.string.isRequired,
}

export default MyButtonDelete;