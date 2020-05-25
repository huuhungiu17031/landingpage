import React,{useEffect} from 'react';
import {gsap} from 'gsap'

function Work() {
	useEffect(()=>{
		gsap.from('.wrapperImage',{opacity:0,duration:3,y:100,stagger:0.6})
		
	})
	return (
		<div>
			<div className="work container" name="Work">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-12 col-sm-12 col-12">
						<div className="box">
							<div className="box_intro">
								<p className="text-uppercase text-secondary font-weight-bold my-3">What I do</p>
								<h4 className="text-uppercase font-weight-bold ">services</h4>
							</div>
						</div>
					</div>

					<div className="col-lg-12 col-sm-12 col-12 ">
						<div className="box">
							<div className="box_intro">
								<div className="row">
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapperImage">
											<img
												className="image_responsive"
												src={require('../../image/p2.jpeg')}
												alt="p2"
											/>
											<div className="overlayImage">
												<h5 className="title text-center text-uppercase m-0">Web Design</h5>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapperImage">
											<img
												className=" image_responsive"
												src={require('../../image/p3.jpeg')}
												alt="p3"
											/>
											<div className="overlayImage">
												<h5 className="title text-center text-uppercase">Development</h5>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapperImage">
											<img
												className=" image_responsive"
												src={require('../../image/p4.jpeg')}
												alt="p3"
											/>
											<div className="overlayImage">
												<h5 className="title text-center text-uppercase">Photography</h5>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapperImage">
											<img
												className=" image_responsive"
												src={require('../../image/p5.jpeg')}
												alt="p3"
											/>
											<div className="overlayImage">
												<h5 className="title text-center text-uppercase">Marketing</h5>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapperImage">
											<img
												className=" image_responsive"
												src={require('../../image/p6.jpeg')}
												alt="p5"
											/>
											<div className="overlayImage">
												<h5 className="title text-center text-uppercase">Fully response</h5>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-sm-4 col-12">
										<div className="wrapperImage">
											<img
												className=" image_responsive"
												src={require('../../image/p7.jpeg')}
												alt="p8"
											/>
											<div className="overlayImage">
												<h5 className="title text-center text-uppercase">Art direction</h5>
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

export default Work;
