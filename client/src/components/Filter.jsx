import { collection, getDocs, query, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";


export const Filter = ({ setEmailList }) => {

    const contactRef = collection(firestore, "Contacts");
    const [callData, setCallData] = useState([]);
    const [filter, setFilter] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity]= useState('');
    const [domain, setDomain]= useState('');


    const navigate = useNavigate();

    async function getData() {
        const dataArray = await getDocs(query(contactRef));
        dataArray.forEach(doc => {
            setCallData(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        return () => getData();
    }, [])

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = callData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })




    const handleSearch = async() => {
        console.log(district)
        var q = query(contactRef, where("district", "==", district),where("domain","==",domain),where("domain","==", domain));

        const snapshot = await getDocs(q);
        snapshot.forEach(item => setEmailList(prev => [...prev, item.data().emailOfCoordinator]));
        navigate('/send-file')
    }

    return (

        <div>
            <div className="rectangle"></div>
            <div className="rectangle2">
                <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
            </div>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <Link to='/user_name'><button className="homeBtn"><i className="fa fa-home"></i> מסך הבית</button></Link>
            </div>
            <div className="container">
                <form id="filter1">
                    <br />
                    <select name="sdomain" id="sdomain" placeholder=",juo" value={domain} onChange={(e) => setDomain(e.target.value)}>
                        <option value="" disabled selected>בחר תחום</option>
                        <option value="1">לוגיסטיקה</option>
                        <option value="1">אינסטלציה</option>
                        <option value="1">חשמל</option>


                    </select>
                    <br />
                    <select name="sarea" id="sarea" value={district} onChange={(e) => setDistrict(e.target.value)}>
                        <option value="" disabled selected>בחר מחוז</option>
                        <option value="דרום">דרום</option>
                        <option value="ירושלים">ירושלים</option>
                        <option value="מרכז">מרכז</option>
                        <option value="צפון">צפון</option>
                        <option value="שרון">שרון</option>
                    </select>
                    <br />
                    <select name="scity" id="scity">
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
    )

}