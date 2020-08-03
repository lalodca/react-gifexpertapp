import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length>2){
            setCategories(cats => {
                const exist = cats.find(x => x === inputValue);
                if(exist) return [...cats];

                return [inputValue, ...cats];
            });
            setInputValue('');
        }   
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired    
};

export default AddCategory;