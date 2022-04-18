import "./App.css";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Register from "./components/Register";
import DoctorRegister from "./components/DoctorRegister";
import DoctorDashboard from "./components/DoctorDashboard";
import Appointment from "./components/Appointment";
import ScheduleTiming from "./ScheduleTiming";
import MyPatient from "./components/MyPatient";
import PatientProfile from "./components/PatientProfile";
import DoctorProfile from "./components/DoctorProfile";
import Booking from "./components/Booking";
import Checkout from "./components/Checkout";
import BookingSuccessful from "./components/BookingSuccessful";
import DoctorProfileSetting from "./components/DoctorProfileSetting";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="DoctorRegister" element={<DoctorRegister />} />
          <Route path="DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="Appointment" element={<Appointment/>} />
          <Route path="ScheduleTiming" element={<ScheduleTiming/>} />
          <Route path="MyPatient" element={<MyPatient/>} />
          <Route path="PatientProfile" element={<PatientProfile/>} />
          <Route path="DoctorProfile" element={<DoctorProfile/>} />
          <Route path="Booking" element={<Booking/>} />
          <Route path="Checkout" element={<Checkout/>} />
          <Route path="BookingSuccessful" element={<BookingSuccessful/>} />
          <Route path="DoctorProfileSetting" element={<DoctorProfileSetting/>} />
          

          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
