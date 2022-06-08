import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {getProfile} from "../../utilities/users-service";


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
        <h1>{user.name}</h1>
        <h1>{user.phone}</h1>
        <h1>{user.location}</h1>
        <h1>{user.email}</h1>
      </>
    );
  }};

