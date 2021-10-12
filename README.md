# tinder-clone
Copied from https://www.youtube.com/watch?v=ktjafK4SgWM&ab_channel=CleverProgrammer

# 1. step react app
(prep: install node.js, react.js, npm)
```
npx create-react-app {name of the app, as well as the directory name}
```

check 1: if you see `happy hacking` at the end of the process, you are good to start. 

check 2: `npm start`, if you can see a page pops up showing an spinning atom like svg, you are good to start. 
## vulnerabilities
Sometimes, there is some vulnerabilities afterwards, I guess it is about the packages updates or other issues. Trying to get a fix for this. 
### try 1
```
npm audit
npm audit fix
```
I choose to ignore this one for a moment as the main idea of this is not to fix vulnerabilities (although they are extremely important), read more [here](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities). 

# 2. Firebase
This is only to host the front end, steps are:  
- google `firebase`, setup an account if you don't have one 
- go to console
- add project (on free trial, only a limitted amount of projects can exist at a time)
- give it a name, then next
- turn off `Google Analytics`,then create project

# 3. Basic
First, according to the ivdeo, I deleted `App.test.js`, `logo.svg`, `setupTest.js` in `src`.  

checkout BEM class naming convention

CSS quick: 
```
<tag or classname, * for all> {
  <key>: <value>; /* comments */
}
```

This seems like to be a very common template for js to build a DOM
```
import React from "react"; 

function Func() {
  return (
    <div className="">
    </div>
  );
}

export default Func
```

# 4. [Material UI](https://mui.com/getting-started/usage/)
For [icons](https://mui.com/zh/components/icons/#main-content), and [list of them](https://mui.com/zh/components/material-icons/)  

# 5. Tinder cards
Mainly from: 
```
npm i react-tinder-card
```
Also checkout `state` in js and `!important` in css. 

# 6. Backend
New folder, using express and node. 
```
npm init
```
In `index.js` or `server.js` (`main`), write the backend logic. 
```
import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();  // define an instance
const port = process.env.PORT || 8001  // define port


// Middlewares


// DB config


// API Endpoints
app.get('/', (req, res) => res.status(200).send('DONE, 200')); // root resource

// Listener 
app.listen(port, () => console.log(`listening on localhost: ${port}`));
```
You need this for running and listening locally:  
```
sudo npm i nodemon
```

# ??. Deploying
checkout [Heroku]()