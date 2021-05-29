import React from 'react';
import MenuItem from "./MenuItem";

function MenuList(props) {
    return (
        <div>
            {props.menuItem.map(({id,name,description,img,price}) => (
                <div key={id}>
                    <MenuItem name={name} description={description} img={img} price={price} />
                </div>
            ))}
        </div>
    )
}

export default MenuList
