import { Link } from "react-router-dom"

export const User_name = (props) => {


    return (
        <div>
            <div className="rectangle"></div>
            <div className="rectangle2">
                <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
            </div>
            <div id="center">
                <br />
                <br />
                <Link to='/list' class="button"> רשימת מתנדבים</Link>
                <br />
                <br />
                <Link to='/filter' class="button"> חיפוש מתנדבים</Link>
            </div>
        </div>

    )
}