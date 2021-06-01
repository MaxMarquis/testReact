import React from 'react';
import MenuItem from "./MenuItem";

function MenuList(props) {
    return (
        <div>
            {props.menuItem.map((menuItem) => (
                <div key={menuItem.id}>
                    <MenuItem menuItem={menuItem}/>
                </div>
            ))}
        </div>
    )
}

export default MenuList