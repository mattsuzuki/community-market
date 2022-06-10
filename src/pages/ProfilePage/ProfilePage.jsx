import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {getProfile} from "../../utilities/users-service";
import "./ProfilePage.css"


export default function ProfilePage() {
  const params = useParams();
  async function getUser(){
    console.log(params)
    const user = await getProfile(params.id);
    console.log(user);
    setUser(user);
  }
  useEffect(() => {
    getUser()
  }, []);

  const [user, setUser] = useState()
  if (!user) {
    return <div>Loading</div>
  } else {
    return (
      <>
        <div className="profileDetails">
          <h1>Seller Details</h1>
          <h1>Name:   {user.name}</h1>
          <h1>Phone Number:   {user.phone}</h1>
          <h1>Location:  {user.location}</h1>
          <h1>Email:  {user.email}</h1>
        </div>
      </>
    );
  }};

