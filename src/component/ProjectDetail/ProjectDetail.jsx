import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';
function ProjectDetail() {
	useEffect(() => {
		gsap.fromTo('iframe', 2, { height: '30%' }, { height: '100%' });
		gsap.from('h5,p,.githubLink', { duration: 1, y: -50, opacity: 0, delay: 1.4 });
	});

	return (
		<div className="container ProjectDetail">
			<div className="wrapperProjectDetail">
				<h4 className="text-uppercase font-weight-bold titleProject">Project Detail</h4>
				<button className="button_long btn btn-secondary">
					<NavLink className="text-decoration-none" to="/">
						<b className="text-uppercase">Home Page</b>
					</NavLink>
				</button>

				<div className="row">
					<div className="col-lg-6 col-sm-6 col-sm-12">
						<iframe
							title="Project"
							width="100%"
							height="500px"
							src="https://www.youtube.com/embed/h0RLalj4jC4"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="col-lg-6 col-sm-6 col-sm-12">
						<h5>Introduction</h5>
						<p>
							In this project, I build the website that allowed people to sign in, sign up and book movie
							ticket. The technologies I used in this project are React, Axios, Redux and Boostrap. I
							based on the TIX.VN website to make the layout and the data in this project was
							provided by Cybersoft academy.
						</p>
						<div className="githubLink">
								<b>Link Github: </b>
								<span>
								<a
									className="text-decoration-none"
									href="https://github.com/huuhungiu17031/movieTicket.git"
								>
									https://github.com/huuhungiu17031/movieTicket.git
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetail;
