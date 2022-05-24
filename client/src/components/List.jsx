import { Link } from "react-router-dom"

export const List = (props) => {


    return (



        <div>
            <div id="ltr">
                <div className="rectangle">
                </div>
                <div className="rectangle2">
                    <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />

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
                    <Link to='/add-contact'> <button  id="btnOK">הוספת איש קשר</button></Link>
                </div>
            </div>

        </div>

    )
}