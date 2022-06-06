import { checkToken } from "../../utilities/users-service";
import {  useNavigate } from "react-router-dom";
import { useState  } from 'react';


export default function CreateListingPage() { 
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        item_name: '',
        item_description:'',
        item_price:'',
    });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        //Ajax request 
        navigate('/listings');
    }

    const handleChange = (e) => {
        const value= e.target.value;
        const name= e.target.name;
        
        
        setFields({
            ...fields,
            [name]: value
        });
    };
    
    
    return (
        <>
        <h1>List an Item or Service for Sale</h1>
        <form onSubmit={handleSubmit}>
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
        </>
    )
} 