// "use client";
//  whenever we use useState install or use client 
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data: User[] = response.data;
  await new Promise(r => setInterval(r,5000));


  return (
   
    <div>
      {data.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}