import React, {useState} from 'react'
import "./style.css";
import Menu from "./Menu";
import Cards from './cards/Cards'
import MenuList from './menuList/MenuList';


const allCatVal = [...new Set(Menu.map((elem) =>{ return elem.category})), 'all']

const Gallery = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatVal);
    
    const filterItem = (category) => {
        if(category === 'all'){
            setItems(Menu)
        }else{
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        
        });
        setItems(updatedItems);
    }

    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            
            <MenuList filterItem = {filterItem} catItems={catItems} />


            {/* my main items section  */}

            <Cards goods= {items}/>
            
        </>
    )
}

export default Gallery;