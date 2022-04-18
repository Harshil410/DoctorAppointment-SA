import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Register() {
  return (
    <div class="content">
				<div class="container-fluid">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
								
						
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Register" />	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Patient Register <Link class="nav-link header-login" to="/DoctorRegister">Are you a Doctor?</Link></h3>
										</div>
										
									
										<form action="https://dreamguys.co.in/demo/doccure/doctor-dashboard.html">
										<div>
										<div class="form-group form-focus">
												<input type="text" class="form-control floating" />
												<label class="focus-label">FirstName</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating" />
												<label class="focus-label">LastName</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating" />
												<label class="focus-label">Contact No / Email</label>
											</div>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating" />
												<label class="focus-label">Create Password</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating" />
												<label class="focus-label">Confirm Password</label>
											</div>
											<div class="text-right">
												<a class="forgot-link"><Link class="nav-link header-login" to="/Login">Already have an account?</Link></a>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
											<div class="login-or">
												<span class="or-line"></span>
												
											</div>
											<div class="row form-row social-login">
												<div class="col-6">
													{/* <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a> */}
												</div>
												<div class="col-6">
													{/* <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a> */}
												</div>
											</div>
										</form>
									
										
									</div>
								</div>
							</div>
							</div>
								
						</div>
					</div>


		
</div>
  );
}

export default Register;