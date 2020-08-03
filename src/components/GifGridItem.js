import React from 'react';
// import PropTypes from 'prop-types';

const GifGridItem = ({title, url}) => {
    //console.log(title, url);
    return (
        <div className="card animate__animated animate__faceIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

// GifGridItem.propTypes = {
    
// };

export default GifGridItem;