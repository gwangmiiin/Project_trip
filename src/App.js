import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProfileFood from 'pages/ProfileFood';
import ProfilePlay from 'pages/ProfilePlay';
import RecoCourse from 'pages/RecoCourse';
import Home from 'pages/Home';
import Question from 'pages/Question';
import Result from 'pages/Result';
import Course1 from 'pages/Course1';
import Course2 from 'pages/Course2';
import Course3 from 'pages/Course3';


// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'assets/styles/bgpic.css'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profileFood" element={<ProfileFood />} />
            <Route path="/profilePlay" element={<ProfilePlay />} />
            <Route path="/recoCourse" element={<RecoCourse />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/qustion' element={<Question/>} />
            <Route path='/result' element={<Result/>} />
            <Route path='/course1' element={<Course1/>} />
            <Route path='/course2' element={<Course2/>} />
            <Route path='/course3' element={<Course3/>} />
            <Route path="*" render={() => <Navigate to="/" />} />
        </Routes>
    );
}

export default App;