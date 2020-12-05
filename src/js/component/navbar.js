import React from "react";
import PropTypes from "prop-types";

// Check index.scss file
// import "../../styles/index.scss";

const Navbar = props => {
	const buildMenu = props.menu.map((item, index) => {
		return (
			<li key={index} className="nav-item">
				<a className="nav-link" href={item.url}>
					{item.label}
				</a>
			</li>
		);
	});

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					{/* call function buildMenu to generate menu */}
					<ul className="navbar-nav ml-auto">{buildMenu}</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	menu: PropTypes.array,
	brand: PropTypes.string
};

export default Navbar;
