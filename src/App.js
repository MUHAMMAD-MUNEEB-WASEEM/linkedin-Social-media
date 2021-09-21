import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { auth } from './firebase';
import { login, logout } from './redux/userSlice';

function App() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  //to maintain login functionality on page refresh
  
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photourl: userAuth.photoURL
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
  
      <Header/>
      
      {/*if user is not present, then show login page8*/}
      {!user ? (
        <Login/>
      ):(
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )}
    
    </div>
  );
}

export default App;
