import { FirebaseError } from "firebase/app";
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const List = (props) => {

    const contactRef = collection(firestore, "Contacts");
    const [contactArray, setContactArray] = useState([]);
    const getData = async () => {
        var q = query(contactRef);

        const snapshot = await getDocs(q)
        snapshot.forEach(doc => {
            console.log(doc.data());
            setContactArray(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <div id="ltr">
                <div className="rectangle">
                </div>
                <div className="rectangle2">
                    <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
                </div>
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <Link to='/user_name'><button className="homeBtn"><i className="fa fa-home"></i> מסך הבית</button></Link>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th> שם עמותה</th>
                            <th> תחום</th>
                            <th> מחוז</th>
                            <th> עיר</th>
                            <th> שם רכז העמותה</th>
                            <th> מייל הרכז</th>
                            <th> פלאפון נייד</th>
                            <th> טלפון נייח</th>
                            <th>ת.ד.</th>
                            <th>הערות</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactArray.map((obj, i) => (
                            <tr key={i}>
                                <td>{obj.name}</td>
                                <td>{obj.domain}</td>
                                <td>{obj.district}</td>
                                <td>{obj.city}</td>
                                <td>{obj.nameOfCoordinator}</td>
                                <td>{obj.emailOfCoordinator}</td>
                                <td>{obj.cellPhone}</td>
                                <td>{obj.phone}</td>
                                <td>{obj.po}</td>
                                <td>{obj.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to='/add-contact'><button id="btnOK" type="button">הוספת איש קשר</button></Link>

            </div>
        </div>

    )
}