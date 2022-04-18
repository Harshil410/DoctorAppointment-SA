import React from 'react'
import { Outlet, Link } from "react-router-dom";

function MyPatient() {
  return (
    <div>
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-12 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><Link class="nav-link header-login" to="/Home">Home</Link></li>
									<li class="breadcrumb-item active"><Link class = "aria-current" to="MyPatient/">My Patients</Link></li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">My Patients</h2>
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
												<h5 class="mb-0">BDS, MDS - Oral & Orthopedic Surgery</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											<li>
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
											<li class="active">
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
											{/* <li>
												<a href="invoices.html">
													<i class="fas fa-file-invoice"></i>
													<span>Invoices</span>
												</a>
											</li>
											<li>
												<a href="reviews.html">
													<i class="fas fa-star"></i>
													<span>Reviews</span>
												</a>
											</li> */}
											{/* <li>
												<a href="chat-doctor.html">
													<i class="fas fa-comments"></i>
													<span>Message</span>
													<small class="unread-msg">23</small>
												</a>
											</li> */}
											<li>
												<a href="doctor-profile-settings.html">
													<i class="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											<li>
												<a href="social-media.html">
													<i class="fas fa-share-alt"></i>
													<span>Social Media</span>
												</a>
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
						
							<div class="row row-grid">
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="patient-profile.html" class="booking-doc-img">
														<img src="assets/img/patients/patient.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3><a href="patient-profile.html">Yash Vachhani</a></h3>
														
														<div class="patient-details">
															<h5><b>Patient ID :</b> DC0007</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Vele Pale, Bhavnagar</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+91 940 853 6126</span></li>
													<li>Age <span>24 Years, Male</span></li>
													<li>Blood Group <span>AB+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="patient-profile.html" class="booking-doc-img">
														<img src="assets/img/patients/patient1.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3><a href="patient-profile.html">Isha Trivedi</a></h3>
														
														<div class="patient-details">
															<h5><b>Patient ID :</b> DC00112</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> North Carolina, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+91 945 636 4561</span></li>
													<li>Age <span>23 Years, Female</span></li>
													<li>Blood Group <span>O+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient2.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Harshil Mehta</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> DC0001</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i>  Satellite , Ahmedabad</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+91 940 900 6358</span></li>
													<li>Age <span>24 Years, Male</span></li>
													<li>Blood Group <span>B-</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient3.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Urvashi Vyas</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT00427</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Indiana, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+91 635 418 9961</span></li>
													<li>Age <span>24 Years, Female</span></li>
													<li>Blood Group <span>A+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
{/* 								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient4.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Michelle Fairfax</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0004</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Indiana, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 504 368 6874</span></li>
													<li>Age <span>25 Years, Female</span></li>
													<li>Blood Group <span>B+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient5.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Gina Moore</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0005</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Florida, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 954 820 7887</span></li>
													<li>Age <span>25 Years, Female</span></li>
													<li>Blood Group <span>AB-</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient6.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Elsie Gilley</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0006</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Kentucky, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 315 384 4562</span></li>
													<li>Age <span>14 Years, Female</span></li>
													<li>Blood Group <span>O-</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient7.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Joan Gardner</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0007</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> California, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 707 2202 603</span></li>
													<li>Age <span>25 Years, Female</span></li>
													<li>Blood Group <span>A-</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient8.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Daniel Griffing</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0007</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> New Jersey, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 973 773 9497</span></li>
													<li>Age <span>28 Years, Male</span></li>
													<li>Blood Group <span>O+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient9.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Walter Roberson</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0009</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Florida, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 850 358 4445</span></li>
													<li>Age <span>28 Years, Male</span></li>
													<li>Blood Group <span>A+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient10.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Robert Rhodes</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0010</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> California, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 858 259 5285</span></li>
													<li>Age <span>19 Years, Male</span></li>
													<li>Blood Group <span>B+</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								
								<div class="col-md-6 col-lg-4 col-xl-3">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<a href="#" class="booking-doc-img">
														<img src="assets/img/patients/patient11.jpg" alt="User Image" />
													</a>
													<div class="profile-det-info">
														<h3>Harry Williams</h3>
														<div class="patient-details">
															<h5><b>Patient ID :</b> PT0011</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Colorado, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>+1 303 607 7075</span></li>
													<li>Age <span>9 Years, Male</span></li>
													<li>Blood Group <span>A-</span></li>
												</ul>
											</div> */}
										</div>
									</div>
								</div>
								
							</div>

						</div>
					</div>

			// 	</div>

			// </div>		
            // </div>
  )
}

export default MyPatient;