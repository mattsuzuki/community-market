import { checkToken } from "../../utilities/users-service";

export default function CreateListingPage() { 
    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
  }
  
  
  return (
    <>
      <h1>Sell an Item Or Offer a Sevice</h1>
      {/* <button onClick={handleCheckToken}>Check when my login expires</button> */}
    </>
  );
}