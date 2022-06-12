
import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";


import emailjs from '@emailjs/browser';

export const Send_file = ({emailList}) => {
    console.log(emailList)

    const [title, setTitle] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [requiments, setRequiments] = useState('');
    const [hour, setHour] = useState('');
    //const [user_email, setUserEmail] = useState('');


    const navigate = useNavigate();


    const sendEmail = (e) => {
        e.preventDefault();

        emailList.forEach(email => emailjs.send('service_lbg475p', 'template_wv4rpeu', {user_email: email, title: title,job_title:job_title,requiments:requiments,hour:hour }, '5LATqiCDbPCcir3ur')
            .then((result) => {
                console.log(result.text);
                alert("ההודעה נשלחה בהצלחה", result.text);
                navigate("/user_name");
            }, (error) => {
                console.log(error.text);
                alert("ארעה שגיאה נסה שנית", error.text);

            }))
    };

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
            <div className='container'>
                <form onSubmit={sendEmail}>
                 
                    {/* <label>אימייל:</label>
                    <textarea name="user_email" value={user_email} onChange={(e) => setUserEmail(e.target.value)} /> */}
                    <label>תפקיד:</label>
                    <textarea name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>תאור התפקיד:</label>
                    <textarea name="job_title" value={job_title} onChange={(e) => setJobTitle(e.target.value)}/>
                    <label>דרישות התפקיד:</label>
                    <textarea name="requiments" value={requiments} onChange={(e) => setRequiments(e.target.value)}/>
                    <label>ימים ושעות התנדבות</label>
                    <textarea name="hour" value={hour} onChange={(e) => setHour(e.target.value)}/>
                    <input type="submit" value="שלח" id="btn_send" />

                </form>

            </div>

        </div>

    );
};
