import React from 'react';
import MySpan from "./UI/span/MySpan";
import PropTypes from 'prop-types'

const QualitiesList = ({qualities}) => {
    return (
        <>
            {qualities.map((val, index) => (
                <MySpan
                    key={index + val.name}
                    myKey={index + val.name}
                    colorTopBage={'p-2 m-2 badge bg-' + val.color}
                    textTopSpan={val.name}
                />
            ))}
        </>
    );
};

QualitiesList.protoTypes = {
    qualities: PropTypes.object.isRequired
}

export default QualitiesList;
