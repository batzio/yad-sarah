export const Add_contact = (props) => {

    return (
        <div>
            <div id="ltr">
                <div className="rectangle"></div>
                <div className="rectangle2">
                    <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
                </div>

                <div className="container">
                    <form action="/action_page.php">
                        <label for="aname">שם העמותה:</label>
                        <input type="text1" id="aname" name="association_name" placeholder="הקלד כאן" />

                        <label for="dname">תחום העמותה:</label>
                        <input type="text1" id="dname" name="domain_association" placeholder="הקלד כאן" />

                        <label for="cname">שם רכז העמותה:</label>
                        <input type="text1" id="cname" name="association_coordinator" placeholder="הקלד כאן" />

                        <label for="mname">מייל רכז:</label>
                        <input type="text1" id="mname" name="mail" placeholder="הקלד כאן" />

                        <label for="address">כתובת העמותה:</label>
                        <select id="address" name="address">
                            <option value="" disabled selected>בחר כתובת</option>
                            <option value="Jerusalem">ירושלים</option>
                            <option value="Beit_shemesh">בית שמש</option>
                            <option value="haifa">חיפה</option>
                        </select>

                        <label for="mbname">תא דואר:</label>
                        <input type="text1" id="mbname" name="mailbox" placeholder="הקלד כאן" />

                        <label for="cellphone">טלפון נייד:</label>
                        <input type="text1" id="cellphone" name="cellphone" placeholder="הקלד כאן" />

                        <label for="Landline">טלפון נייח:</label>
                        <input type="text1" id="Landline" name="Landline" placeholder="הקלד כאן" />

                        <label for="subject">הערות</label>
                        <textarea id="subject" name="subject" placeholder="הקלד כאן"></textarea>
                    </form>

                    <button id="btnOK" type="button">אישור</button>
                </div>
            </div>
            </div>

            )
}