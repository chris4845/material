import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { firebaseConnect, pathToJS, isLoaded } from 'react-redux-firebase'
import { submit } from 'redux-form'
import { reduxFirebase as rfConfig } from 'config'
import { ACCOUNT_FORM_NAME } from 'constants/formNames'
import { UserIsAuthenticated } from 'utils/router'
import defaultUserImageUrl from 'static/User.png'
import LoadingSpinner from 'components/LoadingSpinner'
import classes from './YoutubeContainer.scss'

@UserIsAuthenticated // redirect to /login if user is not authenticated
@firebaseConnect() // add this.props.firebase
@connect(
  // Map redux state to props
  ({ firebase }) => ({
    auth: pathToJS(firebase, 'auth'),
    account: pathToJS(firebase, 'profile'),
  }),
  {
    // action for submitting redux-form
    submitForm: () => (dispatch) => dispatch(submit(ACCOUNT_FORM_NAME))
  }
)

export default class Youtube extends Component {
  render () {
    return (
      <div className={classes.container}>
        Poop
      </div>
    )
  }
}
