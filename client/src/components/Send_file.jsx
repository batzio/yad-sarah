import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export const Send_file = ({ emailList }) => {

    const [title, setTitle] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [requiments, setRequiments] = useState('');
    const [hour, setHour] = useState('');


    const navigate = useNavigate();
    var uniquemailList = [];
    uniquemailList = emailList.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })


    const sendEmail = (e) => {

        e.preventDefault();
        if (emailList.length === 0) {
            alert("לא נמצאו ערכים מתאימים העונים על הדרישות");
            navigate("/filter")
            return;
        }

        uniquemailList.forEach(email => emailjs.send('service_zpq17bq', 'template_9dyofit', { user_email: email, title: title, job_title: job_title, requiments: requiments, hour: hour }, 't8iXtukSCOBFop9nQ')
            .then((result) => {
                navigate("/list");
            }, (error) => {
                console.log(error.text);
                alert("ארעה שגיאה נסה שנית");
                navigate("/filter")
            }))
        alert("ההודעה נשלחה בהצלחה")
        navigate("/list");
    };

    return (
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
            <div className='container'>
                <form onSubmit={sendEmail} >
                    <label>תפקיד</label>
                    <textarea id="ltr" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>תאור התפקיד</label>
                    <textarea id="ltr" name="job_title" value={job_title} onChange={(e) => setJobTitle(e.target.value)} />
                    <label>דרישות התפקיד</label>
                    <textarea id="ltr" name="requiments" value={requiments} onChange={(e) => setRequiments(e.target.value)} />
                    <label>ימים ושעות התנדבות</label>
                    <textarea id="ltr" name="hour" value={hour} onChange={(e) => setHour(e.target.value)} />
                    <input type="submit" value="שלח" id="btn_send" />

                </form>

            </div>

        </div>

    );
};
