import { FirebaseError } from "firebase/app";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react"
import { Link } from "react-router-dom"
import { firestore } from "../firebase/firebase";

export const Add_contact = (props) => {

    const [nameValue, setNameValue] = useState("");

    const contactsRef = collection(firestore, 'Contacts');

    const handleClick = async (e) => {
        e.preventDefault();
        // send object to FirebaseError
        await setDoc(doc(contactsRef), { name: nameValue })
        // navigate to list
    }

    return (
        <div>
            <div id="ltr">
                <div className="rectangle"></div>
                <div className="rectangle2">

                    <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
                </div>
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <Link to='/user_name'><button class="homeBtn"><i class="fa fa-home"></i> מסך הבית</button></Link>
                </div>

                <div className="container">

                    <form>
                        <label for="aname">שם העמותה:</label>
                        <input type="text1" id="aname" name="association_name" placeholder="הקלד כאן" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />

                        <label for="dname">תחום העמותה:</label>
                        <input type="text1" id="dname" name="domain_association" placeholder="הקלד כאן" />

                        <label for="cname">שם רכז העמותה:</label>
                        <input type="text1" id="cname" name="association_coordinator" placeholder="הקלד כאן" />

                        <label for="mname">מייל רכז:</label>
                        <input type="text1" id="mname" name="mail" placeholder="הקלד כאן" />

                        <label for="address">כתובת העמותה:</label>
                        <select id="address" name="address">
                            <option value="" disabled selected>בחר כתובת</option>
                            <option value="Jerusalem">ירושלים</option>
                            <option value="Beit_shemesh">בית שמש</option>
                            <option value="haifa">חיפה</option>
                        </select>

                        <label for="mbname">תא דואר:</label>
                        <input type="text1" id="mbname" name="mailbox" placeholder="הקלד כאן" />

                        <label for="cellphone">טלפון נייד:</label>
                        <input type="text1" id="cellphone" name="cellphone" placeholder="הקלד כאן" />

                        <label for="Landline">טלפון נייח:</label>
                        <input type="text1" id="Landline" name="Landline" placeholder="הקלד כאן" />

                        <label for="subject">הערות</label>
                        <textarea id="subject" name="subject" placeholder="הקלד כאן"></textarea>
                        <button id="btnOK" type="button" onClick={handleClick}>אישור</button>
                    </form>

                </div>
            </div>
        </div>

    )
}