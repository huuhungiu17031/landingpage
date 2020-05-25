import React, { Fragment } from 'react';
import NavBar from '../../component/Header/NavBar';
import Home from '../../component/Home/Home';
import About from '../../component/About/About';
import Experience from '../../component/Experience/Experience';
import Work from '../../component/Work/Work';
import Project from '../../component/Project/Project';

export default function HomePage() {
	return (
		<Fragment>
			<NavBar />
			<Home />
			<About />
			<Experience />
			<Work />
			<Project />
		</Fragment>
	);
}
