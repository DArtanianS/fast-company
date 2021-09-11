import React from 'react';

const MySpan = ({myKey, colorTopBage, textTopSpan}) => {
    const classSpan = `p-2 m-2 badge bg-${colorTopBage}`
    return (
        <span key={myKey}
              className={classSpan}
        >
                {textTopSpan}
        </span>
    );
};

export default MySpan;