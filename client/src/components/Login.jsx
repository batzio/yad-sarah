import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await signInWithEmailAndPassword(auth, username, password);
        console.log(res)
        navigate('/user_name')
    }


    return (
        <div dir="rtl">
            <div className="rectangle"></div>
            <div className="rectangle2">
                <img id="pic"
                    src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
            </div>
            <div className="container">
                <form action="/action_page.php">
                    <div className="row">
                        <h2 style={{ textAlign: "center" }}>התחברות </h2>
                        <div className="center">
                            <div className="hide-md-lg">
                            </div>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="שם משתמש" required />
                            <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" name="password" placeholder="קוד" required />
                            <button onClick={handleClick}>התחברות</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bottom-container">
                <div className="row">
                    <div className="col">
                        <a href="#" style={{ color: "#1C6BB4" }} className="btn">שכחת סיסמא?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}