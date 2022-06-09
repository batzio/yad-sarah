import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useEffect, useState } from "react";


export const Filter = (props) => {

    const contactRef = collection(firestore, "Contacts");
    const [callData, setCallData] = useState([]);
    const [filter, setFilter] = useState('');

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

    const handleClick = async (e) => {
        e.preventDefault();
        // send object to FirebaseError
        await setDoc(doc(contactsRef), { name: nameValue,domain: domainValue,district:area, city:address, nameOfCoordinator: cnameValue, emailOfCoordinator: coEmail, cellPhone: cphoneValue, phone: phoneValue, po:POValue, notes: notes})
        navigate("/list");
        
        {dataSearch.map((object, index) => (
            <div className="req" key={index}>
                <div>
                    {object.source + " " + object.destination + " " + object.city + " " + object.date + " " + object.gender + " " + object.number_of_passengers + " " + object.car_type}
                </div>
            </div>
        ))}
    }


    // const handleSearch = () => {
    //     var q = query(contactRef, where());

    //     const snapshot = await getDocs(q)
    // }

    return (

        <div>
            <div className="rectangle"></div>
            <div className="rectangle2">
                <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
            </div>
            <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <Link to='/user_name'><button className="homeBtn"><i className="fa fa-home"></i> מסך הבית</button></Link>
                    </div>
            <div className="container">
                <form id="filter1">
                    <br />
                    <select name="sdomain" id="sdomain" placeholder=",juo">
                    <option value="" disabled selected>בחר תחום</option>
                        <option value="1">לוגיסטיקה</option>
                    </select>
                    <br />
                    <select name="sarea" id="sarea">
                        <option value="דרום">דרום</option>
                        <option value="ירושלים">ירושלים</option>
                        <option value="מרכז">מרכז</option>
                        <option value="צפון">צפון</option>
                        <option value="שרון">שרון</option>
                    </select>
                    <br />
                    <select name="scity" id="scity">
                    <option value="" disabled selected>בחר עיר</option>
                        <option value="0">ראשון לציון</option>
                        <option value="1">ירושלים</option>
                        <option value="2">אשדוד</option>
                        <option value="3">בית שמש</option>
                        <option value="4">תל אביב</option>
                    </select>
                    
                    <br />
                    <br />
                    <br />
                     <button id="btnOK" type="button" onClick={handleClick}>חפש</button> 
                

                </form>
            </div>

        </div>
    )

}