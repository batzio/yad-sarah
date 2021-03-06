import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export const Add_contact = () => {

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
        await setDoc(doc(contactsRef), { name: nameValue, domain: domainValue, district: area, city: address, nameOfCoordinator: cnameValue, emailOfCoordinator: coEmail, cellPhone: cphoneValue, phone: phoneValue, po: POValue, notes: notes })
        navigate("/list");
    }

    return (
        <div>
            <div>
                <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </div>
                <SideNav onSelect={(selected) => { navigate(selected); }} style={{ fontSize: '1.75em', height: '100%', position: "fixed" }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="/list" >
                            <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                            <NavText>רשימת מתנדבים</NavText>
                        </NavItem>
                        <NavItem eventKey="/filter">
                            <NavIcon><i className="fa fa-search" aria-hidden="true" style={{ fontSize: '1.75em' }} /></NavIcon>
                            <NavText>חיפוש</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <div className="container">
                    <form required>
                        <label >שם העמותה</label>
                        <input type="text1" id="ltr" name="association_name" placeholder="הקלד כאן" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required/>

                        <label >תחום העמותה</label>
                        <input type="text1" id="ltr" name="domain_association" placeholder="הקלד כאן" value={domainValue} onChange={(e) => setDomainValue(e.target.value)} required/>

                        <label >שם רכז העמותה</label>
                        <input type="text1" id="ltr" name="association_coordinator" placeholder="הקלד כאן" value={cnameValue} onChange={(e) => setCnameValue(e.target.value)}required />

                        <label >מייל רכז</label>
                        <input type="email" id="ltr" name="mail" placeholder="הקלד כאן" value={coEmail} onChange={(e) => setCoEmail(e.target.value)}required />

                        <label >כתובת העמותה:</label>

                        <select id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}required>
                            <option value="" disabled selected>בחר כתובת</option>
                            <option value="אום אל פחם">אום אל פחם</option>
                            <option value="אופקים">אופקים</option>
                            <option value="אור יהודה">אור יהודה</option>
                            <option value="אור עקיבא">אור עקיבא</option>
                            <option value="אילת">אילת</option>
                            <option value="אריאל">אריאל</option>
                            <option value="אשדוד">אשדוד</option>
                            <option value="אשקלון">אשקלון</option>
                            <option value="באר שבע">באר שבע</option>
                            <option value="בית שאן">בית שאן</option>
                            <option value="בית שמש">בית שמש</option>
                            <option value="בת ים">בת ים</option>
                            <option value="גבעת שמואל">גבעת שמואל</option>
                            <option value="גבעתיים">גבעתיים</option>
                            <option value="דימונה">דימונה</option>
                            <option value="הוד השרון">הוד השרון</option>
                            <option value="הרצליה">הרצליה</option>
                            <option value="חדרה">חדרה</option>
                            <option value="חולון">חולון</option>
                            <option value="חיפה">חיפה</option>
                            <option value="טבריה">טבריה</option>
                            <option value="טייבה">טייבה</option>
                            <option value="טירה">טירה</option>
                            <option value="טירת הכרמל">טירת הכרמל</option>
                            <option value="טמרה">טמרה</option>
                            <option value="יבנה">יבנה</option>
                            <option value="יהוד מונסון">יהוד מונסון</option>
                            <option value="יקנעם">יקנעם</option>
                            <option value="ירושלים">ירושלים</option>
                            <option value="כפר יונה">כפר יונה</option>
                            <option value="כפר סבא">כפר סבא</option>
                            <option value="כפר קאסם">כפר קאסם</option>
                            <option value="כרמיאל">כרמיאל</option>
                            <option value="לוד">לוד</option>
                            <option value="מגדל העמק">מגדל העמק</option>
                            <option value="מודיעין מכבים רעות">מודיעין מכבים רעות</option>
                            <option value="מעלה אדומים">מעלה אדומים</option>
                            <option value="מעלות תרשיחא">מעלות תרשיחא</option>
                            <option value="נהריה">נהריה</option>
                            <option value="נוף הגליל">נוף הגליל</option>
                            <option value="נס ציונה">נס ציונה</option>
                            <option value="נצרת">נצרת</option>
                            <option value="נשר">נשר</option>
                            <option value="נתיבות">נתיבות</option>
                            <option value="נתניה">נתניה</option>
                            <option value="סח'נין">סח'נין</option>
                            <option value="עכו">עכו</option>
                            <option value="עפולה">עפולה</option>
                            <option value="עראבה">עראבה</option>
                            <option value="ערד">ערד</option>
                            <option value="פתח תקווה">פתח תקווה</option>
                            <option value="צפת">צפת</option>
                            <option value="קלנסווה">קלנסווה</option>
                            <option value="קריית אונו">קריית אונו</option>
                            <option value="קריית אתא">קריית אתא</option>
                            <option value="קריית ביאליק">קריית ביאליק</option>
                            <option value="קריית גת">קריית גת</option>
                            <option value="קריית ים">קריית ים</option>
                            <option value="קריית מוצקין">קריית מוצקין</option>
                            <option value="קריית מלאכי">קריית מלאכי</option>
                            <option value="קריית שמונה">קריית שמונה</option>
                            <option value="ראש העין">ראש העין</option>
                            <option value="ראשון לציון">ראשון לציון</option>
                            <option value="רהט">רהט</option>
                            <option value="רחובות">רחובות</option>
                            <option value="רמלה">רמלה</option>
                            <option value="רמת גן">רמת גן</option>
                            <option value="רמת השרון">רמת השרון</option>
                            <option value="רעננה">רעננה</option>
                            <option value="שדרות">שדרות</option>
                            <option value="שפרעם">שפרעם</option>
                            <option value="תל אביב">תל אביב</option>
                        </select>

                        <label >מחוז</label>
                        <select id="address" name="address" value={area} onChange={(e) => setArea(e.target.value)} required>
                            <option value="" disabled selected>בחר מחוז</option>
                            <option value="דרום">דרום</option>
                            <option value="ירושלים">ירושלים</option>
                            <option value="מרכז">מרכז</option>
                            <option value="צפון">צפון</option>
                            <option value="שרון">שרון</option>
                        </select>

                        <label >תא דואר</label>
                        <input type="text1" id="ltr" name="mailbox" placeholder="הקלד כאן" value={POValue} onChange={(e) => setPOValue(e.target.value)}required/>

                        <label >טלפון נייד</label>
                        <input type="text1" id="ltr" name="cellphone" placeholder="הקלד כאן" value={cphoneValue} onChange={(e) => setCphoneValue(e.target.value)} required/>

                        <label >טלפון נייח</label>
                        <input type="text1" id="ltr" name="Landline" placeholder="הקלד כאן" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} required/>

                        <label >הערות</label>
                        <textarea type="text1" id="ltr" name="Landline" placeholder="הקלד כאן" value={notes} onChange={(e) => setNotes(e.target.value)}required></textarea>
                        <button id="btnOK" type="button" onClick={handleClick}>אישור</button>
                    </form>

                </div>
            </div>
        </div>

    )
}