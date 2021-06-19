import MenuItem from "./MenuItem";
import React from 'react';

class MenuList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foodItems: [
                {
                    id: 1,    
                    itemName: "Caesar's Salad",
                    description: "The original Caesar's Salad...",
                    price: 5,
                    isFavorite: false
                },
                {
                    id: 2,
                    itemName: "Spaghetti Carbonara",
                    description: "Better than your nonna's!...",
                    price: 15,
                    isFavorite: false
                },
                {
                    id: 3,
                    itemName: "Grilled Whole Fish",
                    description: "Fish of the day, grilled...",
                    price: 35,
                    isFavorite: false
                },
            ],
        };
    }

    handleDeleteRow(rowId){
        const newMenuList = this.state.foodItems.filter((row) => row.id !== rowId);
        this.setState({ foodItems: newMenuList });
    }

    render() {
        return (
            <div>
                {this.state.foodItems.map((foodItems) => (
                <MenuItem 
                menuItem={foodItems}
                key={foodItems.id}
                handleDeleteRow={this.handleDeleteRow.bind(this)}/>
            ))}
            </div>
        );
    }
}

export default MenuList