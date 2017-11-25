import React from 'react';

const SideBar = ()=>{
    
    return(
        <div>
            <div className='sideBar text-center'>
                <div className='bar'>   
                    <img height='120' width="120" src='https://farm5.staticflickr.com/4494/24225874318_526ffd334e_k.jpg' />
                </div>
                <div className='bar'>
                    <span className='bold'>Uchenna Nwankpa</span><br/>
                    <span className='thin'>React.js|Node.js|Full-Stack Web Developer</span>
                </div>
                <div className='bar'>
                    <span className='bold'>Location</span><br/>
                    <span className='thin'>Houston, Texas.</span>
                </div>
                <div className='bar'>
                    <span className='bold'>Job Status</span><br/>
                    <span className='thin'>Seeking New Opportunities</span>
                </div>
                <div className='bar'>
                    <span className='bold'>Career Level</span><br/>
                    <span className='thin'>Mid-Level</span>
                </div>
                <div className='bar'>
                    <span className='bold'>Visa Sponsorship Requirements?</span><br/>
                    <span className='thin'>None</span>
                </div>
                <div className='sidebar-social-media text-center'>
                <ul>
                    <li><a href='https://www.facebook.com/profile.php?id=100010728912872'><i  className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/uchenna-nwankpa-213b64145'><i  className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href='https://twitter.com/uchenna_nwankpa'><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                </ul>
                </div>
                <div  className='sidebar-credit text-center'>
                Website built by Uchenna 'Sam' Nwankpa <br/><br/>
                <span  className='copyright'>Copyright <i  className="fa fa-copyright" aria-hidden="true"></i> 2017 <br/>Profile Project</span>
                </div>
                
            </div>
        </div>
    )
}

export default SideBar;