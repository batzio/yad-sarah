import { Link } from "react-router-dom"

export const Filter = (props) => {

    return (

        <div>
            <div className="rectangle"></div>
            <div className="rectangle2">
                <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
            </div>
            <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <Link to='/user_name'><button class="homeBtn"><i class="fa fa-home"></i> מסך הבית</button></Link>
                    </div>
            <div className="container">
                <form id="filter1">
                    <br />
                    <select name="sdomain" id="sdomain">
                        <option value="" disabled selected>:תחום התנדבות</option>
                        <option value="1">לוגיסטיקה</option>
                    </select>
                    <br />
                    <select name="sarea" id="sarea">
                        <option value="" disabled selected>:מחוז</option>
                        <option value="1">דרום</option>
                        <option value="2">ירושלים</option>
                        <option value="3">מרכז</option>
                        <option value="4">צפון</option>
                        <option value="5">שרון</option>
                    </select>
                    <br />
                    <select name="scity" id="scity">
                        <option value="" disabled selected>:עיר</option>
                        <option value="0">ראשון לציון</option>
                        <option value="1">ירושלים</option>
                        <option value="2">אשדוד</option>
                        <option value="3">בית שמש</option>
                        <option value="4">תל אביב</option>
                    </select>
                    <br />
                    <br />
                    <br />

                    <Link to='/send_file'><button id="btnOK" type="button">חפש</button></Link>
                

                </form>
            </div>

        </div>
    )

}