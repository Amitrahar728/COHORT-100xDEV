-> Hashing your password:
   Incase your websites database got leaked or hacked still this is our responsibility to preserve their password so , we should hash password before it reach and stored in the database .

-> Problem comes when we sign in how they match our passowrd with hashed password in database:
here comes a hashing algorithm which is only known by the admin. we decode and encode using the function.

-> What if two persons have same password then if   we know one persons password we will get to know others password directly .
   to combat this situation we have to figure out    something even after having same password their   hashed password should not be same .
   here comes salting feature :
   salting means adding something random with your password before hashing your password and then generate password+randomstring 


written in above code only in 7.1

----------------------------------------------------------------------------------------------------------


Error handling so that backend should not go down 

Email should be unique :
email: {type: String, unique: true}
and applying try catch on the lines where we think error can take place .

---------------------------------------------------------------------------------------------------------
input validation : ( By ZOD )->

Instead of email string name string user can give me anything and i have no input validation right now which we are going to apply via zod help .

one way is by writting if statement else give email is incorrect but in this case we have to write down a lot of email checks in if condition .

Zod : zod is mostly used library for such runtime checks in code for schema validation .

<!-- We should explore zod library more for sure for your secure schema checks at every place so that database remain in some format and no server problme took place  -->

Assignment : check that the password has 1 uppercase char , 1 lowecase char , 1 special character 

