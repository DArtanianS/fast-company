import React from 'react'
import PropTypes from 'prop-types'
import classes from './MyBookmark.modules.css'

const MyBookmark = ({status, ...rest}) => {
    return (
        <button
            type="button"
            className="btn btn-info"
            {...rest}
        >
            <i className={`bi bi-bookmark${status ? '-fill' : ''}`}></i>
        </button>
    );
};

MyBookmark.propTypes = {
    status: PropTypes.bool.isRequired,
}

export default MyBookmark;
