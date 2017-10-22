import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/* My components  */
import Header from './Header'

const Dashboard = () => {
    return (
	<div>
	    [Dashboard]
	    <button onClick={()=> console.log("Hi there!") }>Press me!</button>
	</div>
    )
}

const Emails = () => {
    return (
	<div>
	    [Emails]
	</div>
    )
}


const App = () => {
    return (
	<div>
	    <BrowserRouter>
		<div className="mainWrapper">
		    <Header />
		    <Route exact path="/" component={Dashboard} />		    
		    <Route path="/emails" component={Emails} />
		</div>
	    </BrowserRouter>
	</div>
    )
}

export default App


