import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    // Obteniendo el nuevo valor del input
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    // Capturando el evento del submit y previene el refresh
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(categorias=>[inputValue,...categorias]);
            setInputValue('');
        }
        // console.log('evento submit');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};