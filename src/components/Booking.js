import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Booking() {
  return (
     <div>
        <div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-12 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Booking</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Booking</h2>
						</div>
					</div>
				</div>
			</div>
	
			
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-12">
						
							<div class="card">
								<div class="card-body">
									<div class="booking-doc-info">
										<a href="doctor-profile.html" class="booking-doc-img">
											<img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
										</a>
										<div class="booking-info">
											<h4><a href="doctor-profile.html">Dr. Harshad Mehta</a></h4>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">35</span>
											</div>
											<p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Satellite , Ahmedabad </p>
										</div>
									</div>
								</div>
							</div>
						
							<div class="card booking-schedule schedule-widget">
							
								<div class="schedule-header">
									<div class="row">
										<div class="col-md-12">
										
										
											<div class="day-slot">
												<ul>
													<li class="left-arrow">
														<a href="#">
															<i class="fa fa-chevron-left"></i>
														</a>
													</li>
													<li>
														<span>Mon</span>
														<span class="slot-date">11 April <small class="slot-year">2022</small></span>
													</li>
													<li>
														<span>Tue</span>
														<span class="slot-date">12 April <small class="slot-year">2022</small></span>
													</li>
													<li>
														<span>Wed</span>
														<span class="slot-date">13 April<small class="slot-year">2022</small></span>
													</li>
													<li>
														<span>Thu</span>
														<span class="slot-date">14 April <small class="slot-year">2022</small></span>
													</li>
													<li>
														<span>Fri</span>
														<span class="slot-date">15 April <small class="slot-year">2022</small></span>
													</li>
													<li>
														<span>Sat</span>
														<span class="slot-date">16 April <small class="slot-year">2022</small></span>
													</li>
													<li>
														<span>Sun</span>
														<span class="slot-date">17 April <small class="slot-year">2022</small></span>
													</li>
													<li class="right-arrow">
														<a href="#">
															<i class="fa fa-chevron-right"></i>
														</a>
													</li>
												</ul>
											</div>
											
											
										</div>
									</div>
								</div>
							
								<div class="schedule-cont">
									<div class="row">
										<div class="col-md-12">
										
										
											<div class="time-slot">
												<ul class="clearfix">
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>9:15</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>9:30</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>9:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
													<li>
														<a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:15</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>09:30</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
													<li>
                                                    <a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:15</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>09:30</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
													<li>
                                                    <a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:15</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>09:30</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
													<li>
                                                    <a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:15</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>09:30</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
													<li>
                                                    <a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:15</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>09:30</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
													<li>
                                                    <a class="timing" href="#">
															<span>9:00</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:15</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>09:30</span> <span>AM</span>
														</a>
														<a class="timing" href="#">
															<span>09:45</span> <span>AM</span>
														</a>
                                                        <a class="timing" href="#">
															<span>10:00</span> <span>AM</span>
														</a>
													</li>
												</ul>
											</div>
										
											
										</div>
									</div>
								</div>
								
								
							</div>
						
							
						
							<div class="submit-section proceed-btn text-right">
								<Link class="btn btn-primary submit-btn" to="/Checkout" >Proceed to Pay</Link>
							</div>
							
							
						</div>
					</div>
				</div>
                </div>
			</div>		
  )
}

export default Booking;