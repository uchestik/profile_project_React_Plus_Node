import React,{Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { sendMessage } from '../actions';




class SignInForm extends Component{
    

    submit(values){
        this.props.sendMessage(values,()=>{
            this.props.history.push('/');
        });
     
    }

    renderInputField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`

        return(
            <div className={className}>
                <input
                type='text'
                className='form-control'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    renderTextAreaField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`

        return(
            <div className={className}>
                <textarea
                type='text'
                rows='5'
                className='form-control text-area'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }



    render(){
        
        return(
            <div className='col-md-12 col-sm-12 col-xs-12 signInFormPosition'>
            <div className='signIn_form text-center'>
                <h3 id='signIn_form_header'>Sign In with a Nice Message</h3>
                <form onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='First Name*'
                                name='firstName'
                                component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <Field
                                placeholder='Company Name*'
                                name='companyName'
                                component={this.renderInputField}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                            <Field
                                placeholder='Your job title'
                                name='position'
                                component={this.renderInputField}
                            />
                    </div>
                    <div className='form-group'>
                            <Field
                                placeholder='Write a nice message...'
                                name='message'
                                component={this.renderTextAreaField}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary submit">Submit</button>
                    <Link to='/'><button type='button' className='btn btn-danger'>Cancel </button></Link>
                </form><br/><br/>

                <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> 2017 <br/>Profile Project</span><br /> <br/>

            </div>
            </div>
        )
    }
}

function validate(values){
    const errors={}

    if(!values.firstName){
        errors.firstName = 'Please Enter Your First Name'
    }
    if(!values.companyName){
        errors.companyName = 'Enter Company Name (eg. AB LLC)'
    }
    if(!values.position){
        errors.position='Enter Your Job Title'
    }
    if(!values.message){
        errors.message='Be Nice, Write Something'
    }
    return errors;
}

function mapStateToProps(state){
    return{
        success:state.data
    }
}

export default reduxForm({validate, form:'SignInForm'}) (
    connect(mapStateToProps,{sendMessage})(SignInForm)
)