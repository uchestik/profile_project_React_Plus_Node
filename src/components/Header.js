import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';




class Header extends Component {

    toggleHeader=()=>{
        $('.menu-btn').parents('.leftNavSection').siblings('.rightNavSection').slideToggle();
    }

    render(){
        return(
            <div>
                <nav className='topMenu'>
                    <div className='container'>
                        <ul className='navbar-left leftNavSection'>
                            <div className='row'>
                                <div className='col-md-11 col-sm-11 col-xs-9'>
                                    <li><Link to={'/'} className='header-link'>Uchenna Nwankpa</Link></li>
                                </div>
                                <div className='col-md-1 col-sm-1 col-xs-3'>
                                    <span className='menu-btn pull-right' onClick={this.toggleHeader}><i className="fa fa-bars" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </ul>
    
                        <ul className='rightNavSection'>
                            <li className='clearList'><a href={'https://www.linkedin.com/in/uchenna-nwankpa-213b64145/'}>Professional Profile</a></li>
                            <li className='clearList'><a href={'https://github.com/uchestik'}>Github</a></li>
                            <li className='clearList'><a href={'https://www.facebook.com/profile.php?id=100010728912872'}>Facebook</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;