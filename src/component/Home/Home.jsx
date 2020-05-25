import React, { useEffect } from 'react';
import { gsap } from 'gsap';
function Home() {
	useEffect(() => {
		gsap.fromTo('.socialMedia__ele', 1, { rotateX: 0 }, { rotateX: '360deg' });
	});
	return (
		<div className="homePage" name="Home">
			<div className="homeWrapper">
				<div className="homeWrapper__ele avatar">
					<img className="img-fluid" src={require('./profileImg/cv.png')} alt="cv" />
				</div>

				<div className="homeWrapper__ele">
					<h3 className="text-white">I'm a</h3>
					<h3 className="typing text-white">Developer</h3>
				</div>

				<div className="homeWrapper__ele">
					<div className="socialMedia">
						<div className="socialMedia__ele">
							<a href="https://www.facebook.com/hung.nguyenhuu.357284/">
								<i className="fa fa-facebook"></i>
							</a>
						</div>
						<div className="socialMedia__ele">
							<a href="https://www.instagram.com/">
								<i className="fa fa-instagram"></i>
							</a>
						</div>
						<div className="socialMedia__ele">
							<a href="https://www.instagram.com/">
								<i className="fa fa-twitter"></i>
							</a>
						</div>
						<div className="socialMedia__ele">
							<a href="https://www.instagram.com/">
								<i className="fa fa-google"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
