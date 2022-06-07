import { checkToken } from "../../utilities/users-service";
import {  useNavigate } from "react-router-dom";
import { useState  } from 'react';
import { createListing } from "../../utilities/listings-api";


export default function CreateListingPage() { 
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        name: '',
        description:'',
        price:'',
    });

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const listing = await createListing(fields)

        } catch {

        }
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
            name="name"
            placeholder="Enter Item"
            value={fields.name}
            />
            <input
            onChange={handleChange}
            name="description"
            placeholder="Description"
            value={fields.description}
            />
            <input
            onChange={handleChange}
            name="price"
            placeholder="price"
            value={fields.price}
            />
            <button type="Submit">Submit Listing</button>
        </form>
        </>
    )
} 