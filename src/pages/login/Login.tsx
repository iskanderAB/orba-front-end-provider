import axios from 'axios';
import React from 'react'

function Login() {

    const sendData = (event: any) => {
        event.preventDefault();
        const {email, password } = event.target.elements
        axios.post('http://192.168.100.12:8080/',{
            email: email.value,
            password: password.value
        })
        .then(response=> {
            console.log(response);
            
        })
        .catch(error => {
            console.log(error.message)
        })
        console.log(email.value, password.value);
        
    }

  return (
    <div>
        <form onSubmit={sendData}>
            <label>
                Email: 
            </label>
            <input type="text" id="email"/>
            <label>
                Password: 
            </label>
            <input type="password" id="password" />

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login