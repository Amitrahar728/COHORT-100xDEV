What we learned :
Auth basics
JWT(json web token)
authorization header 
creating your own auth middleware
localstorage




-----------------------------------------------------
Auth workflow :
Every time we sign in JWT provides us a token which at the backend keep striking the frontend 

When we login one token is issued to us which provides us a persistant session till we logout.

once token created token is sent everytime instead of username and password because if token is compromised it is okaay to overcome issue but password and username are important



-------------------------------------------------------------------------------------------------------------------------

creating an authenticated EP:-

means when someone send their token they get their data according to their token 

app.get("/me", (req,res)=>{

})


-------------------------------------------------------------------
Token vs JWT :-
Token : random 32 digit char and numbers
why not token : because every time we recieve a token it shows stateful nature (means it is stored somewhere) and then we have to check whether this token is attached to which username and password .
So , we are hitting database too many times which is not a good practice .



IN JWT (json web token):

JWT encrypt the provided username by the user while signin then it generates a token by encrypting .
and then whenever we request something then it provides this token and then backend decrypts this token and get to know username directly without hitting backend.
compact and self - contained way .
No need to store session data anywhere
There are npm libraries which we install when needed 
by :
npm install jsonwebtoken 
create  a JST_Secret variable
use jwt.verify to verify the token


