import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

/* Main component */
import Main from './components/Main'

/* Reducers */
import reducers from './reducers/index.reducers'

/* Create new instance of redux store out of reducers and initial state */
const INITIAL_STATE = {}
const store = createStore(
    reducers,
    INITIAL_STATE,
    /* Redux Thunk is middleware for Redux that gives me access to dispatch function,
       which allows me to do async stuff in action creators,
       manually dispatching actions once async stuff resolves. */    
    applyMiddleware(reduxThunk)
)


/* Render app into root element */
/* Provider is a bonding layer between react and redux,
   it makes the store accessible to every component in the app,
   and whenever the store changes, it tells all child components to rerender */
ReactDOM.render(
    <Provider store={store}>
	<Main/>
    </Provider>,
    document.querySelector("#root"))
