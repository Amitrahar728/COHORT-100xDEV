import { Client } from "pg";

const pgclient = new Client("e")




async function main(){
    await pgclient.connect();
    const response = await pgclient.query("UPDATE users SET username = 'Amit' WHERE username = 'lkds' RETURNING *;");
    // console.log(response.rows)
    const response2 = await pgclient.query("SELECT * from users;");
    console.log(response2.rows);
}

main()




// can do this in post and get and other method inside our
// routes by calling pgclient easily
