import React, { Component } from 'react'
import { connect } from 'react-redux';

/* Actions */
import * as profilesActions from '../actions/profiles.actions'


class Header extends Component {
    renderLoginButton () {
	var user = this.props.user
	switch(user) {
	    case null:
		return
	    case false:
		return (
		    <a href="/api/v1/profiles/google"> Login with Google </a>
		)
	    default:
		return (
		    <div>
			{ user.email }
			<a href="/api/v1/profiles/logout"> Logout </a>
		    </div>
		)
	}
    }
    render() {
	return (
	    <header>
		<div className="logo">
		    Logo
		</div>
		<div className="main-menu">
		    { this.renderLoginButton() }
		</div>
	    </header>
	);
    }
}

/* Magic connecting component to redux */
function mapStateToProps(state) {
    return {
    	user: state.profiles.user	
    };
}
/* First argument allows to access state */
/* Second allows to fire actions */
export default connect(mapStateToProps, profilesActions)(Header);
