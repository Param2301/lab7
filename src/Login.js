import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [season, setSeason] = useState('')
    const [Login, setLogin] = useState(false)
    const navigate = useNavigate();

    const redirecter = () => {
        navigate('/dashboard')
    }

    const submit = (e) => {
        e.preventDefault();

        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!fname) {
            alert("first name is required")
        }
        else {
            if (!lname) {
                alert("last name is required")
            }
            else {

                if (!email) {
                    alert("email is required")
                }
                else {

                    if (!password) {
                        alert("password is required")
                    }
                    else {
                        if (!season) {
                            alert("Select the favorite season")
                        }
                        else {
                            if (nameRegex.test(fname)) {
                                if (nameRegex.test(lname)) {
                                    if (emailRegex.test(email)) {
                                        if (passwordRegex.test(password)) {
                                            setLogin(true)
                                        }
                                        else {
                                            alert('incorrect password')
                                        }
                                    }
                                    else {
                                        alert('incorrect email')
                                    }
                                }
                                else {
                                    alert('inorrect last name')
                                }
                            }
                            else {
                                alert('incorrect first name')
                            }
                        }
                    }
                }
            }
        }
    };
    return (
        <div className="container">
            {!Login ? (
                <form onSubmit={submit}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="Enter your first name" required />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter your last name" required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                    </div>
                    <div>
                        <label>Favorite Season</label>
                        <select value={season} onChange={(e) => setSeason(e.target.value)}>
                            <option>Select an option</option>
                            <option>Fall</option>
                            <option>Spring</option>
                            <option>Winter</option>
                        </select>
                    </div>
                    <button type="submit">Register</button>
                </form>
            )
                :
                (<div>
                    <div>
                        <span>First Name</span>
                        <span>{fname}</span>
                    </div>
                    <div>
                        <span>last Name</span>
                        <span>{lname}</span>
                    </div>
                    <div>
                        <span>Email</span>
                        <span>{email}</span>
                    </div>
                    <div>
                        <span>Favorite Season</span>
                        <span>{season}</span>
                    </div>
                    <button onClick={redirecter}>Dashboard</button>
                </div>)
            }
        </div>
    )
}

export default Login;