import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const Add_contact = (props) => {

    const [nameValue, setNameValue] = useState("");
    const [domainValue, setDomainValue] = useState("");
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("");
    const [cnameValue, setCnameValue] = useState("");
    const [coEmail, setCoEmail] = useState("");
    const [cphoneValue, setCphoneValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [POValue, setPOValue] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    const contactsRef = collection(firestore, 'Contacts');
    const handleClick = async (e) => {
        e.preventDefault();
        // send object to FirebaseError
        await setDoc(doc(contactsRef), { name: nameValue, domain: domainValue, district: area, city: address, nameOfCoordinator: cnameValue, emailOfCoordinator: coEmail, cellPhone: cphoneValue, phone: phoneValue, po: POValue, notes: notes })
        navigate("/list");
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
                    <Link to='/user_name'><button className="homeBtn"><i className="fa fa-home"></i> מסך הבית</button></Link>
                </div>

                <div className="container">

                    <form>
                        <label for="aname">שם העמותה:</label>
                        <input type="text1" id="aname" name="association_name" placeholder="הקלד כאן" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />

                        <label for="dname">תחום העמותה:</label>
                        <input type="text1" id="dname" name="domain_association" placeholder="הקלד כאן" value={domainValue} onChange={(e) => setDomainValue(e.target.value)} />

                        <label for="cname">שם רכז העמותה:</label>
                        <input type="text1" id="cname" name="association_coordinator" placeholder="הקלד כאן" value={cnameValue} onChange={(e) => setCnameValue(e.target.value)} />

                        <label for="mname">מייל רכז:</label>
                        <input type="text1" id="mname" name="mail" placeholder="הקלד כאן" value={coEmail} onChange={(e) => setCoEmail(e.target.value)} />

                        <label for="address">כתובת העמותה:</label>
                        <select id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}>
                            <option value="" disabled selected>בחר כתובת</option>
                            <option value="" disabled selected>בחר עיר</option>
                    <option value="אום אל פחם"></option>
                    <option value="אופקים"></option>
                    <option value="אור יהודה"></option>
                    <option value="אור עקיבא"></option>
                    <option value="אילת"></option>
                    <option value="אריאל"></option>
                    <option value="אשדוד"></option>
                    <option value="אשקלון"></option>
                    <option value="באר שבע"></option>
                    <option value="בית שאן"></option>
                    <option value="בית שמש"></option>
                    <option value="בת ים"></option>
                    <option value="גבעת שמואל"></option>
                    <option value="גבעתיים"></option>
                    <option value="דימונה"></option>
                    <option value="הוד השרון"></option>
                    <option value="הרצליה"></option>
                    <option value="חדרה"> </option>
                    <option value="חולון"></option>
                    <option value="חיפה"></option>
                    <option value="טבריה"></option>
                    <option value="טייבה"></option>
                    <option value="טירה"></option>
                    <option value="טירת הכרמל"></option>
                    <option value="טמרה"></option>
                    <option value="יבנה"></option>
                    <option value="יהוד מונסון"></option>
                    <option value="יקנעם"></option>
                    <option value="ירושלים"></option>
                    <option value="כפר יונה"></option>
                    <option value="כפר סבא"></option>
                    <option value="כפר קאסם"></option>
                    <option value="כרמיאל"></option>
                    <option value="לוד"></option>
                    <option value="מגדל העמק"></option>
                    <option value="מודיעין מכבים רעות"></option>
                    <option value="מעלה אדומים"></option>
                    <option value="מעלות תרשיחא"></option>
                    <option value="נהריה"></option>
                    <option value="נוף הגליל"></option>
                    <option value="נס ציונה"></option>
                    <option value="נצרת"></option>
                    <option value="נשר"></option>
                    <option value="נתיבות"></option>
                    <option value="נתניה"></option>
                    <option value="סח'נין"></option>
                    <option value="עכו"></option>
                    <option value="עפולה"></option>
                    <option value="עראבה"></option>
                    <option value="ערד"></option>
                    <option value="פתח תקווה"></option>
                    <option value="צפת"></option>
                    <option value="קלנסווה"></option>
                    <option value="קריית אונו"></option>
                    <option value="קריית אתא"></option>
                    <option value="קריית ביאליק"></option>
                    <option value="קריית גת"></option>
                    <option value="קריית ים"></option>
                    <option value="קריית מוצקין"></option>
                    <option value="קריית מלאכי"></option>
                    <option value="קריית שמונה"></option>
                    <option value="ראש העין"></option>
                    <option value="ראשון לציון"></option>
                    <option value="רהט"></option>
                    <option value="רחובות"></option>
                    <option value="רמלה"></option>
                    <option value="רמת גן"> </option>
                    <option value="רמת השרון"></option>
                    <option value="רעננה"></option>
                    <option value="שדרות"></option>
                    <option value="שפרעם"></option>
                    <option value="תל אביב"></option>     
                        </select>
                        <label for="address">מחוז:</label>
                        <select id="address" name="address" value={area} onChange={(e) => setArea(e.target.value)}>
                            <option value="" disabled selected>בחר מחוז</option>
                            <option value="דרום">דרום</option>
                            <option value="ירושלים">ירושלים</option>
                            <option value="מרכז">מרכז</option>
                            <option value="צפון">צפון</option>
                            <option value="שרון">שרון</option>

                        </select>

                        <label for="mbname">תא דואר:</label>
                        <input type="text1" id="mbname" name="mailbox" placeholder="הקלד כאן" value={POValue} onChange={(e) => setPOValue(e.target.value)} />

                        <label for="cellphone">טלפון נייד:</label>
                        <input type="text1" id="cellphone" name="cellphone" placeholder="הקלד כאן" value={cphoneValue} onChange={(e) => setCphoneValue(e.target.value)} />

                        <label for="Landline">טלפון נייח:</label>
                        <input type="text1" id="Landline" name="Landline" placeholder="הקלד כאן" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} />

                        <label for="subject">הערות</label>
                        <textarea id="subject" name="subject" placeholder="הקלד כאן" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                        <button id="btnOK" type="button" onClick={handleClick}>אישור</button>
                    </form>

                </div>
            </div>
        </div>

    )
}