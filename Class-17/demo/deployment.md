# Render deployment

You can use Render dashboard in order to deploy your Node Application by following the below steps:- 

Deploying a Node application: 
	
 Go to https://dashboard.render.com/
	
Create an account using your GitHub (you will need to authorize it).
	
Go to dashboard.
	
- Click on `New +`.
	
Choose `web service` from the drop down list
	
 only fill :
	

		
* Name :  any name 
		
* Start Command  : node server.js  (your entry file name)
	
	
	
Click on `Advanced` to add an environment variable if needed (adding the DATABASE_URL for ex.)
	
Click Create Web Service


# Railway deployment
Deploying Postgres Database: 
 1- Go to your dashboard https://railway.app/

 2- Click on `Start a New Project`

 3- Choose `Provision PostgreSQL` from the drop down list

 4- Select your database and Create your tables.

 5- Go to `Connect` tab and copy the DATABASE_URL.