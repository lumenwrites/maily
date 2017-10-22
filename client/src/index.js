import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'


/* Main component */
import App from './components/App'

/* Reducers */
import reducers from './reducers/index.reducers'

/* Create new instance of redux store out of reducers and initial state */
const INITIAL_STATE = {}
const store = createStore(
    reducers,
    INITIAL_STATE,
    /* Enable redux dev tools */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware()
)


/* Render app into root element */
/* Provider is a bonding layer between react and redux,
   it makes the store accessible to every component in the app,
   and whenever the store changes, it tells all child components to rerender */
ReactDOM.render(
    <Provider store={store}>
	<App/>
    </Provider>,
    document.querySelector("#root"))
