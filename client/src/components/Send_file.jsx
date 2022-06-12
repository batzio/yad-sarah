import React from 'react';
import { Link, Navigate } from "react-router-dom"

import emailjs from '@emailjs/browser';

export const Send_file = (props) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lbg475p', 'template_wv4rpeu', e.target, '5LATqiCDbPCcir3ur')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                    
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>תפקיד:</label>
                    <textarea name="title" />
                    <label>תאור התפקיד:</label>
                    <textarea name="job_title" />
                    <label>דרישות התפקיד:</label>
                    <textarea name="requiments" />
                    <label>ימים ושעות התנדבות:</label>
                    <textarea name="hour" />
                    <input type="submit" value="שלח" />
                    

                </form>

            </div>
        </div>

    );
};