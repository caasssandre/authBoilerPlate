import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { isAuthenticated } from '../utils/auth'

class Nav extends React.Component {
  render(){
    const {auth, logout} = this.props
    return(
      <div className='navbar'>
        <div className="navitem">
          {isAuthenticated() && <Link to='/' onClick={()=> logout()}>Logout</Link>}
        </div>
        <div className="navitem">
          {!isAuthenticated() && <Link to='/login'>Login</Link>}
        </div>
        <div className="navitem">
          {!isAuthenticated() && <Link to='/register'>Register</Link>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)