import React from 'react'
import {connect} from 'react-redux'

import Register from './Register'
import Login from './Login'
import Nav from './Nav'
import Profile from './Profile'

import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <Nav/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/user' component={Profile}/>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return({
    auth : state.auth
  })
}

export default connect(mapStateToProps)(App)
