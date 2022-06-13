// import { Link, Route } from "react-router-dom"
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { useNavigate } from "react-router-dom";




// export const User_name = (props) => {

//     const navigate = useNavigate();



//     return (
//         <div>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
//             <img id="pic" src="https://serviced.co.il/wp-content/uploads/2022/01/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%99%D7%93-%D7%A9%D7%A8%D7%94.png" />
//             <div id="center">
//                 <br /> <br /><br /><br /><br />
//                 <Link to='/list'><button className="button_list" type="button">רשימת מתנדבים</button></Link>
//                 <br /><br />
//                 <a href='/filter'><button className="button_list" type="button">חיפוש מתנדבים</button></a>

//             </div>
//             <SideNav onSelect={(selected) => {navigate(selected);}}>
//                 <SideNav.Toggle />
//                 <SideNav.Nav defaultSelected="home">
//                     <NavItem eventKey="/list" >


//                         <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
//                         <NavText>רשימת מתנדבים</NavText>
//                     </NavItem>
//                     <NavItem eventKey="/filter">
//                         <NavIcon><i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /></NavIcon>
//                         <NavText>חיפוש</NavText>

//                     </NavItem>
//                 </SideNav.Nav>
//             </SideNav>

//             {/* </div> */}
//         </div>

//     )
// }