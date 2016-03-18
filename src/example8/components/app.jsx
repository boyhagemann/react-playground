import React from 'react'
import { Router, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Box from './box'

const drivers = {
    hash: hashHistory,
    browser: browserHistory
}

const App = ( { history, children}, { store } ) =>  {

    // Create an enhanced history that syncs navigation events with the store
    const syncedHistory = syncHistoryWithStore(drivers[history], store)

    return <Router history={syncedHistory}>{children}</Router>
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App;