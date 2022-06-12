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
                            <option value="0">אום אל פחם</option>
                            <option value="1">אופקים</option>
                            <option value="2">אור יהודה</option>
                            <option value="3">אור עקיבא</option>
                            <option value="4">אילת</option>
                            <option value="5">אריאל</option>
                            <option value="6">אשדוד</option>
                            <option value="7">אשקלון</option>
                            <option value="8">באר שבע</option>
                            <option value="9">בית שאן</option>
                            <option value="10">בית שמש</option>
                            <option value="11">בת ים</option>
                            <option value="12">גבעת שמואל</option>
                            <option value="13">גבעתיים</option>
                            <option value="14">דימונה</option>
                            <option value="15">הוד השרון</option>
                            <option value="16">הרצליה</option>
                            <option value="17">חדרה </option>
                            <option value="18">חולון</option>
                            <option value="19">חיפה</option>
                            <option value="20">טבריה</option>
                            <option value="21">טייבה</option>
                            <option value="22">טירה</option>
                            <option value="23">טירת הכרמל</option>
                            <option value="24">טמרה</option>
                            <option value="25">יבנה</option>
                            <option value="26">יהוד מונסון</option>
                            <option value="27">יקנעם</option>
                            <option value="28">ירושלים</option>
                            <option value="29">כפר יונה</option>
                            <option value="30">כפר סבא</option>
                            <option value="31">כפר קאסם</option>
                            <option value="32">כרמיאל</option>
                            <option value="33">לוד</option>
                            <option value="34">מגדל העמק</option>
                            <option value="35">מודיעין מכבים רעות</option>
                            <option value="36">מעלה אדומים</option>
                            <option value="37">מעלות תרשיחא</option>
                            <option value="38">נהריה</option>
                            <option value="39">נוף הגליל</option>
                            <option value="40">נס ציונה</option>
                            <option value="41">נצרת</option>
                            <option value="42">נשר</option>
                            <option value="43">נתיבות</option>
                            <option value="44">נתניה</option>
                            <option value="45">סח'נין</option>
                            <option value="46">עכו</option>
                            <option value="47">עפולה</option>
                            <option value="48">עראבה</option>
                            <option value="49">ערד</option>
                            <option value="50">פתח תקווה</option>
                            <option value="51">צפת</option>
                            <option value="52">קלנסווה</option>
                            <option value="53">קריית אונו</option>
                            <option value="54">קריית אתא</option>
                            <option value="55">קריית ביאליק</option>
                            <option value="56">קריית גת</option>
                            <option value="57">קריית ים</option>
                            <option value="58">קריית מוצקין</option>
                            <option value="59">קריית מלאכי</option>
                            <option value="60">קריית שמונה</option>
                            <option value="61">ראש העין</option>
                            <option value="62">ראשון לציון</option>
                            <option value="63">רהט</option>
                            <option value="64">רחובות</option>
                            <option value="65">רמלה</option>
                            <option value="66">רמת גן </option>
                            <option value="67">רמת השרון</option>
                            <option value="68">רעננה</option>
                            <option value="69">שדרות</option>
                            <option value="70">שפרעם</option>
                            <option value="71">תל אביב</option>
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