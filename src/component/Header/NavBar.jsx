import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
export default function NavBar() {
	useEffect(() => {
		const toggleButton = document.getElementsByClassName('toggleButton')[0];
		const navBarLink = document.getElementsByClassName('navBar-links')[0];
		toggleButton.addEventListener('click', () => {
			navBarLink.classList.toggle('active');
		});
		gsap.fromTo('.bar', 2, { opacity: 0 }, { opacity: 1 });
	});
	return (
		<nav className="navBar">
			<div className="brand-title">Portfolio</div>
			<button  className="toggleButton ">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
			<div className="navBar-links">
				<ul>
					<li>
						<Link smooth={true} to="Home">
							Home
						</Link>
					</li>
					<li>
						<Link smooth={true} to="About">
							About
						</Link>
					</li>
					<li>
						<Link smooth={true} to="Experience">
							Experience
						</Link>
					</li>
					<li>
						<Link smooth={true} to="Work">
							Work
						</Link>
					</li>
					<li>
						<Link smooth={true} to="Project">
							Project
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
