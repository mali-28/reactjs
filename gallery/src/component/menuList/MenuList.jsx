import React from 'react';

const MenuList = ({filterItem, catItems, setItems, Menu}) =>{
    return<>
    <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((currElem, indx) =>{

                           return <button key={indx} className="btn btn-warning" onClick={() => filterItem(currElem)}>{currElem}</button>
                        })
                    }
                </div>
            </div>
    </>

}

export default MenuList;