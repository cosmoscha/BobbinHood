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


database schema

![DATABASE SETUP](https://user-images.githubusercontent.com/67036337/103301182-c741c900-49ce-11eb-8d96-dfd2169072d5.png)

#assets

| Name      | DataType | Details      |
|-----------|----------|--------------|
| 'id'        | int      | not null, PK |
| 'price'     | int      | not null     |
| 'marketCap' | int      | not null     |
| 'rating'    | string(5)   | not null     |

- Sequelize 'belongsToMany' 'dashboards' association
- Sequelize 'belongsToMany' 'watchlists' association

#watchlists

| Name     | DataType | Details     |
|----------|----------|-------------|
| 'id'       | int      | not null,PK |
| 'userId'   | int      | not null,FK |
| 'assetId'  | int      | not null,FK |
| 'invested' | boolean  | not null    |

- Sequelize 'belongsToMany' 'dashboards' association

#users

| Name     | DataType   | Details          |
|----------|------------|------------------|
| 'id'       | int        | not null,PK      |
| 'investor' | string     | not null         |
| 'password' | bytea      | not null         |
| 'email'    | string(50) | not null, unique |

- Sequelize 'belongsToMany' 'dashboards' association
- Sequelize 'belongsToMany' 'watchlists' association

#financials

| Name       | DataType   | Details      |
|------------|------------|--------------|
| 'id'         | int        | not null, PK |
| 'costBasis'  | int        | not null     |
| 'profit'     | int        | not null     |
| 'percentage' | percentage | not null     |

- Sequelize 'belongsToMany' 'portfolios' association

#portfolio

| Name         | DataType | Details      |
|--------------|----------|--------------|
| 'id'           | int      | not null, PK |
|'assetId'     | int      | not null, FK |
| 'userId'       | int      | not null, FK |
| 'watchlistId'  | int      | not null, FK |
| 'financialId' | int      | not null, FK |

- 'assetId' references 'assets' table
- 'userId' references 'users' table
- 'watchlistId' references 'watchlists' table
- 'financialId' references 'financials' table



npx sequelize model:generate --name Assets --attributes price:integer,marketCap:integer,rating:string
npx sequelize model:generate --name Watchlists --attributes userId:integer,assetId:integer,invested:boolean
npx sequelize model:generate --name Users --attributes investor:string,password:string,email:string
npx sequelize model:generate --name Financials --attributes costBasis:integer,profit:integer,percentage:decimal
npx sequelize model:generate --name Portfolios --attributes assetId:integer,userId:integer,watchlistId:integer,financialId:integer
npx sequelize db:migrate
