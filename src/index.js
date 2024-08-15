import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library';
// import Clock from './chapter_04/clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList'
// import Accommodate from './chapter_07/Accommodate'
// import ComfirmButton from './chapter_08/ComfirmButtonFc';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendaceBook';
// import SignUp from './chapter_11/SignUp';
// import Calculator from './chapter_12/Calculator';
// import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import MainPage from './MainPage';
import Blocks from "./chapter_15/Blocks"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* <CommentList /> */}
      {/* <NotificationList/> */}
      {/* <Accommodate /> */}
      {/* <ComfirmButton/> */}
      {/* <LandingPage/> */}
    {/* <AttendanceBook/> */}
    {/* <SignUp/> */}
    {/* <Calculator></Calculator> */}
    {/* <ProfileCard></ProfileCard> */}
    {/* <DarkOrLight></DarkOrLight> */}
    {/* <MainPage></MainPage>
     */}
     <Blocks></Blocks>
    </React.StrictMode>
  );

// function AppWithClock() {
//   return (
//     <React.StrictMode>
//       <Clock />i
//     </React.StrictMode>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(<AppWithClock />);
// }, 1000);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=> {
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );
// },1000);
// setInterval(()=> {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//   document.getElementById('root')
//   );
// },1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
