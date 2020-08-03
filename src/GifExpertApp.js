import React from 'react';
//import PropTypes from 'prop-types';
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Corgi']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Gatitos']);    
    //     setCategories( cats => [...cats, 'Gatitos']);
    // }
    
    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr/>

           

           <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}/>
                    ))
                }
           </ol>
        </>
    );
};

// GifExpertApp.propTypes = {
    
// };

export default GifExpertApp;
