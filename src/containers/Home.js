import React, {Component} from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSignIn } from '../actions';

import Jumbotron from '../components/home_components/jumbotron';
import SideBar from '../components/home_components/sideBar';
import Messages from '../components/signInMessages';
import PostLinks from '../components/home_components/posting_links';
import Search from '../components/search';




class Home extends Component{

    componentDidMount(){
        this.props.getSignIn();
    }

    render(){
        return(
            <div className='container'>
                <Jumbotron />
                <Search />
                <div className='row section1'>
                    <div className='col-md-3 col-sm-3 col-xs-12'>
                        <SideBar />
                    </div>
                    <div className='col-md-9 col-sm-12 col-xs-12'>
                        <PostLinks />
                        <Messages function={this.props.getSignIn()} signInMessages={this.props.signIn} commentPostSuccess={this.props.postedComment}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        signIn:state.signIn,
        postedComment:state.commentPost
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getSignIn}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);