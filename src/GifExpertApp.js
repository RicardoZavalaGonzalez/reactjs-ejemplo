import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{
    
    const [categories, setCategories] = useState(['One Punch Man']);
    
    /* const handleAdd=()=>{
        // Agregando al final
        // setCategories([...categories,'serie']);
        // Agregando al principio
        // setCategories(['serie',...categories]);
        // Tercera forma usando un callback
        setCategories(categorias=>[...categorias,'serie']);
    } */
    /* const categories=['One Punch Man','Samurai X','Dragon Ball']; */
    return  (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            {/* <AddCategory /> */}
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category=>{
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;