import { Client } from "pg";

const pgclient = new Client("postgresql://neondb_owner:npg_ORvJzMA8r6dC@ep-broad-smoke-apfoch54-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=verify-full&channel_binding=require")

// can be done any way as pgclient or pgclient2
// const pgClient2 = new Client({
//     user :"neondb_owner",
//     password :"npg_ORvJzMA8r6dC",
//     port :5432,
//     host :"ep-broad-smoke-apfoch54-pooler.c-7.us-east-1.aws.neon.tech",
//     database:"neondb",
//     ssl: true
// })



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
