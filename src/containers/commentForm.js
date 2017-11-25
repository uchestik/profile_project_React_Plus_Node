import React,{Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field } from 'redux-form';
import $ from 'jquery';
import { PostComment, addLikes } from '../actions';

class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state={
            color:'#45a247'
        }
    }

    closeComment=(event)=>{
        $('.close-btn').click(function(){
            $(this).parents('.comment-box').slideUp();
        });
    }

    commentToggle=()=>{
        $('.comment-toggle').click(function(){
            $(this).parents('.interactive-functions').siblings('.comment-box').slideDown();
        });
    }

    renderInputField(field){
        const className=`field-input ${field.meta.touched && field.meta.error ? 'has-error':'' }`

        return(
            <div className={className}>
                <input 
                className='form-control'
                type='text'
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
        const className=`field-input ${field.meta.touched && field.meta.error ? 'has-error':'' }`

        return(
            <div className={className}>
                <textarea 
                className='form-control text-area'
                rows='3'
                type='text'
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className='error'>
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
            
        )
    }

    addLike = ()=>{
        const value = Number(this.props.likes) + 1;
        this.props.addLikes(value,this.props.id,()=>{
            this.setState({
                color:'red'
            });
            setTimeout(()=>{
                this.setState({
                    color:'#45a247'
                })
            },2000)
        });
    }
    
    submit(values){
        this.props.PostComment(values,this.props.id,()=>{
            this.props.reset();
            $('.close-btn').parents('.comment-box').slideUp();
            // this.props.function;
        })
    }
    
    
    
    render(){
        return(
            <div>

            <div className='interactive-functions'>
                <ul>
                    <li className='function comment-toggle' onClick={this.commentToggle}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Comment</li>
                    <li className='add_likes' onClick={()=>this.addLike()}><span style={{color:this.state.color}}><i className="fa fa-heart" aria-hidden="true"></i></span> Like</li>
                </ul>
            </div>
            <div className='comment-box'>
                <form onSubmit={this.props.handleSubmit((event)=>this.submit(event))}>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <Field
                            name='firstName'
                            placeholder='First Name*'
                            component={this.renderInputField}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <Field
                            name='companyName'
                            placeholder='Company Name*'
                            component={this.renderInputField}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                            <Field
                            name='comment'
                            placeholder='write a comment...'
                            component={this.renderTextAreaField}
                            />
                    </div>
                    <button type='submit' className='btn btn-primary submit'>Post Comment</button>
                    <button type='button' className='btn btn-danger close-btn'onClick={this.closeComment}>Cancel</button>
                </form>
            </div>

            </div>
        )
    }

}


function validate(values){
    const errors={}

    if(!values.firstName){
        errors.firstName='Required'
    }
    if(!values.companyName){
        errors.companyName='Required'
    }
    if(!values.comment){
        errors.comment='Required'
    }

    return errors;
}


function mapStateToProps(state){
    return{
        success:state.data
    }
}

export default reduxForm({
    validate
    // form:'commentForm'
})(
    connect(mapStateToProps,{PostComment, addLikes})(CommentForm)
) 