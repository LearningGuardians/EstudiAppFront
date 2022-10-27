import { Component } from 'react';
import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './login.css';

function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();


  const [submit, setSubmit] = React.useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setSubmit(true);
  }

  function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name] : value
    }));
}

React.useEffect(() => {
  console.log("------- Effect Ran -------")
  if (formData.email !== "" && formData !== "") {
      console.log("------- Perform login request -------")
      loginRequest();
  }
}, [submit])

  async function loginRequest(){
    try{
        var response = await fetch('http://localhost:8080/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(formData)});
        var data = await response.json();
        console.log(data);
        console.log(data.status);
        if(data.status !== 500){
            console.log("SE AUTENTICO BIEN")
            navigate('/pOperativo')
        }else{
            alert("Incorrect credentials :(");
        }
    }catch(e){
        console.log(e.message);
    }
}

  return (
    <div class="box">
    
    <h1>Bienvenido a Learning Guardians</h1>


    <form onSubmit={handleSubmit}>
      <input type="email" value={formData.email} class="input1" name="email"  onChange={handleChange}/>
      <p></p>
      <input type="password" value={formData.password} class="input2" name="password" onChange={handleChange}/> 
      <p></p>
      <button  id="data" type="submit" class="btn" href="/pOperativo" >
          Ingresar
      </button>
    </form>
    </div>
  );
}



export default Login;
