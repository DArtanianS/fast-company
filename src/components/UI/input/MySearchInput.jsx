import React from 'react';
import PropTypes from 'prop-types';

const MySearchInput = ({serchNames, handleSerch}) => {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
                Строка поиска
            </span>
            <input onChange={handleSerch} type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default" value={serchNames} placeholder='Введите имя...'/>
        </div>
    );
};

MySearchInput.propTypes = {
    
};

export default MySearchInput;