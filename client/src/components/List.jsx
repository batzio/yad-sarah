import { Link } from "react-router-dom"
import { FirebaseError } from "firebase/app";
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { firestore } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export const List = (props) => {

    // const contactRef = collection(firestore,"Contacts");
    // const [contactObject, setContactObject] = useState("");
    // const getData = async () => {
    //     var q = query(contactRef);

    //     const snapshot = await getDocs(q)
    //     snapshot.forEach(doc =>
    //         {
    //             console.log(doc.data());
    //             setContactObject(prev => [...prev, doc.data()])
    //         })
    // }

 
    return (
        <div>
            <div id="ltr">
                <div className="rectangle">
                </div>
                <div className="rectangle2">
                    <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
                    </div>
                    <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <Link to='/user_name'><button class="homeBtn"><i class="fa fa-home"></i> מסך הבית</button></Link>
                    </div>
                    
                    <table id="tbl" border="1">
                        <tr >
                            <th> שם עמותה</th>
                            <th> תחום</th>
                            <th> שם רכז העמותה</th>
                            <th> מייל הרכז</th>
                            <th> פלאפון נייד</th>
                            <th> טלפון נייח</th>
                            <th>ת.ד.</th>
                            <th>הערות</th>
                        </tr>
                        {/*  <tbody id="table-body"></tbody>  */}
                        {/*  <td><button> ערוך</button></td> */}
                        {/* <td button> מחק</button></td>  */}
                        {/* <button> ערוך</button> */}
                        {/* <button> מחק</button>  */}
                    </table>
                    <Link to='/add-contact'><button id="btnOK" type="button">הוספת איש קשר</button></Link>
                    
                </div>
            </div>

    )
}