import "./LoginForm.css";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginForm({ onRegisterClick }) {
    let [formdata, setformdata] = useState({username:"", password: ""});

    function updateFormdata(e){
        setformdata({...formdata, [e.target.name ]: e.target.value});
    }
    function handleLogin(){
        if(formdata.username === "" || formdata.password === ""){
            alert("Please fill all the fields");
            return; 
        }
        else{
            console.log(formdata);
            alert("Login Successful");
            setformdata({username:"", password: ""}); 
        }
    }
    return(

        <div className="login-form">

            <div className="Left-part">
                <div>
                <h1>Hello, Welcome!</h1>
                <p>Don't have an account?</p>
                <button className="registerbtn" onClick={onRegisterClick}>Register</button>
                </div>
               
            </div>

            <div className="Right-part">
                 <h1>Login</h1>
                 <div className="usernameInput">
                    <input type="text" placeholder="Username" id="Username" name="username" value={formdata.username} onChange={updateFormdata} ></input>
                    <div id="usericondiv"><label htmlFor="Username"  ><PersonIcon id="usericon" fontSize="large" ></PersonIcon></label></div>
                    
                 </div>
                 <div className="passwordInput">
                    <input type="password" placeholder="Password" id="Password" name="password"  value={formdata.password} onChange={updateFormdata}></input>
                    <div id="passicondiv"><label htmlFor="Password"><VisibilityOffIcon id="passicon"></VisibilityOffIcon></label></div>
                    
                 </div>

                  <p>Forgot Password?</p>
                  <button className="Loginbtn" onClick={handleLogin}>Login</button>
                  <p>or login with social platforms</p>

                  <ul className="socialaccount">
                    <a href="" class="SocialIcon" ><LinkedInIcon style={{ color: 'black',height:"50px",width:"50px",marginRight:"30px" }}></LinkedInIcon></a>
                    <a href="" class="SocialIcon" ><GitHubIcon style={{ color: 'black',height:"50px",width:"50px" }}></GitHubIcon></a>
                  </ul>
                 
                
            </div>
            
        </div>
    );
}