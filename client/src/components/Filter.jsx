import { collection, getDocs, query, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { useForm } from "form-control-react";


export const Filter = ({ setEmailList }) => {

    const contactRef = collection(firestore, "Contacts");
    const [callData, setCallData] = useState([]);
    const [filter, setFilter] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [domain, setDomain] = useState('');


    const navigate = useNavigate();


    const handleSearch = async () => {
        console.log(district)

        const q = query(contactRef, where("district", "==", district), where("city", "==", city), where("domain", "==", domain));

        const snapshot = await getDocs(q);
        setEmailList([])
        snapshot.forEach(item => {console.log(item.data()); setEmailList(prev => [...prev, item.data().emailOfCoordinator])});
        navigate('/send-file')
    }

    return (
        
            <div>
                <div className="img" >
                <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />

                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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
                </div>
                <div className="container">
                    <form id="filter1">
                        <br />
                        {/* <div id=do"> */}
                        <label for="dname"></label>
                        <input id="sdomain" name="sdomain" placeholder="בחר תחום" value={domain} onChange={(e) => setDomain(e.target.value)} required />
                    {/* </div> */}
                        <br />
                        <br />
                                            
                        <select name="sarea" id="sarea" value={district} onChange={(e) => setDistrict(e.target.value)}>
                            <option value="" disabled selected >בחר מחוז</option>
                            <option value="דרום">דרום</option>
                            <option value="ירושלים">ירושלים</option>
                            <option value="מרכז">מרכז</option>
                            <option value="צפון">צפון</option>
                            <option value="שרון">שרון</option>
                            {/* <option value="אחר">אחר</option> */}

                        </select>
                        <br />
                        <select name="scity" id="scity" value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="" disabled selected>בחר עיר</option>
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
                            {/* <option value="אחר">אחר</option> */}

                        </select>

                        <br />
                        <br />
                        <br />
                        <button id="btnOK" type="button" onClick={handleSearch}>חפש</button>

                    </form>

                    {/* {dataSearch.map((object, index) => (
                <div className="req" key={index}>
                    <div>
                        {object.source + " " + object.destination + " " + object.city + " " + object.date + " " + object.gender + " " + object.number_of_passengers + " " + object.car_type}
                    </div> */}
                    {/* <div>{object.source}</div> */}
                    {/* </div>
            ))} */}

                </div>
            
        </div>
</div>
    )

}