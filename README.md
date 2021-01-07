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
when a read request is sent, all the todos and sent as a response with decreasing order of priority.<br>
when an update request is sent, todo_id is sent along the parameter(req.param) and rest of details are sent along the body(req.body).<br>
A delete request can be sent to delete the todo from database<br>

##DB schema
