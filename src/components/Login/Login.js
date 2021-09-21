import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../redux/userSlice';
import './Login.css'

function Login() {

    const dispatch = useDispatch();

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [name, setName] = useState('')
     const [profilePic, setProfilePic] = useState('')

    const register = (e) => {
        if (!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth)=>{
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                .then(()=>{
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photourl: profilePic 
                    }))
                })
            })
            .catch(error =>{
                alert(error)
            })

    }

    //values taken from redux stored from signup
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photourl: userAuth.user.photoURL
                }))
            }).catch(error=>{
                alert(error)
            })

    }
    return (
        <div className="login">

            <img src="https://www.seekpng.com/png/full/802-8024287_advertise-on-linkedin-transparent-linkedin-logo-vector.png" alt="login"/>
           
            <form>

                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full name (required if registering)"/>
                <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)"/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            
            </form>
            
            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
