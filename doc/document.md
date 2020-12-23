The backend login flow in this project will be based off of the following plan:

The API login route will be hit with a request body holding a valid credential (either username or email) and password combination
The API login handler will look for a User with the input credential in either the username or email columns
Then the hashedPassword for that found User will be compared with the input password for a match
If there is a match, the API login route should send back a JWT in an HTTP-only cookie and a response body. The JWT and the body will hold the user's id, username and email
The backend signup flow in this project will be based off of the following plan:

The API signup route will be hit with a request body holding a username, email, and password
The API signup handler will create a User with the username, an email, and a hashedPassword created from the input password
If the creation is successful, the API signup route should send back a JWT in an HTTP-only cookie and a response body. The JWT and the body will hold the user's id, username and email
The backend logout flow will be based off of the following plan:

The API logout route will be hit with a request
The API logout handler will remove the JWT cookie set by the login or signup API routes and return a JSON success message
