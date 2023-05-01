import React from 'react'
import NewComponent from './newComponent';
import './App.css'

const Footer = () => {
  return(
    <div>
      This is footer
    </div>
  )
}

const userInfo = {
  userName : 'zwelinux',
  status: 'online',
  email : 'zwelinux@gmail.com',
}

const svtTracks = [
  {title: 'super', id: '1'},
  {title: 'fml', id: '2'},
  {title: 'april shower', id: '3'},
]
// hardcode 

const App = () => {

  const doSomething = () => {
    alert("Hello from the other side");
  }

  return(

      // JSX <> </> in React 
      <div className='main'>
        <NewComponent />
        <div className='mainPage'>
          Main Page
          <hr />
          <h2>userName : {userInfo.userName}</h2>
          <h2>userStatus : {userInfo.status}</h2>
          <h2>userEmail : {userInfo.email}</h2>
          <hr />
          <h1>SVT Tracks</h1>

          {svtTracks.map( x => 
            <li key={x.id}>{x.title}</li>  
          )} 

          <button onClick={doSomething}>show something</button>

        </div>
        <Footer />
      </div>
  )
}

export default App;