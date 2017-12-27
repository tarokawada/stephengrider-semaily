import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import formFields from './formFields'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

const SurveyReview = (props) => {
    
    const renderFields =  _.map(formFields, field => {
        return(
            <div key={field.name}>
                <label>{field.label}</label>
                <div>{props.formValues[field.name]}</div>
            </div>
        )
    })

    return(
        <div>
            <h5>Please confirm your entries</h5>
            {renderFields}
            <button className="yellow darken-3 btn-flat white-text left" onClick={props.onCloseSubmit}>Back</button>
            <button className="green btn-flat white-text right" onClick={() => props.submitSurvey(props.formValues, props.history)}>
                Send
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview))