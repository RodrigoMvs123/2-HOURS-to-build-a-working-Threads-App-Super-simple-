"# 2HOURS to build a working Threads App! (Super Simple!)"

https://www.youtube.com/watch?v=J7HMa48mU3E

https://raw.githubusercontent.com/RodrigoMvs123/2-HOURS-to-build-a-working-Threads-App-Super-simple-/main/README.md

https://github.com/RodrigoMvs123/2-HOURS-to-build-a-working-Threads-App-Super-simple-/blame/main/README.md

React App ( react-threads )
Visual Studio Code
Terminal
npx create-react-app react-threads

Visual Studio Code
Explorer 
OPEN EDITORS
src
db.json

Visual Studio Code
Terminal 
npm i json server
https://www.npmjs.com/package/json-server 
package.json
{
  "dependencies": {
    "json": "^11.0.0",
    "server": "^1.0.38"
  }
}

Visual Studio Code
EXPLORER
OPEN EDITORS
src
db.json

db.json 
{
    "users":[
       {
         "id": 0,
         "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "username": "Code With Rodrigo Vieira",
         "handle": "rodrigovieira",
         "bio": "www.facebook.com/vieirarodrigo/posts/10158083592168253",
         "link": "https://www.linkedin.com/in/rodrigo-m-v-soares-3124b818a/",
         "img": "https://imgur.com/wdCSSCz",
         "instagram_url": "https://www.instagram.com/rodrigovieira.1/",
         "followers": [
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           },
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           }
         ]
       },
       {
         "id": 1,
         "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad",
         "username": "Bobby's Burgers",
         "handle": "bobbyburgers",
         "bio": "If burgers are your thing, then look no further!",
         "link": "https://www.bobbyburgers.com/",
         "img": "https://imgur.com/UHykNhu",
         "instagram_url": "https://www.instagram.com/bobbyburger/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
        {
         "id": 2,
         "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908",
         "username": "Ani Talli",
         "handle": "truthsaver",
         "bio": "Just a person trying do their best",
         "link": "",
         "img": "https://imgur.com/nHGHIoT",
         "instagram_url": "https://www.instagram.com/anitalli/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
    ],
    "threads": [
      {
         "id": 0,
         "timestamp": "Thu Jul 13 2023 09:05:38 GMT-0300 (Horário Padrão de Brasília)",
         "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "thread_to": null,
         "reply_to": null,
         "text": "Hello world (of threads)",
         "likes": [
           {
             "uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           },
           {
             "uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           }
         ] 
      },
      {
        "id": 1,
        "timestamp": "Thu Jul 13 2023 10:08:38 GMT-0300 (Horário Padrão de Brasília)",
        "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
        "thread_to": null,
        "reply_to": null,
        "text": "Awesome thread!",
        "likes": [] 
     },
     {
      "id": 2,
      "timestamp": "Thu Jul 13 2023 10:30:38 GMT-0300 (Horário Padrão de Brasília)",
      "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
      "thread_to": null,
      "reply_to": null,
      "text": "Another one!",
      "likes": [] 
   }, 
   {
    "id": 3,
    "timestamp": "Thu Jul 13 2023 19:30:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": null,
    "reply_to": null,
    "text": "Excited to have launched Bobbys Burger!",
    "likes": [] 
   },
   {
    "id": 4,
    "timestamp": "Thu Jul 13 2023 19:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "thread_to": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "reply_to": 3,
    "text": "Congrats!",
    "likes": [] 
   }
  ]
}

https://www.uuidgenerator.net/ 
https://imgur.com/ 
https://imgur.com/gallery/z4CwbYH 
https://imgur.com/wdCSSCz 
https://app.tabnine.com/signin 

Visual Studio Code
Terminal 
npx json-server - -watch db.json
Resources
http://localhost:3000/posts 
[
  {
    "id": 1,
    "title": "json-server",
    "author": "typicode"
  }
]
http://localhost:3000/comments
[
  {
    "id": 1,
    "body": "some comment",
    "postId": 1
  }
]
http://localhost:3000/profile
{
  "name": "typicode"
}
Home
http://localhost:3000 

Visual Studio Code
npm run start
localhost:3001

Visual Studio Code
EXPLORER
OPEN EDITORS
src
index.css

index.css

body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Feed.js

Feed.js
const Feed() => {
    return (
      <div className="feed">
        
      </div>
    );
  }
  
export default Feed

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Header.js

Header.js
const Header() => {
    return (
      <header>
      </header> 
    );
  }
  
export default Header
  
Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Nav.js

Nav.js
const Nav() => {
    return (
      <nav>
      </nav> 
    );
  }
  
export default Nav
  
Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
PopUp.js

PopUp.js
const PopUp = () => {
    return (
      <div className="popup">
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Thread.js

Thread.js
const Thread = () => {
    return (
      <article className="feed-card">
      </article> 
    );
  }
  
export default Thread
  
Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
PopUpThread.js

PopUpThread.js
const PopUpThread = () => {
    return (
      <article className="feed-card">
      </article> 
    );
  }
  
export default PopUpThread

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
ThreadInput.js

ThreadInput.js
const ThreadInput = () => {
    return (
        <>
                <p></p>
                <input></input>
                <button></button>
        </>
    );
  }
  
export default ThreadInput

Visual Studio Code
EXPLORER
OPEN EDITORS
src
App.js

App.js
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"

const App() => {
  return (
    <div className="app">
      <Nav/> 
      <Header/>
      <Feed/>
      <PopUp/>
    </div>
  );
}

export default App

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
ThreadInput.js

ThreadInput.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = () => {
    return (
      <div className="popup">
          <PopUpThread/>
          <threadInput/>
      </div> 
    );
  }
  
export default PopUp
  

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Feed.js

Feed.js
import Thread from "./Thread"

const Feed() => {
    return (
      <div className="feed">
          <Thread/>
      </div>
    );
  }
  
export default Feed
  
Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Nav.js

Nav.js
const Nav() => {
    return (
      <nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.614 11h-3.638c-.028-.758-.091-1.489-.182-2.194 1.848.563 3.199 1.36 3.82 2.194zm-5.636 0h-2.978v-2.977c.949.042 1.848.144 2.688.289.146.841.248 1.738.29 2.688zm-2.978-4.977v-3.638c.835.622 1.632 1.973 2.194 3.82-.705-.09-1.436-.153-2.194-.182zm-2-3.638v3.638c-.758.029-1.489.091-2.194.182.562-1.847 1.359-3.198 2.194-3.82zm0 5.638v2.977h-2.978c.042-.95.145-1.847.29-2.688.84-.145 1.739-.248 2.688-.289zm-4.977 2.977h-3.637c.621-.834 1.973-1.631 3.819-2.194-.091.705-.153 1.436-.182 2.194zm-3.637 2h3.638c.028.758.091 1.489.182 2.194-1.848-.563-3.199-1.36-3.82-2.194zm5.636 0h2.978v2.977c-.949-.042-1.848-.144-2.688-.289-.145-.841-.248-1.738-.29-2.688zm2.978 4.977v3.638c-.835-.622-1.632-1.973-2.194-3.82.705.09 1.436.153 2.194.182zm2 3.638v-3.638c.758-.029 1.489-.091 2.194-.182-.562 1.847-1.359 3.198-2.194 3.82zm0-5.638v-2.977h2.978c-.042.95-.144 1.847-.29 2.688-.84.145-1.739.248-2.688.289zm4.977-2.977h3.638c-.621.834-1.973 1.631-3.819 2.194.09-.705.152-1.436.181-2.194zm3.212-4.938c-1.036-.61-2.322-1.104-3.794-1.458-.353-1.471-.848-2.758-1.457-3.793 2.352 1.012 4.24 2.899 5.251 5.251zm-13.127-5.251c-.61 1.036-1.105 2.322-1.458 3.793-1.471.354-2.757.848-3.793 1.458 1.011-2.352 2.899-4.239 5.251-5.251zm-5.251 13.127c1.036.61 2.322 1.104 3.794 1.458.353 1.471.848 2.758 1.457 3.793-2.352-1.012-4.24-2.899-5.251-5.251zm13.127 5.251c.609-1.036 1.104-2.322 1.457-3.793 1.472-.354 2.758-.848 3.794-1.458-1.011 2.352-2.899 4.239-5.251 5.251z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>     
      </nav> 
    );
  }
  
export default Nav
  
https://iconmonstr.com/globe-4-svg/ 
https://iconmonstr.com/instagram-11-svg/ 

Visual Studio Code
EXPLORER
OPEN EDITORS
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Header.js

Header.js
const Header() => {
    return (
      <header>
          <div className="info-container">
             <div className="user-info-container">
                  <h1>username</h1>
                  <p>handle <span className="threads-info">threads.net</span></p>
             </div>
             <div className="img-container">
                <img src="" alt="profile-avatar"/>
             </div>
          </div>
          <p>bio</p>
          <div className="sub-info-container">
             <p className="sub-text">X followers • <a href="">link</a></p>
          </div>
          <button 
               className="primary"
               onClick={() => navigator.clipboard.writeText('I am a URL')}>
               Share Profile
          </button>
          <div className="button-container">
              <button className=“current”>Threads</button>
              <button>Replies</button>
          </div>
      </header> 
    );
  }
  
export default Header
  
https://symbl.cc/en/2022/ 
•

Visual Studio Code
EXPLORER
OPEN EDITORS
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

h1, h2 p {
    margin: 4px;
}

h1 {
    font-size: 24px;
}

.sub-text {
    color: rgb(144, 144, 144);
}

a {
    text-decoration: none;
    color: rgb(144, 144, 144);
}

header .info-container {
    display: flex;
    justify-content: space-between;
}

header .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

header.img-container img {
    height: 110%;
}

header .threads-info {
    background-color: rbg(59, 59, 59);
    color: rgb(144, 144, 144);
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 20px;
}

button.primary {
    border: rgb(144, 144, 144) solid 1px;
    background-color: transparent;
    padding: 7px;
    margin: 15px 0;
    border-radius: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 100%;
}

.button-container button {
    border: none;
    background-color: transparent;
    padding: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 50%;
    border-bottom:rgb(144, 144, 144) solid 1px;
}

.button-container button.current {
    border-bottom:rgb(250, 250, 250) solid 2px;
}

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Thread.js

Threads.js
const Thread = () => {
    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src="" alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>handle</strong></p>
                      <p className=“sub-text”>text</p>
                  </div>
               </div>
                 <p>time</p>
            </div>
               <div className="icons">
                   <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className=“sub-text”><span>X replies</span> • <spam>X likes</spam></p>    
      </article> 
    );
  }
  
export default Thread
  
https://iconmonstr.com/heart-lined-svg/ 
https://iconmonstr.com/speech-bubble-10-svg/ 
https://iconmonstr.com/retweet-1-svg/ 
https://iconmonstr.com/paper-plane-2-svg/ 

Visual Studio Code
EXPLORER
OPEN EDITORS
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

h1, h2 p {
    margin: 4px;
}

h1 {
    font-size: 24px;
}

.sub-text {
    color: rgb(144, 144, 144);
}

a {
    text-decoration: none;
    color: rgb(144, 144, 144);
}

header .info-container {
    display: flex;
    justify-content: space-between;
}

header .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

header.img-container img {
    height: 110%;
}

header .threads-info {
    background-color: rbg(59, 59, 59);
    color: rgb(144, 144, 144);
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 20px;
}

button.primary {
    border: rgb(144, 144, 144) solid 1px;
    background-color: transparent;
    padding: 7px;
    margin: 15px 0;
    border-radius: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 100%;
}

.button-container button {
    border: none;
    background-color: transparent;
    padding: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 50%;
    border-bottom:rgb(144, 144, 144) solid 1px;
}

.button-container button.current {
    border-bottom:rgb(250, 250, 250) solid 2px;
}

.feed-card .icons svg {
    height: 20px;
    padding: 0 5px;
}

.fead-card {
    border-bottom: rgb(114, 114, 114) solid 1px;
    padding: 10px 0;
}

.feed-card .text-container {
    display: flex;
    justify-content: space-between;
}

.feed-card .img-container {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}

.fead-card .img-container img {
    height: 110%;
}


Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
Feed.js

Feed.js
import Thread from "./Thread"

const Feed() => {
    return (
      <div className="feed">
          <Thread/>
      </div>
    );
  }
  
export default Feed


Visual Studio Code
EXPLORER
OPEN EDITORS
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

h1, h2 p {
    margin: 4px;
}

h1 {
    font-size: 24px;
}

.sub-text {
    color: rgb(144, 144, 144);
}

a {
    text-decoration: none;
    color: rgb(144, 144, 144);
}

header .info-container {
    display: flex;
    justify-content: space-between;
}

header .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

header.img-container img {
    height: 110%;
}

header .threads-info {
    background-color: rbg(59, 59, 59);
    color: rgb(144, 144, 144);
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 20px;
}

button.primary {
    border: rgb(144, 144, 144) solid 1px;
    background-color: transparent;
    padding: 7px;
    margin: 15px 0;
    border-radius: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 100%;
}

.button-container button {
    border: none;
    background-color: transparent;
    padding: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 50%;
    border-bottom:rgb(144, 144, 144) solid 1px;
}

.button-container button.current {
    border-bottom:rgb(250, 250, 250) solid 2px;
}

.feed-card .icons svg {
    height: 20px;
    padding: 0 5px;
}

.fead-card {
    border-bottom: rgb(114, 114, 114) solid 1px;
    padding: 10px 0;
}

.feed-card .text-container {
    display: flex;
    justify-content: space-between;
}

.feed-card .img-container {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}

.fead-card .img-container img {
    height: 110%;
}

.feed {
    height: 400px;
    overflow-x: scroll;
}

Visual Studio Code
EXPLORER
OPEN EDITORS
src
components
ThreadInput.js

ThreadInput.js
const ThreadInput = () => {
    return (
        <>
            <p></p>
            <input></input>
            <button className="primary">Post</button>
        </>
    );
  }
  
export default ThreadInput
Visual Studio Code
EXPLORER
OPEN EDITORS
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

h1, h2 p {
    margin: 4px;
}

h1 {
    font-size: 24px;
}

.sub-text {
    color: rgb(144, 144, 144);
}

a {
    text-decoration: none;
    color: rgb(144, 144, 144);
}

header .info-container {
    display: flex;
    justify-content: space-between;
}

header .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

header.img-container img {
    height: 110%;
}

header .threads-info {
    background-color: rbg(59, 59, 59);
    color: rgb(144, 144, 144);
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 20px;
}

button.primary {
    border: rgb(144, 144, 144) solid 1px;
    background-color: transparent;
    padding: 7px;
    margin: 15px 0;
    border-radius: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 100%;
}

.button-container button {
    border: none;
    background-color: transparent;
    padding: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 50%;
    border-bottom:rgb(144, 144, 144) solid 1px;
}

.button-container button.current {
    border-bottom:rgb(250, 250, 250) solid 2px;
}

.feed-card .icons svg {
    height: 20px;
    padding: 0 5px;
}

.fead-card {
    border-bottom: rgb(114, 114, 114) solid 1px;
    padding: 10px 0;
}

.feed-card .text-container {
    display: flex;
    justify-content: space-between;
}

.feed-card .img-container {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}

.fead-card .img-container img {
    height: 110%;
}

.feed {
    height: 400px;
    overflow-x: scroll;
}

input {
    background: transparent;
    border: solid 1px rgb(144, 144, 144);
    padding: 10px;
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
    border-radius: 5px;
    color: rgb(250, 250, 250);
}

input:focus {
    outline: none;
}

Visual Studio Code
Explorer
OPEN EDITORS
src
components
PopUp.js

PopUp.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = () => {
    return (
      <div className="popup">
          <PopUpThread/>
          <threadInput/>
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
Explorer
OPEN EDITOR
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

h1, h2 p {
    margin: 4px;
}

h1 {
    font-size: 24px;
}

.sub-text {
    color: rgb(144, 144, 144);
}

a {
    text-decoration: none;
    color: rgb(144, 144, 144);
}

header .info-container {
    display: flex;
    justify-content: space-between;
}

header .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

header.img-container img {
    height: 110%;
}

header .threads-info {
    background-color: rbg(59, 59, 59);
    color: rgb(144, 144, 144);
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 20px;
}

button.primary {
    border: rgb(144, 144, 144) solid 1px;
    background-color: transparent;
    padding: 7px;
    margin: 15px 0;
    border-radius: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 100%;
}

.button-container button {
    border: none;
    background-color: transparent;
    padding: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 50%;
    border-bottom:rgb(144, 144, 144) solid 1px;
}

.button-container button.current {
    border-bottom:rgb(250, 250, 250) solid 2px;
}

.feed-card .icons svg {
    height: 20px;
    padding: 0 5px;
}

.fead-card {
    border-bottom: rgb(114, 114, 114) solid 1px;
    padding: 10px 0;
}

.feed-card .text-container {
    display: flex;
    justify-content: space-between;
}

.feed-card .img-container {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}

.fead-card .img-container img {
    height: 110%;
}

.feed {
    height: 400px;
    overflow-x: scroll;
}

input {
    background: transparent;
    border: solid 1px rgb(144, 144, 144);
    padding: 10px;
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
    border-radius: 5px;
    color: rgb(250, 250, 250);
}

input:focus {
    outline: none;
}

.popup {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 650px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px,
    rgba(0, 0, 0, 0.12) 0 -12px 30px,
    rgba(0, 0, 0, 0.12) 0 4px 6px,
    rgba(0, 0, 0, 0.17) 0 12px 13px,
    rgba(0, 0, 0, 0.9) 0 -3px 5px
}

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"

const App() => {
    const [user, setUser] = useState(null)
    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }
    
    useEffect(() => {
        getUser()
    }, [])

    console.log(user)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header/>
          <Feed/>
          <PopUp/>
        </div>}
      </>
    );
}

export default App


Visual Studio Code
Explorer
OPEN EDITOR
src
components
Nav.js

Nav.js
const Nav({ url }) => {
    return (
      <nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.614 11h-3.638c-.028-.758-.091-1.489-.182-2.194 1.848.563 3.199 1.36 3.82 2.194zm-5.636 0h-2.978v-2.977c.949.042 1.848.144 2.688.289.146.841.248 1.738.29 2.688zm-2.978-4.977v-3.638c.835.622 1.632 1.973 2.194 3.82-.705-.09-1.436-.153-2.194-.182zm-2-3.638v3.638c-.758.029-1.489.091-2.194.182.562-1.847 1.359-3.198 2.194-3.82zm0 5.638v2.977h-2.978c.042-.95.145-1.847.29-2.688.84-.145 1.739-.248 2.688-.289zm-4.977 2.977h-3.637c.621-.834 1.973-1.631 3.819-2.194-.091.705-.153 1.436-.182 2.194zm-3.637 2h3.638c.028.758.091 1.489.182 2.194-1.848-.563-3.199-1.36-3.82-2.194zm5.636 0h2.978v2.977c-.949-.042-1.848-.144-2.688-.289-.145-.841-.248-1.738-.29-2.688zm2.978 4.977v3.638c-.835-.622-1.632-1.973-2.194-3.82.705.09 1.436.153 2.194.182zm2 3.638v-3.638c.758-.029 1.489-.091 2.194-.182-.562 1.847-1.359 3.198-2.194 3.82zm0-5.638v-2.977h2.978c-.042.95-.144 1.847-.29 2.688-.84.145-1.739.248-2.688.289zm4.977-2.977h3.638c-.621.834-1.973 1.631-3.819 2.194.09-.705.152-1.436.181-2.194zm3.212-4.938c-1.036-.61-2.322-1.104-3.794-1.458-.353-1.471-.848-2.758-1.457-3.793 2.352 1.012 4.24 2.899 5.251 5.251zm-13.127-5.251c-.61 1.036-1.105 2.322-1.458 3.793-1.471.354-2.757.848-3.793 1.458 1.011-2.352 2.899-4.239 5.251-5.251zm-5.251 13.127c1.036.61 2.322 1.104 3.794 1.458.353 1.471.848 2.758 1.457 3.793-2.352-1.012-4.24-2.899-5.251-5.251zm13.127 5.251c.609-1.036 1.104-2.322 1.457-3.793 1.472-.354 2.758-.848 3.794-1.458-1.011 2.352-2.899 4.239-5.251 5.251z"/></svg>
          <a href={url}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>     
      </nav> 
    );
  }
  
export default Nav
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"

const App() => {
    const [user, setUser] = useState(null)
    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }
    
    useEffect(() => {
        getUser()
    }, [])

    console.log(user)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
          />
          <Feed/>
          <PopUp/>
        </div>}
      </>
    );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Header.js

Header.js
const Header({ user }) => {
    return (
      <header>
          <div className="info-container">
             <div className="user-info-container">
                  <h1>{user.username}</h1>
                  <p>{user.handle}<span className="threads-info">threads.net</span></p>
             </div>
             <div className="img-container">
                <img src={user.img} alt="profile-avatar"/>
             </div>
          </div>
          <p>{user.bio}</p>
          <div className="sub-info-container">
             <p className="sub-text">{user.followers.lenght} followers • <a href={user.link}>{user.link.repalce('https://www.', "")}</a></p>
          </div>
          <button 
               className="primary"
               onClick={() => navigator.clipboard.writeText('I am a URL')}>
               Share Profile
          </button>
          <div className="button-container">
              <button className="current abs">Threads</button>
              <button>Replies</button>
          </div>
      </header> 
    );
  }
  
export default Header
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {

    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    console.log(threats)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed/>
          <PopUp/>
        </div>}
      </>
    );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Header.js

Header.js
const Header({ user, viewThreadsFeed, setViewThreadsFeed }) => {
    return (
      <header>
          <div className="info-container">
             <div className="user-info-container">
                  <h1>{user.username}</h1>
                  <p>{user.handle}<span className="threads-info">threads.net</span></p>
             </div>
             <div className="img-container">
                <img src={user.img} alt="profile-avatar"/>
             </div>
          </div>
          <p>{user.bio}</p>
          <div className="sub-info-container">
             <p className="sub-text">{user.followers.lenght} followers • <a href={user.link}>{user.link.repalce('https://www.', "")}</a></p>
          </div>
          <button 
               className="primary"
               onClick={() => navigator.clipboard.writeText('I am a URL')}>
               Share Profile
          </button>
          <div className="button-container">
              <button className={viewThreadsFeed ? "current": null} onClick={() => setViewThreadsFeed(true)}>Threads</button>
              <button className={!viewThreadsFeed ? "current": null} onClick={() => setViewThreadsFeed(false)}>Replies</button>
           </div>
      </header> 
    );
  }
  
export default Header
  
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    console.log(filteredThreads)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              filteredThreads={filteredThreads}
          />
          <PopUp/>
        </div>}
      </>
    );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components 
Feed.js

Feed.js
import Thread from "./Thread"

const Feed = ({ user, filteredThreads }) => {
    return (
      <div className="feed">
          {filteredThreads?.map(filteredThread =>
             <Thread key={filteredThread.id} user={user} filteredThread={filteredThread}/>)}
      </div>
    );
  }
  
export default Feed

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Thread.js

Thread.js
const Thread = ({ user, filteredThread }) => {
    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src={user.img} alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>{user.handle}</strong></p>
                      <p>{filteredThread.text}</p>
                  </div>
               </div>
                 <p className="sub-text">time</p>
            </div>
               <div className="icons">
                   <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className="sub-text"><span>X replies</span> • <spam>X likes</spam></p>    
      </article> 
    );
  }
  
export default Thread
  
Visual Studio Code
Terminal 
npm i moment 

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Thread.js

Thread.js
import { useState, useEffect } from "react"
import moment from 'moment'

const Thread = ({ user, filteredThread }) => {

    const timePassed = moment().startOf('day').fromNow(filteredThread.timestamp)
    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src={user.img} alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>{user.handle}</strong></p>
                      <p>{filteredThread.text}</p>
                  </div>
               </div>
                 <p className="sub-text">{time.timePassed}</p>
            </div>
               <div className="icons">
                   <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className="sub-text"><span>X replies</span> • <spam>{filteredThread.likes.lenght} likes</spam></p>    
      </article> 
    );
  }
  
export default Thread

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    console.log(filteredThreads)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              filteredThreads={filteredThreads}
          />
          <PopUp/>
        </div>}
        <div>
            <WriteIcon/>
        </div>
      </div>}
     </>
    );
}

export default App


Visual Studio Code
Explorer
OPEN EDITOR
src
component
WriteIcon.js

WriteIcon.js
const WriteIcon = () => {
    return (
        <svg className=“write-icon” clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z" fill-rule="nonzero"/></svg>
    )
}

export default WriteIcon

https://iconmonstr.com/pencil-square-lined-svg/ 

Visual Studio Code
Explorer
OPEN EDITOR
src
index.css

index.css
body {
    margin: 0;
    padding: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    color: rgb(250, 250, 250);
    font-family: Arial, sans-serif;
}

.app {
    position: relative;
    height: 750px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
}

svg {
    fill rgb:(250, 250, 250);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

h1, h2 p {
    margin: 4px;
}

h1 {
    font-size: 24px;
}

.sub-text {
    color: rgb(144, 144, 144);
}

a {
    text-decoration: none;
    color: rgb(144, 144, 144);
}

header .info-container {
    display: flex;
    justify-content: space-between;
}

header .img-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}

header.img-container img {
    height: 110%;
}

header .threads-info {
    background-color: rbg(59, 59, 59);
    color: rgb(144, 144, 144);
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 20px;
}

button.primary {
    border: rgb(144, 144, 144) solid 1px;
    background-color: transparent;
    padding: 7px;
    margin: 15px 0;
    border-radius: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 100%;
}

.button-container button {
    border: none;
    background-color: transparent;
    padding: 7px;
    color: rgb(250, 250, 250);
    font-weight: bold;
    width: 50%;
    border-bottom:rgb(144, 144, 144) solid 1px;
}

.button-container button.current {
    border-bottom:rgb(250, 250, 250) solid 2px;
}

.feed-card .icons svg {
    height: 20px;
    padding: 0 5px;
}

.fead-card {
    border-bottom: rgb(114, 114, 114) solid 1px;
    padding: 10px 0;
}

.feed-card .text-container {
    display: flex;
    justify-content: space-between;
}

.feed-card .img-container {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}

.fead-card .img-container img {
    height: 110%;
}

.feed {
    height: 350px;
    overflow-x: scroll;
}

input {
    background: transparent;
    border: solid 1px rgb(144, 144, 144);
    padding: 10px;
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
    border-radius: 5px;
    color: rgb(250, 250, 250);
}

input:focus {
    outline: none;
}

.popup {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 650px;
    width: 380px;
    border-radius: 40px;
    background-color: rgb(38, 38, 38);
    padding: 20px;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px,
    rgba(0, 0, 0, 0.12) 0 -12px 30px,
    rgba(0, 0, 0, 0.12) 0 4px 6px,
    rgba(0, 0, 0, 0.17) 0 12px 13px,
    rgba(0, 0, 0, 0.9) 0 -3px 5px
}

.write-icon {
    fill rgb(250, 250, 250);
    height: 40px;
    margin-top: 20px;
    margin-left: 170px;
}

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    console.log(filteredThreads)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              filteredThreads={filteredThreads}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
PopUp.js

PopUp.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = ({ user, setOpenPopUp }) => {
    return (
      <div className="popup">
          <p onClick={() => setOpenPopUp(false)}>X</p>
          <PopUpThread/>
          <threadInput/>
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Feed.js

Feed.js
import Thread from "./Thread"

const Feed = ({ user, setOpenPopUp, filteredThreads }) => {
    return (
      <div className="feed">
          {filteredThreads?.map(filteredThread =>
             <Thread 
                 key={filteredThread.id} 
                 setOpenPopUp={setOpenPopUp}
                 user={user} 
                 filteredThread={filteredThread}
             />)}
      </div>
    );
  }
  
export default Feed

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Thread.js

Thread.js
import { useState, useEffect } from "react"
import moment from 'moment'

const Thread = ({ user, setOpenPopUp, filteredThread }) => {

    const timePassed = moment().startOf('day').fromNow(filteredThread.timestamp)

    const handleClick = () => {
        setOpenPopUp(true)
    }

    console.log('filteredThread', filteredThread)

    const postLike = async () => {
        const hasBeenLikedByUser = filteredThread.likes.some(like => like.user_uuid === user.user_uuid)
        if (!hasBeenLikedByUser) 
            filteredThread.likes.push({user_uuid:user.user_uuid})
            
            try {
                 const response =  await fetch(`http://localhost:3000/thread/${filteredThread.id}`
                 {
                   method: 'PUT',
                   headers: { 
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(filteredThread)
                })
                const result = await response.json()
                console.log("Success", result)
            } catch (error) {
                console.error(error)
            } 
           
        }
    }
    {

    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src={user.img} alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>{user.handle}</strong></p>
                      <p>{filteredThread.text}</p>
                  </div>
               </div>
                 <p className="sub-text">{time.timePassed}</p>
            </div>
               <div className="icons">
                   <svg onClick={postLike} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className="sub-text"><span onClick={handleClick}>X replies</span> • <spam>{filteredThread.likes.lenght} likes</spam></p>    
      </article> 
    );
  }
  
export default Thread

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Feed.js

Feed.js
import Thread from "./Thread"

const Feed = ({ user, setOpenPopUp, filteredThreads, getThreads }) => {
    return (
      <div className="feed">
          {filteredThreads?.map(filteredThread =>
             <Thread 
                 key={filteredThread.id} 
                 setOpenPopUp={setOpenPopUp}
                 user={user} 
                 filteredThread={filteredThread}
                 getThreads={getThreads}
             />)}
      </div>
    );
  }
  
export default Feed

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Threads.js

Threads.js
import { useState, useEffect } from "react"
import moment from 'moment'

const Thread = ({ user, setOpenPopUp, filteredThread, getTreads }) => {

    const timePassed = moment().startOf('day').fromNow(filteredThread.timestamp)

    const handleClick = () => {
        setOpenPopUp(true)
    }

    console.log('filteredThread', filteredThread)

    const postLike = async () => {
        const hasBeenLikedByUser = filteredThread.likes.some(like => like.user_uuid === user.user_uuid)
        if (!hasBeenLikedByUser) 
            filteredThread.likes.push({user_uuid:user.user_uuid})
            
            try {
                 const response =  await fetch(`http://localhost:3000/thread/${filteredThread.id}`
                 {
                   method: 'PUT',
                   headers: { 
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(filteredThread)
                })
                const result = await response.json()
                console.log("Success", result)
                getTreads()
            } catch (error) {
                console.error(error)
            } 
           
        }
    }
    {

    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src={user.img} alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>{user.handle}</strong></p>
                      <p>{filteredThread.text}</p>
                  </div>
               </div>
                 <p className="sub-text">{time.timePassed}</p>
            </div>
               <div className="icons">
                   <svg onClick={postLike} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className="sub-text"><span onClick={handleClick}>X replies</span> • <spam>{filteredThread.likes.lenght} likes</spam></p>    
      </article> 
    );
  }
  
export default Thread
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const getReplies = async () => {
      const response = await fetch(``)
    }
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Feed.js

Feed.js
import Thread from "./Thread"

const Feed = ({ user, setOpenPopUp, filteredThreads, getThreads, setInteractingThread }) => {
    return (
      <div className="feed">
          {filteredThreads?.map(filteredThread =>
             <Thread 
                 key={filteredThread.id} 
                 setOpenPopUp={setOpenPopUp}
                 user={user} 
                 filteredThread={filteredThread}
                 getThreads={getThreads}
                 setInteractingThread={setInteractingThread}
             />)}
      </div>
    );
  }
  
export default Feed

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Threads.js

Thread.js
import { useState, useEffect } from "react"
import moment from 'moment'

const Thread = ({ user, setOpenPopUp, filteredThread, getTreads, setInteractingThread }) => {

    const timePassed = moment().startOf('day').fromNow(filteredThread.timestamp)

    const handleClick = () => {
        setOpenPopUp(true)
        setInteractingThread(filteredThread)
    }

    const postLike = async () => {
        const hasBeenLikedByUser = filteredThread.likes.some(like => like.user_uuid === user.user_uuid)
        if (!hasBeenLikedByUser) 
            filteredThread.likes.push({user_uuid:user.user_uuid})
            
            try {
                 const response =  await fetch(`http://localhost:3000/thread/${filteredThread.id}`
                 {
                   method: 'PUT',
                   headers: { 
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(filteredThread)
                })
                const result = await response.json()
                console.log("Success", result)
                getTreads()
            } catch (error) {
                console.error(error)
            } 
           
        }
    }
    {

    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src={user.img} alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>{user.handle}</strong></p>
                      <p>{filteredThread.text}</p>
                  </div>
               </div>
                 <p className="sub-text">{time.timePassed}</p>
            </div>
               <div className="icons">
                   <svg onClick={postLike} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className="sub-text"><span onClick={handleClick}>X replies</span> • <spam>{filteredThread.likes.lenght} likes</spam></p>    
      </article> 
    );
  }
  
export default Thread
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreats = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const getReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
PopUp.js

PopUp.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = ({ user, setOpenPopUp, PopUpFeedThread }) => {
    return (
      <div className="popup">
          <p onClick={() => setOpenPopUp(false)}>X</p>
          {PopUpFeedThreads?map(PopUpFeedThread => 
               <PopUpThread
                    user={user}
                    key={PopUpFeedThread.id}
                    popPupFeedThread={popPupFeedThread}
               />
          )}
          <threadInput/>
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
Explorer
OPEN EDITOR
src
components
PopUpThread.js

PopUpThread.js
import moment from "moment";

const PopUpThread = ({ user, popUpFeedThread }) => {

    const timePassed = moment().startOf('day').fromNow(popUpFeedThread.timestamp)
    return (
      <article className="feed-card">
          <div className="text-container">
            <div>
               <div className="img-container">
                   <img source={user.img} alt={"profile avatar"}/>
              </div>
              <div>
                 <p><strong>{user.handle}</strong></p>
                 <p>{popUpFeedThread.text}</p>
            </div>
            </div>
          </div>
          <p className="sub-text">{timePassed}</p>
      </article> 
    );
  }
  
export default PopUpThread

Visual Studio Code
Explorer
OPEN EDITOR
src
db.json

db.json
{
    "users":[
       {
         "id": 0,
         "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "username": "Code With Rodrigo Vieira",
         "handle": "rodrigovieira",
         "bio": "www.facebook.com/vieirarodrigo/posts/10158083592168253",
         "link": "https://www.linkedin.com/in/rodrigo-m-v-soares-3124b818a/",
         "img": "https://imgur.com/wdCSSCz",
         "instagram_url": "https://www.instagram.com/rodrigovieira.1/",
         "followers": [
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           },
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           }
         ]
       },
       {
         "id": 1,
         "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad",
         "username": "Bobby's Burgers",
         "handle": "bobbyburgers",
         "bio": "If burgers are your thing, then look no further!",
         "link": "https://www.bobbyburgers.com/",
         "img": "https://imgur.com/UHykNhu",
         "instagram_url": "https://www.instagram.com/bobbyburger/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
        {
         "id": 2,
         "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908",
         "username": "Ani Talli",
         "handle": "truthsaver",
         "bio": "Just a person trying do their best",
         "link": "",
         "img": "https://imgur.com/nHGHIoT",
         "instagram_url": "https://www.instagram.com/anitalli/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
    ],
    "threads": [
      {
         "id": 0,
         "timestamp": "Thu Jul 13 2023 09:05:38 GMT-0300 (Horário Padrão de Brasília)",
         "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "thread_to": null,
         "reply_to": null,
         "text": "Hello world (of threads)",
         "likes": [
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           },
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           }
         ] 
      },
      {
        "id": 1,
        "timestamp": "Thu Jul 13 2023 10:08:38 GMT-0300 (Horário Padrão de Brasília)",
        "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
        "thread_to": null,
        "reply_to": null,
        "text": "Awesome thread!",
        "likes": [] 
     },
     {
      "id": 2,
      "timestamp": "Thu Jul 13 2023 10:30:38 GMT-0300 (Horário Padrão de Brasília)",
      "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
      "thread_to": null,
      "reply_to": null,
      "text": "Another one!",
      "likes": [] 
   }, 
   {
    "id": 3,
    "timestamp": "Thu Jul 13 2023 19:30:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": null,
    "reply_to": null,
    "text": "Excited to have launched Bobbys Burger!",
    "likes": [] 
   },
   {
    "id": 4,
    "timestamp": "Thu Jul 13 2023 19:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "thread_to": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "reply_to": 3,
    "text": "Congrats!",
    "likes": [
      {
        "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
      }
    ] 
   },
   {
    "id": 5,
    "timestamp": "Thu Jul 13 2023 20:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "reply_to": 0,
    "text": "hiya!",
    "likes": [] 
   }
  ]
}

Visual Studio Code
Explorer
OPEN EDITOR
src
components
PopUpThread.js

PopUpThread.js
import moment from "moment";
import { useState, useEffect } from "react"

const PopUpThread = ({ popUpFeedThread }) => {
    const [ user, setUser ] = useState(null)

    console.log(popUpFeedThread)

    const getUser = async() => {
        try {
            const response = await fetch(`http://localhost:3000/users?user_uuid=${popUpFeedThread.thread_from}`)
            const data = await response.json()
            setUser(data[0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      getUser()
    }, [])

    const timePassed = moment().startOf('day').fromNow(popUpFeedThread.timestamp)
    return (
      <article className="feed-card">
          <div className="text-container">
            <div>
               <div className="img-container">
                   <img source={user?.img} alt={"profile avatar"}/>
              </div>
              <div>
                 <p><strong>{user?.handle}</strong></p>
                 <p>{popUpFeedThread.text}</p>
            </div>
            </div>
          </div>
          <p className="sub-text">{timePassed}</p>
      </article> 
    );
  }
  
export default PopUpThread

Visual Studio Code
Explorer
OPEN EDITOR
src
components
PopUp.js

PopUp.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = ({ setOpenPopUp, PopUpFeedThread }) => {
    return (
      <div className="popup">
          <p onClick={() => setOpenPopUp(false)}>X</p>
          {PopUpFeedThreads?map(PopUpFeedThread => 
               <PopUpThread
                    key={PopUpFeedThread.id}
                    popPupFeedThread={popPupFeedThread}
               />
          )}
          <threadInput/>
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)
    const [ text, setText ] useState("")

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreads = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const postReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    const postThread = async () => {
      const thread {
          "timestamp": newDate(),
          "thread_from": user.user_uuid,
          "thread_to": user.user_uuid || null,
          "reply_to": interactingThread?.id || null,
          "text": text,
          "likes": [] 
      }

      try {
          const response = await fetch (`_`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(thread)
          })
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
              text={text}
              setText={setText}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
PopUp.js

PopUp.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = ({ user, setOpenPopUp, PopUpFeedThread, text, setText }) => {
    return (
      <div className="popup">
          <p onClick={() => setOpenPopUp(false)}>X</p>
          {PopUpFeedThreads?map(PopUpFeedThread => 
               <PopUpThread
                    key={PopUpFeedThread.id}
                    popPupFeedThread={popPupFeedThread}
               />
          )}
          <threadInput
              user={user}
              text={text}
              setText={setText}
          />
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
Explorer
OPEN EDITOR
src
components
ThreadInput.js

ThreadInput.js
const ThreadInput = ({ user, text, setText }) => {
    return (
        <>
            <p>user.handle</p>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button className="primary" onClick={postThread}>Post</button>
        </>
    );
  }
  
export default ThreadInput

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)
    const [ text, setText ] useState("")

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreads = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const postReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    const postThread = async () => {
      const thread {
          "timestamp": newDate(),
          "thread_from": user.user_uuid,
          "thread_to": user.user_uuid || null,
          "reply_to": interactingThread?.id || null,
          "text": text,
          "likes": [] 
      }

      try {
          const response = await fetch (`_`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(thread)
          })
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
              text={text}
              setText={setText}
              postThread={postThread}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
PopUp.js

PopUp.js
import PopUpThread from "./PopUpThread"
import ThreadInput from "./ThreadInput"

const PopUp = ({ user, setOpenPopUp, PopUpFeedThread, text, setText, postThread }) => {
    return (
      <div className="popup">
          <p onClick={() => setOpenPopUp(false)}>X</p>
          {PopUpFeedThreads?map(PopUpFeedThread => 
               <PopUpThread
                    key={PopUpFeedThread.id}
                    popPupFeedThread={popPupFeedThread}
               />
          )}
          <threadInput
              user={user}
              text={text}
              setText={setText}
              postThread={postThread}
          />
      </div> 
    );
  }
  
export default PopUp
  
Visual Studio Code
Explorer
OPEN EDITOR
src
components
ThreadInput.js

ThreadInput.js
const ThreadInput = ({ user, text, setText, postThread }) => {
    return (
        <>
            <p>user.handle</p>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button className="primary" onClick={postThread}>Post</button>
        </>
    );
  }
  
export default ThreadInput

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)
    const [ text, setText ] useState("")

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreads = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const postReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    const postThread = async () => {
      const thread {
          "timestamp": newDate(),
          "thread_from": user.user_uuid,
          "thread_to": user.user_uuid || null,
          "reply_to": interactingThread?.id || null,
          "text": text,
          "likes": [] 
      }

      try {
          const response = await fetch ("http://localhost:3000/threads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(thread)
          })
          const result = await response.json()
          console.log(result)
          getThreads()
          getReplies()
          setText("")
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
              text={text}
              setText={setText}
              postThread={postThread}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
db.json

db.json
{
    "users":[
       {
         "id": 0,
         "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "username": "Code With Rodrigo Vieira",
         "handle": "rodrigovieira",
         "bio": "www.facebook.com/vieirarodrigo/posts/10158083592168253",
         "link": "https://www.linkedin.com/in/rodrigo-m-v-soares-3124b818a/",
         "img": "https://imgur.com/wdCSSCz",
         "instagram_url": "https://www.instagram.com/rodrigovieira.1/",
         "followers": [
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           },
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           }
         ]
       },
       {
         "id": 1,
         "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad",
         "username": "Bobby's Burgers",
         "handle": "bobbyburgers",
         "bio": "If burgers are your thing, then look no further!",
         "link": "https://www.bobbyburgers.com/",
         "img": "https://imgur.com/UHykNhu",
         "instagram_url": "https://www.instagram.com/bobbyburger/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
        {
         "id": 2,
         "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908",
         "username": "Ani Talli",
         "handle": "truthsaver",
         "bio": "Just a person trying do their best",
         "link": "",
         "img": "https://imgur.com/nHGHIoT",
         "instagram_url": "https://www.instagram.com/anitalli/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
    ],
    "threads": [
      {
         "id": 0,
         "timestamp": "Thu Jul 13 2023 09:05:38 GMT-0300 (Horário Padrão de Brasília)",
         "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "thread_to": null,
         "reply_to": null,
         "text": "Hello world (of threads)",
         "likes": [
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           },
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           }
         ] 
      },
      {
        "id": 1,
        "timestamp": "Thu Jul 13 2023 10:08:38 GMT-0300 (Horário Padrão de Brasília)",
        "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
        "thread_to": null,
        "reply_to": null,
        "text": "Awesome thread!",
        "likes": [] 
     },
     {
      "id": 2,
      "timestamp": "Thu Jul 13 2023 10:30:38 GMT-0300 (Horário Padrão de Brasília)",
      "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
      "thread_to": null,
      "reply_to": null,
      "text": "Another one!",
      "likes": [] 
   }, 
   {
    "id": 3,
    "timestamp": "Thu Jul 13 2023 19:30:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": null,
    "reply_to": null,
    "text": "Excited to have launched Bobbys Burger!",
    "likes": [] 
   },
   {
    "id": 4,
    "timestamp": "Thu Jul 13 2023 19:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "thread_to": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "reply_to": 3,
    "text": "Congrats!",
    "likes": [
      {
        "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
      }
    ] 
   },
   {
    "id": 5,
    "timestamp": "Thu Jul 13 2023 20:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "reply_to": 0,
    "text": "hiya!",
    "likes": [] 
   },
   {
    "timestamp": "Thu Jul 13 2023 20:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "reply_to": null,
    "text": "hello too",
    "likes": [] 
    "id": 6
   }
  ]
}

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)
    const [ text, setText ] useState("")

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreads = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const postReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    const postThread = async () => {
      const thread {
          "timestamp": newDate(),
          "thread_from": user.user_uuid,
          "thread_to": user.user_uuid || null,
          "reply_to": interactingThread?.id || null,
          "text": text,
          "likes": [] 
      }

      try {
          const response = await fetch ("http://localhost:3000/threads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(thread)
          })
          const result = await response.json()
          console.log(result)
          getThreads()
          getReplies()
          setText("")
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    console.log('interactingThread', interactingThread)

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
              text={text}
              setText={setText}
              postThread={postThread}
          />}
        </div>}
        <div onClick={() => setOpenPopUp(true)}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
components
Thread.js

Thread.js
import { useState, useEffect } from "react"
import moment from 'moment'

const Thread = ({ user, setOpenPopUp, filteredThread, getTreads, setInteractingThread }) => {
    const [ replyLenght, setReplyLenght ] = useState(null)

    const timePassed = moment().startOf('day').fromNow(filteredThread.timestamp)

    const handleClick = () => {
        setOpenPopUp(true)
        setInteractingThread(filteredThread)
    }

    const postLike = async () => {
        const hasBeenLikedByUser = filteredThread.likes.some(like => like.user_uuid === user.user_uuid)
        if (!hasBeenLikedByUser) 
            filteredThread.likes.push({user_uuid:user.user_uuid})
            
            try {
                 const response =  await fetch(`http://localhost:3000/thread/${filteredThread.id}`
                 {
                   method: 'PUT',
                   headers: { 
                       'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(filteredThread)
                })
                const result = await response.json()
                console.log("Success", result)
                getTreads()
            } catch (error) {
                console.error(error)
            } 
           
        }
    }
    {

    const getRepliesLenght = async () => {
        try {
            const response = await fetch(`http://localhost:3000/threads?reply_to=${filteredThread?.id}`)
            const data = await response.json()
            setReplyLenght(data.length)
        } catch (error) {
            console.error(error)
        } 
    }

     useEffect(() => {
        getRepliesLenght()
    }, [filteredThread])

    return (
      <article className="feed-card">
            <div className="text-container">
               <div>
                  <div className="img-container">
                      <img src={user.img} alt="profile-avatar"/>
                  </div>
                  <div>
                      <p><strong>{user.handle}</strong></p>
                      <p>{filteredThread.text}</p>
                  </div>
               </div>
                 <p className="sub-text">{time.timePassed}</p>
            </div>
               <div className="icons">
                   <svg onClick={postLike} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>
                   <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
               </div>
              <p className="sub-text"><span onClick={handleClick}>{replyLenght} replies</span> • <spam>{filteredThread.likes.lenght} likes</spam></p>    
      </article> 
    );
  }
  
export default Thread

Visual Studio Code
Explorer
OPEN EDITOR
src
App.js 

App.js
import { useState, useEffect } from "react"  
import Nav from "./components/Nav"
import Header from "./components/Header"
import Feed from "./components/Feed"
import PopUp from "./components/PopUp"
import WriteIcon from "./components/WriteIcon"

const App() => {
    const [ user, setUser ] = useState(null)
    const [ threats, setThreats ] = useState(null)
    const [ viewThreadsFeed, setViewThreadsFeed ] = useState(true)
    const [ filteredThreads, setFilteredThreads ] = useState(null)
    const [ openPopUp, setOpenPopUp ] = useState(false)
    const [ interactingThread, setInteractingThread ] = useState(null)
    const [ popUpFeedThread, setPopUpFeedThread ] = useState(null)
    const [ text, setText ] useState("")

    const userId = "000ba6ff-7472-4fe0-8165-9ae468accb07"

    const getUser = async () => {
      try{
          const response = await fetch(`localhost:3000/users?user_uuid=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreads = async () => {
      try{
          const response = await fetch(`localhost:3000/threats?from=${userId}`)
          const data = await response.json()
          setUser(data[0])
      } catch (error) {
          console.error(error)
      }
    }

    const getThreadsFeed = () => {
        if (viewThreadsFeed) {
          const standAloneThreads = threads?.filter(thread =>thread.replay_to === null)
          setFilteredThreads(standAloneThreads)
        }
        if (!viewThreadsFeed) {
          const replayThreads = threads?.filter(thread =>thread.replay_to!== null)
          setFilteredThreads(replayThreads) 
        }
    }

    const postReplies = async () => {
    
      try {
          const response = await fetch(`http://localhost:3000/thread?reply_to=${interactingThread?.id}`)
          const data = await response.json()
          setPopUpFeedThread(data)
      } catch (error) {
          console.error(error)
      }
    }

    const postThread = async () => {
      const thread {
          "timestamp": newDate(),
          "thread_from": user.user_uuid,
          "thread_to": user.user_uuid || null,
          "reply_to": interactingThread?.id || null,
          "text": text,
          "likes": [] 
      }

      try {
          const response = await fetch ("http://localhost:3000/threads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(thread)
          })
          const result = await response.json()
          console.log(result)
          getThreads()
          getReplies()
          setText("")
      } catch (error) {
          console.error(error)
      }
    }

    useEffect(() => {
      getReplies()
    }, [interactingThread])
    
    useEffect(() => {
        getUser()
        getThreats()
    }, [])

    useEffect(() => {
        getThreadsFeed()
    }, [user, threads, viewThreadsFeed])

    console.log('interactingThread', interactingThread)

    const handleClick = () => {
            setPopUpFeedThread(null)
            setInteractingThread(null)
            setOpenPopUp(true)
        }

    return (
      <>
        {user && <div className="app">
          <Nav url={user.instagram_url}/> 
          <Header
              user={user}
              viewThreadsFeed={viewThreadsFeed}
              setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed
              user={user}
              setOpenPopUp={setOpenPopUp}
              filteredThreads={filteredThreads}
              getThreads={getThreads}
              setInteractingThread={setInteractingThread}
          />
        {openPopUp && 
          <PopUp
              user={user}
              setOpenPopUp={setOpenPopUp}
              popUpFeedThread={popUpFeedThread}
              text={text}
              setText={setText}
              postThread={postThread}
          />}
        </div>}
        <div onClick={handleClick}>
            <WriteIcon/>
        </div>
      </div>}
    </>
  );
}

export default App

Visual Studio Code
Explorer
OPEN EDITOR
src
db.json

db.json
{
    "users":[
       {
         "id": 1,
         "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "username": "Code With Rodrigo Vieira",
         "handle": "rodrigovieira",
         "bio": "www.facebook.com/vieirarodrigo/posts/10158083592168253",
         "link": "https://www.linkedin.com/in/rodrigo-m-v-soares-3124b818a/",
         "img": "https://imgur.com/wdCSSCz",
         "instagram_url": "https://www.instagram.com/rodrigovieira.1/",
         "followers": [
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           },
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           }
         ]
       },
       {
         "id": 2,
         "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad",
         "username": "Bobby's Burgers",
         "handle": "bobbyburgers",
         "bio": "If burgers are your thing, then look no further!",
         "link": "https://www.bobbyburgers.com/",
         "img": "https://imgur.com/UHykNhu",
         "instagram_url": "https://www.instagram.com/bobbyburger/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
        {
         "id": 3,
         "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908",
         "username": "Ani Talli",
         "handle": "truthsaver",
         "bio": "Just a person trying do their best",
         "link": "",
         "img": "https://imgur.com/nHGHIoT",
         "instagram_url": "https://www.instagram.com/anitalli/",
         "followers": [
           {
             "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
           }
         ]
       },
    ],
    "threads": [
      {
         "id": 0,
         "timestamp": "Thu Jul 13 2023 09:05:38 GMT-0300 (Horário Padrão de Brasília)",
         "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
         "thread_to": null,
         "reply_to": null,
         "text": "Hello world (of threads)",
         "likes": [
           {
             "user_uuid": "77e86b01-d575-4119-8385-5738c3e9b908"
           },
           {
             "user_uuid": "46b83c9e-bd85-4d54-8576-c91071050aad"
           }
         ] 
      },
     {
      "id": 2,
      "timestamp": "Thu Jul 13 2023 10:30:38 GMT-0300 (Horário Padrão de Brasília)",
      "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
      "thread_to": null,
      "reply_to": null,
      "text": "Another one!",
      "likes": [] 
   }, 
   {
    "id": 3,
    "timestamp": "Thu Jul 13 2023 19:30:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": null,
    "reply_to": null,
    "text": "Excited to have launched Bobbys Burger!",
    "likes": [] 
   },
   {
    "id": 4,
    "timestamp": "Thu Jul 13 2023 19:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "thread_to": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "reply_to": 3,
    "text": "Congrats!",
    "likes": [
      {
        "user_uuid": "000ba6ff-7472-4fe0-8165-9ae468accb07"
      }
    ] 
   },
   {
    "id": 5,
    "timestamp": "Thu Jul 13 2023 20:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "reply_to": 0,
    "text": "hiya!",
    "likes": [] 
   },
   {
    "timestamp": "Thu Jul 13 2023 20:50:38 GMT-0300 (Horário Padrão de Brasília)",
    "thread_from": "46b83c9e-bd85-4d54-8576-c91071050aad",
    "thread_to": "000ba6ff-7472-4fe0-8165-9ae468accb07",
    "reply_to": null,
    "text": "hello too",
    "likes": [] 
    "id": 6
   }
  ]
}






