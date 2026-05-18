READ NOTES FROM HARKIRAT NOTES : 

1.) Multiple types of databases : 
NoSQL 
Graph Db : (data is stored in form of a graph )  
vector databases : (data is stored in form of vectors and whenever we search closest one vector is provided ). 
SQL : MySQL , Postgress 


2.) WHY not NOSQL ALWAYS ??
because it is schema less database 
we can use it in hackathon or the places where we need our project be ready fast.
can lead to runtime error 
this makes our code strict 
Can change our schema very easily 


3.) WHY SQL : 
Define your schema strictly before inserting anything.

need to update the schema as our app changes need migrations



4.) Steps of postgress :

1.) Pick connection string
2.) connect via our node.js backend or we can also done on neon console .

3.) pg library is used for connection because it is a non blocking postgreSQL client for Node.js 

look over code index.ts

-------------------------

Now remaining part is SQL injection :


SQL injection : users can send you some bad data you can apply ZOD validation but still some errors can come up 


Example think like we need to provide 3 things we did provided 
INSERT INTO users(username ,email, password ) VALUES ('dhajfhjdkdjhf' , 'dfjdsk@gmail.com , '121232'); DELETE FROM users;;


This is seriously concerning because password is changed with another query which can be read directly by SQL as two different queries pass as 121232 and then delete all records of our data 


SOLUTION :

parameterized Queries we can provide all values separetly like :


import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);