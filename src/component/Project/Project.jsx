import React from 'react';
import {Link} from 'react-router-dom'
function Project() {
	return (
		<div className="container project" name="Project">
			<p className='text-uppercase mt-5 text-secondary font-weight-bold'>Project</p>
			<h4 className='text-uppercase font-weight-bold'>Website ReactJS</h4>
			<p>Bootstrap, Redux, ReactJS, Axios</p>
            <Link to='/ProjectDetail'>
                <div>
                    <img className='img-fluid image_responsive' src={require('../../image/p9.png')} alt="p9"/>
                </div>
            </Link>
		</div>
	);
}

export default Project;
