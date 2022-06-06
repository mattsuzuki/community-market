import { checkToken } from "../../utilities/users-service";
import { useState } from 'react';


export default function CreateListingPage() { 
    const [fields, setFields] = useState({
        item_name: '',
        item_description:'',
        item_price:'',
    });

    const handleChange = (e) => {
        const value= e.target.value;
        const name= e.target.name;

        setFields({
            ...fields,
            [name]: value
        });
    };

    return (
        <form>
            <input
            onChange={handleChange}
            name="item_name"
            placeholder="Enter Item"
            value={fields.item_name}
            />
            <input
            onChange={handleChange}
            name="item_description"
            placeholder="Description"
            value={fields.item_description}
            />
            <input
            onChange={handleChange}
            name="item_price"
            placeholder="price"
            value={fields.item_price}
            />
            <button type="Submit">Submit Listing</button>
        </form>
    )
} 