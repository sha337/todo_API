# todo List API
This is a simple todo List API built using Node.js on the backend and Postgresql for the database
The API performs the basic CRUD functinality.
Each todo contains: <br>
  <li>todo_id (unique interger)</li>
  <li>title</li> 
  <li>date (the date on which todo is created)</li>
  <li>priority (i assumed it to be an interger. Higher the number, greater the priority )</li> 
  <li>state (i assumed it to be an boolen variale, determining wether the task is completed or not. false - not completed, true - completed)</li> 
  
## Approach
when a create request is sent, API receives title and priority from client side. Date and state(false by default) id added on the backend. <br>
when a read request is sent, all the todos are sent as a response with decreasing order of priority.<br>
when an update request is sent, todo_id is sent along the parameter(req.param) and rest of details are sent along the body(req.body).<br>
A delete request can be sent to delete the todo from database<br>


## DB schema
there is only one table in the database with following entities:
<li>todo_id : SERIAL PRIMARY KEY</li>
<li>title : VARCHAR(255)</li>
<li>date : DATE DEFAULT CURRENT_DATE</li>
<li>priority : INT</li>
<li>state : BOOLEAN</li>

## Steps to Run on your localhost
<ol>
  <li>Clone the repository</li>
  <li>cd todo_API</li>
  <li>run "npm install" to install all the dependencies</li>
  <li>Open your postgres terminal and run the 3 commands given in models/database.sql. It'll create the database and required table</li>
  <li>open models/db.js and replace the user and password with your own credentials</li>
  <li>run "node app.js" to start the saever</li>
</ol>
