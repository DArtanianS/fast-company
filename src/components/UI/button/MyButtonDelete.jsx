import React from 'react';
import PropTypes from 'prop-types'

const MyButtonDelete = ({id, ...rest}) => {
    return (
        <button
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