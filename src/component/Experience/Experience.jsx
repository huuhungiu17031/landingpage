import React, { useEffect} from 'react';
import { gsap } from 'gsap';
function Experience() {
	useEffect(() => {
		gsap.fromTo('.progress-bar1', 2, { width: 0 }, { width: '67%' });
		gsap.fromTo('.progress-bar2', 2, { width: 0 }, { width: '65%' });
		gsap.fromTo('.progress-bar3', 2, { width: 0 }, { width: '65%' });
		gsap.fromTo('.progress-bar4', 2, { width: 0 }, { width: '70%' });
		gsap.fromTo('.progress-bar5', 2, { width: 0 }, { width: '65%' });
	});
	return (
		<div className="experience container" name="Experience">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-4 col-sm-6 col-12">
					<div className="box">
						<div className="box_intro">
							<p className="text-uppercase text-secondary font-weight-bold my-3">Ability</p>
							<h4 className="text-uppercase font-weight-bold ">MY SKILLS</h4>
							<ul style={{ listStyle: 'none' }}>
								<li>
									Develop fundamental function such as: log in, check form validation, filter, find,
									sort, book ticket, and so on.
								</li>
								<li>Interact with API by AXIOS library.</li>
								<li>
									Be able to learn and use available libraries such as: Redux, Material-UI and so on
								</li>
								<li>Make basic Single Page Applications.</li>
								<li>Practice programming thinking, logic thinking, analyses problems.</li>
							</ul>
						
						</div>
					</div>
				</div>

				<div className="col-lg-8 col-sm-6 col-12 ">
					<div className="box">
						<div className="box_intro">
							<div>
								<div>
									<div className="pb-1">
										<b className="">REACT</b>
										<p className="m-0">Basics understanding and use Component, router, redux,...</p>
									</div>

									<div className="progress">
										<div
											className="progress-bar1 bg-danger"
											role="progressbar"
											style={{ width: '0' }}
											aria-valuenow={100}
											aria-valuemin={0}
											aria-valuemax={100}
										/>
									</div>
								</div>
							</div>

							<div>
								<div className="pb-1">
									<b>HTML</b>
									<p className="m-0">Fluent in multiple HTML tags.</p>
								</div>

								<div className="progress">
									<div
										className="progress-bar2 bg-danger"
										role="progressbar"
										style={{ width: '0' }}
										aria-valuenow={100}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
							</div>
							<div>
								<div className="pb-1">
									<b>CSS/SCSS</b>
									<p className="m-0">Know many properties, create the animation, response,….</p>
								</div>

								<div className="progress">
									<div
										className="progress-bar3 bg-danger"
										role="progressbar"
										style={{ width: '0' }}
										aria-valuenow={100}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
							</div>
							<div>
								<div className="pb-1">
									<b>BOOTSTRAP</b>
									<p className="m-0">Split basic interface, not much use.</p>
								</div>

								<div className="progress">
									<div
										className="progress-bar4 bg-danger"
										role="progressbar"
										style={{ width: '0' }}
										aria-valuenow={100}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
							</div>
							<div>
								<div className="pb-1">
									<b>JAVASCRIPT</b>
									<p className="m-0">Know how to use variable, function, array, Json,.... basic.</p>
								</div>

								<div className="progress">
									<div
										className="progress-bar5 bg-danger"
										role="progressbar"
										style={{ width: '0' }}
										aria-valuenow={100}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
