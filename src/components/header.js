import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
		
		<header class="header">
			<nav class="navbar navbar-expand-lg header-nav">
				<div class="navbar-header">
					<a id="mobile_btn" href="javascript:void(0);">
						<span class="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<Link to="/" class="navbar-brand logo">
						<img src="assets/img/logo.png" class="img-fluid" alt="Logo" />
					</Link>
				</div>
				<div class="main-menu-wrapper">
					<div class="menu-header">
						<Link to="/" class="menu-logo">
							<img src="assets/img/logo.png" class="img-fluid" alt="Logo" />
						</Link>
						<a id="menu_close" class="menu-close" href="javascript:void(0);">
							<i class="fas fa-times"></i>
						</a>
					</div>
					<ul class="main-nav">
						<li class="active">
							<Link class="nav-link header-login" to="/Home">Home</Link>
						</li>
						<li class="has-submenu">
							<a href="#">Doctors <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
								<li><Link class="nav-link header-login" to="/DoctorDashboard">Doctor Dashboard</Link></li>
								<li><Link class="nav-link header-login" to="/Appointment">Appointments</Link></li>
								<li><Link class="nav-link header-login" to="/ScheduleTiming">ScheduleTiming</Link></li>
								<li><Link class="nav-link header-login" to="/MyPatient">MyPatient</Link></li>
								<li><Link class="nav-link header-login" to="/PatientProfile">PatientsProfile</Link></li>
								{/* <li><a href="chat-doctor.html">Chat</a></li> */}
								{/* <li><a href="invoices.html">Invoices</a></li> */}
								<li><Link class="nav-link header-login" to="/DoctorProfile">DoctorProfile</Link></li>
								<li><Link class="nav-link header-login" to="/DoctorProfileSetting">Doctor Profile Settings</Link></li>
								{/* <li><a href="reviews.html">Reviews</a></li> */}
								<li><Link class="nav-link header-login" to="/Register">Doctor Register</Link></li>
							</ul>
						</li>	
						{/* <li class="has-submenu"> */}
							{/* <a href="#">Patients <i class="fas fa-chevron-down"></i></a> */}
							{/* < class="submenu">
								<li><a href="search.html">Search Doctor</a></li>
								<li><a href="doctor-profile.html">Doctor Profile</a></li>
								<li><a href="booking.html">Booking</a></li>
								<li><a href="checkout.html">Checkout</a></li>
								<li><a href="booking-success.html">Booking Success</a></li>
								<li><a href="patient-dashboard.html">Patient Dashboard</a></li>
								<li><a href="favourites.html">Favourites</a></li>
								{/* <li><a href="chat.html">Chat</a></li> */}
								{/* <li><a href="profile-settings.html">Profile Settings</a></li>
								<li><a href="change-password.html">Change Password</a></li>
							</ul>  */}
						{/* </li>	 */}
						{/* <li class="has-submenu">
							<a href="#">Pages <i class="fas fa-chevron-down"></i></a>
							<ul class="submenu">
								<li><a href="voice-call.html">Voice Call</a></li>
								<li><a href="video-call.html">Video Call</a></li>
								<li><a href="search.html">Search Doctors</a></li>
								<li><a href="calendar.html">Calendar</a></li>
								<li><a href="components.html">Components</a></li>
								<li class="has-submenu">
									<a href="invoices.html">Invoices</a>
									<ul class="submenu">
										<li><a href="invoices.html">Invoices</a></li>
										<li><a href="invoice-view.html">Invoice View</a></li>
									</ul>
								</li>
								<li><a href="blank-page.html">Starter Page</a></li>
								<li><a href="login.html">Login</a></li>
								<li><a href="register.html">Register</a></li>
								<li><a href="forgot-password.html">Forgot Password</a></li>
							</ul>
						</li> */}
						<li>
							<a href="admin/index.html" target="_blank">Admin</a>
						</li>
						<li class="login-link">
							<a href="login.html">Login / Signup</a>
						</li>
					</ul>		 
				</div>		 
				<ul class="nav header-navbar-rht">
					<li class="nav-item contact-item">
						<div class="header-contact-img">
							<i class="far fa-hospital"></i>							
						</div>
						<div class="header-contact-detail">
							<p class="contact-header">Contact</p>
							<p class="contact-info-header"> 9409006358</p>
						</div>
					</li>
					<li class="nav-item">
						<Link class="nav-link header-login" to="/login" >login / Signup </Link>
					</li>
				</ul>
			</nav>
		</header>
		
    );
  }
  
  export default Header;