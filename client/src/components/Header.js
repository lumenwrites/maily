import React, { Component } from 'react'


class Header extends Component {
    render() {
	return (
	    <header>
		<div className="logo">
		    Logo
		</div>
		<div className="main-menu">
		    <a href="/api/v1/profiles/google"> Login with google </a>
		</div>
	    </header>
	);
    }
}

export default Header;

