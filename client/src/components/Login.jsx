import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState,Image } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";


export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault();
        try {
            setError("")
            const res = await signInWithEmailAndPassword(auth, username, password);
            navigate('/list')
        }
        catch (e) {
            setError("סיסמה או שם משתמש שגוי")
        }
    }

    return (
      <div className="img">
        <div dir="rtl">
                <img id="pic1"
                    src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
            <div className="container">
                <form action="/action_page.php">
                    <div className="row">
                        <div className="center">
                            <div className="hide-md-lg">
                            </div>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="שם משתמש" required />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="passwor d" placeholder="סיסמה" required />
                            <button className="button_login" onClick={handleClick}>התחברות</button>
                            {error ? <p className="error">{error}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}