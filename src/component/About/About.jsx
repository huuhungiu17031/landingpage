import React from 'react';
import Swal from 'sweetalert2';

function About() {
	const imageUrl = require('../../image/love3000.jpg');
	const handleOnClick = () => {
		Swal.fire({
			title: 'Sweet!',
			text: 'Love you 3000! <3 .',
			imageUrl: imageUrl,
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		});
	};
	return (
		<div className="about container" name="About">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-4 col-sm-6 col-12	">
					<div className="box">
						<div className="box_intro">
							<p className="text-uppercase mt-5 text-secondary font-weight-bold ">Information</p>
							<h4 className="text-uppercase font-weight-bold ">About me</h4>
							<img
								className="img-fluid image_responsive  mt-1"
								src={require('../../image/p8.jpeg')}
								alt="profile_image"
							/>
						</div>
					</div>
				</div>

				<div className="col-lg-8 col-sm-6 col-12">
					<div className="box">
						<div className="box-intro">
							<h5 className="text-uppercase my-4 text-secondary font-weight-bold ">ABOUT ME</h5>

							<h5 className="font-weight-bold">I'm Web Dev</h5>

							<p className="pt-1">
								Hi, my name is Nguyen Huu Hung. I'm a Web Developer. With the goal of becoming a Full
								Stack Developer, I always strive to learn and improve my skills. I am looking for a
								dynamic, conductive working environment that allows me to show my ability and usefulness.
							</p>
							<div className="row">
								<div className="col-lg-7 col-sm-12 col-12 ">
									<p>
										<b>Birthday:</b> <span> 11 January 1999</span>
									</p>
									<p>
										<b>Website:</b><span> www.dailywebsite.com</span>
									</p>
									<p>
										<b>Phone:</b><span> 0975408519</span>
									</p>
									<div className="row justify-content-center align-items-center ">
										<div className="col-lg-5 col-sm-12 col-12">
											<button
												onClick={() => {
													handleOnClick();
												}}
												className="btn btn-dark button_long"
											>
												<b>HIRE ME</b>
											</button>
										</div>
										<div className="col-lg-7 col-sm-12 col-12">
											<button className="btn btn-dark button_long">
												<b>DOWNLOAD CV</b>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-5 col-sm-12 col-12">
									<p>
										<b>Mail:</b><span> huuhungiu17031@gmail.com</span>
									</p>
									<p>
										<b>Instagram:</b><span> https://www.instagram.com</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
