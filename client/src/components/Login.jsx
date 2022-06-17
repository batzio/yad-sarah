import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState, Image } from 'react'
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
                <div className="grid">

                    <form action="/" method="post" className="form login">

                        <header className="login__header"><h3 className="login__title">כניסה לאתר</h3></header>

                        <div className="login__body">
                            <div className="form__field">
                                <input value={username} type="email" onChange={(e) => setUsername(e.target.value)} placeholder="אימייל" required />
                            </div>
                            <div className="form__field">
                                <input value={password}  type="password" onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" required />
                            </div>
                            <br></br><br></br>
                            <button id="btnlogin" onClick={handleClick}>התחברות</button>

                            
                        </div>
                        
                    </form>

                </div>
                {error ? <p className="error">{error}</p> : null}
            </div>
        </div>

    )
}