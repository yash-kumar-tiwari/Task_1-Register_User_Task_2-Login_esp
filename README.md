# Task_1-Register_User_Task_2-Login_esp
Register User Details & Login 

Task (Register User & Login) -

* client folder contain UI part of task & server folder contain API part of task

* first you need to install all the packages by command : "npm install" in both client & server folder, then start server by command : "npm run dev app.js" & start app by command : "npm start"

* Register Link : client side validation is applied through required attribute of input fields and additional validation applied on fields via checking condition and if conditions not met then input credentials can not sent to the server for further implementation

* Login Link : validation is applied here is only by the required attribute of input fields 

* Users Link : Show you list of Users Entries in Database (only whose role is "user");


INSTRUCTIONS:

* frontend validation not applied on empty fields you need to enter first any character in fields to check validation and then check on submit 
(one by one validation is checked i.e. first enter name if it is shorter then 3 character it will prevent you from form submission & so on conditions will check)
check frontend validation of fields by entering at least character in them otherwise validation not applicable on empty fields 

* after register user details please dont forget to change their status from 0 to 1 for login purpose & also enter an entry of admin and change its role from user to admin for login

* on login, enter email & password if details matched from database and role of fetched detail is admin then you will see message on top of input field as "Logged in as Admin" & if user then you will see message on top of input field as "Logged in as User" & if input credentials are correct but its status is not 1 then you will see message on top of input field as "Invalid User or Verify Your Account"
