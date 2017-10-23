import axios from 'axios'

export function fetchUser() {
    console.log("Fetching user")
    return function(dispatch) {
	axios.get('/api/v1/profiles/user')
	     .then(res => {
		 const user = res.data
		 console.log('Logged in ' + JSON.stringify(user))
		 dispatch({
		     type: 'FETCH_USER',
		     payload: user
		 })
	     })
    }
}
