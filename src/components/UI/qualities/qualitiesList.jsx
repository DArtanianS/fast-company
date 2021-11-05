import React from 'react';
import MySpan from "./MySpan";
import PropTypes from 'prop-types'

const QualitiesList = ({qualities}) => {
    return (
        <>
            {qualities.map((val, index) => (
            <MySpan
                key={index + val.name}
                color={val.color}
                customCss='p-2 m-2'
            >
                {val.name}
            </MySpan>
            ))}
        </>
    );
};

QualitiesList.protoTypes = {
    qualities: PropTypes.object.isRequired
}

export default QualitiesList;
