import React, { Component } from 'react';
import $ from 'jquery';



class Jumbotron extends Component {

    remove = ()=>{
        // $('.jumbotron').hide();
        $('.close').parent().hide();
    }

   render(){
    return (
        <div className='col-md-12 col-xs-12'>
            <div className = 'banner five'>
                <h3>Welcome to my profile project</h3>
                <p>
                The goal of this website is to advertise my React.js/Redux/Node.js/Full-Stack 
                Web development skills. This is a universal react web app with a fully built 
                API with CRUD functionality. To prevent data loss the delete functionality is 
                not included on this site. The source code is available on my Github account.
                 Please test all the functionality.
                </p>
                <span className='close' onClick={(e)=>this.remove(e)} type='button'>close <i className="fa fa-times" aria-hidden="true"></i> </span>
            </div>
        </div>
    )
   }
}



export default Jumbotron;