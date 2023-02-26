import React from 'react';
import { useEffect, useState } from "react";
import '../responsive.css'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';

export const Register = () => {

    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            setErr(true)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL
              });
               await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL
              });

              await setDoc(doc(db, "userChats", res.user.uid), {});

               

            })
          }
        );
      } catch (err) {
        setErr(true)
      }
  }


  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <center>
          <span className="logo">Super Chat</span> 
        </center>
        <br></br>
        <center>
          <span className="title">Register</span>
        </center>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text" placeholder='Name'></input>
          <input type="email" placeholder='Email'></input>
          <input type="password" placeholder='Password'></input>
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="add an avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>{err.message}</span>}
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  )
} 


export default Register
