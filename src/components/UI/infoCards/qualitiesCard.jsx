import React from 'react';
import MySpan from "../qualities/MySpan";
import PropTypes from 'prop-types';

/**
 * QualitiesCard - карточка, отображающая информацию о качествах пользователя
 * @param qualities - массив объектов с данными о качествах с обязательными полями
 *                    _id - идентификатор качества
 *                    name - название качетва
 *                    color - цвет для отображения качетва
 * @returns {JSX.Element}
 * @constructor
 */
const QualitiesCard = ({qualities}) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">
                    <span>Qualities</span>
                </h5>
                <p className="card-text">
                    {qualities.map(qualitie => (
                        <MySpan
                            key={qualitie._id}
                            color={qualitie.color}
                            customCss='p-2 m-2'
                        >
                            {qualitie.name}
                        </MySpan>
                    ))}
                </p>
            </div>
        </div>
    );
};

QualitiesCard.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesCard;