import React from 'react'
import Statics from './Statics';
import { Outlet, Link } from "react-router-dom";

function DoctorDashboard() {
  return (
      <div>
          <li class="nav-item dropdown has-arrow logged-item">
    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
        <span class="user-img">
            <img class="rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" width="31" alt="Harshad Mehta" />
        </span>
    </a>
    <div class="dropdown-menu dropdown-menu-right">
        <div class="user-header">
            <div class="avatar avatar-sm">
                <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" class="avatar-img rounded-circle" />
            </div>
            <div class="user-text">
                <h6>Harshad Mehta</h6>
                <p class="text-muted mb-0">Doctor</p>
            </div>
        </div>
        <Link class="dropdown-item" to="/DoctorDashboard">Dashboard</Link>
       
        <a class="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
        <a class="dropdown-item" href="login.html">Logout</a>
    </div>
</li>

<div class="breadcrumb-bar">
<div class="container-fluid">
<div class="row align-items-center">
<div class="col-md-12 col-12">
    <nav aria-label="breadcrumb" class="page-breadcrumb">
        <ol class="breadcrumb">
            {/* <li class="breadcrumb-item"><a href="index-2.html">Home</a></li> */}
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
    </nav>
    <h2 class="breadcrumb-title">Dashboard</h2>
</div>
</div>
</div>
</div>

<div class="content">
<div class="container-fluid">

<div class="row">
<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
    
 
    <div class="profile-sidebar">
        <div class="widget-profile pro-widget-content">
            <div class="profile-info-widget">
                <a href="#" class="booking-doc-img">
                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                </a>
                <div class="profile-det-info">
                    <h3>Dr. Harshad Mehta</h3>
                    
                    <div class="patient-details">
                        <h5 class="mb-0">BDS, MDS - Oral & Orthopedtic Surgery</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard-widget">
            <nav class="dashboard-menu">
                <ul>
                    <li class="active">
                        <a href="doctor-dashboard.html">
                            <i class="fas fa-columns"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="appointments.html">
                            <i class="fas fa-calendar-check"></i>
                            <span>Appointments</span>
                        </a>
                    </li>
                    <li>
                        <a href="my-patients.html">
                            <i class="fas fa-user-injured"></i>
                            <span>My Patients</span>
                        </a>
                    </li>
                    <li>
                        <a href="schedule-timings.html">
                            <i class="fas fa-hourglass-start"></i>
                            <span>Schedule Timings</span>
                        </a>
                    </li>
                    <li>
                        {/* <a href="invoices.html">
                            <i class="fas fa-file-invoice"></i>
                            <span>Invoices</span>
                        </a> */}
                    </li>
                    <li>
                        {/* <a href="reviews.html">
                            <i class="fas fa-star"></i>
                            <span>Reviews</span>
                        </a> */}
                    </li>
                    <li>
                        {/* <a href="chat-doctor.html">
                            <i class="fas fa-comments"></i>
                            <span>Message</span>
                            <small class="unread-msg">23</small>
                        </a> */}
                    </li>
                    <li>
                        <a href="doctor-profile-settings.html">
                            <i class="fas fa-user-cog"></i>
                            <span>Profile Settings</span>
                        </a>
                    </li>
                    <li>
                        {/* <a href="social-media.html">
                            <i class="fas fa-share-alt"></i>
                            <span>Social Media</span>
                        </a> */}
                    </li>
                    <li>
                        <a href="doctor-change-password.html">
                            <i class="fas fa-lock"></i>
                            <span>Change Password</span>
                        </a>
                    </li>
                    <li>
                        <a href="index-2.html">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
   
    
</div>

<div class="col-md-7 col-lg-8 col-xl-9">

    <div class="row">
        <div class="col-md-12">
            <div class="card dash-card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 col-lg-4">
                            <div class="dash-widget dct-border-rht">
                                <div class="circle-bar circle-bar1">
                                    <div class="circle-graph1" data-percent="75">
                                        <img src="assets/img/icon-01.png" class="img-fluid" alt="patient" />
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6>Total Patient</h6>
                                    <h3>1500</h3>
                                    <p class="text-muted">Till Today</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-12 col-lg-4">
                            <div class="dash-widget dct-border-rht">
                                <div class="circle-bar circle-bar2">
                                    <div class="circle-graph2" data-percent="65">
                                        <img src="assets/img/icon-02.png" class="img-fluid" alt="Patient" />
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6>Today Patient</h6>
                                    <h3>160</h3>
                                    <p class="text-muted">09, April 2022</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-12 col-lg-4">
                            <div class="dash-widget">
                                <div class="circle-bar circle-bar3">
                                    <div class="circle-graph3" data-percent="50">
                                        <img src="assets/img/icon-03.png" class="img-fluid" alt="Patient" />
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6>Appoinments</h6>
                                    <h3>85</h3>
                                    <p class="text-muted">09, Apr 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">
            <h4 class="mb-4">Patient Appoinment</h4>
            <div class="appointment-tab">
            
                
                <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                    <li class="nav-item">
                        <a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
                    </li> 
                </ul>
               
                
                <div class="tab-content">
                
                 
                    <div class="tab-pane show active" id="upcoming-appointments">
                        <div class="card card-table mb-0">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Appointment Date</th>
                                                <th>Purpose</th>
                                                <th>Type</th>
                                                <th class="text-center">Paid Amount</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Harshil Mehta<span>#DC0004</span></a>
                                                    </h2>
                                                </td>
                                                <td>11 April 2022 <span class="d-block text-info">10.00 AM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td class="text-center">Rs. 350</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Urvashi Vyas <span>#DC0001</span></a>
                                                    </h2>
                                                </td>
                                                <td>13 April 2022 <span class="d-block text-info">11.00 AM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td class="text-center">Rs. 250</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Harsh Mehta<span>#DC0002</span></a>
                                                    </h2>
                                                </td>
                                                <td>14 April 2022 <span class="d-block text-info">1.00 PM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td class="text-center">Rs. 175</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Yash Vachhani<span>#DC0003</span></a>
                                                    </h2>
                                                </td>
                                                <td>14 April 2022 <span class="d-block text-info">9.00 AM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td class="text-center">Rs. 250</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Drashti Upadhayay<span>#DC0004</span></a>
                                                    </h2>
                                                </td>
                                                <td>16 April 2022 <span class="d-block text-info">6.00 PM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td class="text-center">Rs. 450</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>		
                                </div>
                            </div>
                        </div>
                    </div>
                   
               
                   
                    <div class="tab-pane" id="today-appointments">
                        <div class="card card-table mb-0">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Patient Name</th>
                                                <th> Appointment Date</th>
                                                <th>Purpose</th>
                                                <th>Type</th>
                                                <th class="text-center">Paid Amount</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Isha Trivedi<span>#DC0006</span></a>
                                                    </h2>
                                                </td>
                                                <td>09 April 2022 <span class="d-block text-info">6.00 PM</span></td>
                                                <td>Fever</td>
                                                <td>Old Patient</td>
                                                <td class="text-center">Rs. 300</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Jainam Doshi <span>#PT0006</span></a>
                                                    </h2>
                                                </td>
                                                <td>09 April 2022 <span class="d-block text-info">5.00 PM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td class="text-center">$100</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Rutvi Parikh <span>#DC0007</span></a>
                                                    </h2>
                                                </td>
                                                <td>09 April 2022 <span class="d-block text-info">3.00 PM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td class="text-center">Rs. 175</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image" /></a>
                                                        <a href="patient-profile.html">Manthan Thakkar <span>#DC0008</span></a>
                                                    </h2>
                                                </td>
                                                <td>09 April 2022 <span class="d-block text-info">1.00 PM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td class="text-center">Rs.350</td>
                                                <td class="text-right">
                                                    <div class="table-action">
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                        </a>
                                                        
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
    
                                        </tbody>
                                    </table>		
                                </div>	
                            </div>	
                        </div>	
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

      </div>
    

</div>
</div>

</div>

</div>
  );
}
export default DoctorDashboard;