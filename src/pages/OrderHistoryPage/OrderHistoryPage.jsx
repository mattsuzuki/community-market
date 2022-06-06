import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() { 
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  
  return (
    <>
      <h1>OrderHistoryPage</h1>
      {/* <button onClick={handleCheckToken}>Check when my login expires</button> */}
    </>
  );
}