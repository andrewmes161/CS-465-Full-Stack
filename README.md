# CS-465-Full-Stack
CS - 465 Full Stack Development using MEAN stack

Architecture

For this project, we primarily worked with the MEAN full-stack development approach. We started by constructing multi-page website from a template of various html files given to us by our client Travlr Getaways. From their we then created a basic backend to the application using mongoose, a node.js plugin used specifically as the middleware between the API and the mongo database itself. Finally we used completed the stack using angular to setup a single page application (SPA) for the admin which is able to login as a user on the app, update trips, and even add new trips directly to the database itself. Our client decided to go with a NoSQl database approach for its felxablility, allowing the company to expand their database as they see fit without disrupting existing data schemas.

Functionality

JSON is different from javascript in that json is used primarily as a structure language to organize objects/data that are being passed between different or single applications. JSON is the universal language, meaning data is sent out in json format then read, translated in to a more digestable form, processed, and then the results are converted back to json and sent to first application. One existing example of the refactoring of code during this project was in simplifying the headers and footers of the multi-page application. We copied the headers and footers of html doc onto their own file since it was repeated code. Then referenced them in using handlebars expressions. Now if we wanted to update the headers, all we need to do was edit a single file instead of multiple files.

Testing

Security was a fairly difficult process for me on this project. But from my own understand it starts with a user that already exists on the database. The passwords are held on the DB encrypted. When a user attempts to login, the password is checked to see if its matches the encrypted one using the salt to ensure proper decryption. Once verifited, the user is granted a token which allows them access to all privilages granted to them for as long as they're logged in. This token is used to ensure that communication between the api and the outside client is secure.

Reflection

This personally was my first introduction to fullstack development, and I'm fairly proud of what I was able to accomplish. I can definitely see this as a growing experience for me. I learned a lot, and what facinated me the most on this project in particular was definitely the security side of things. I know this was a basic introduction, but I'm really interesting in learning more about the intricate nature of web application defense and how these processes evolve overtime. What this course definitely did was ease some of the tension that I had about creating large application. To conclude I really enjoyed this project and I look foward to developing my next application.
