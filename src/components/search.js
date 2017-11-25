import React,{Component} from 'react';
import $ from 'jquery';

class Search extends Component{
    constructor(props){
        super(props);

        this.state={
            searchEntry:'',
            width:window.innerWidth
        }
    }

    resize=()=>{
        window.addEventListener('resize', ()=>{
            if($(window).width() < 990){
                    $('.rightNavSection').hide();
                    $('.onlyMobile').show();
            } else if($(window).width() > 990){
                    $('.rightNavSection').show();
                    $('.onlyMobile').hide();
                    $('.sideBar').show();
            }
        })
    }
    size= ()=>{
        if($(window).width() < 990){
            $('.rightNavSection').hide();
            $('.onlyMobile').show();
        } else if($(window).width() > 990){
                $('.rightNavSection').show();
                $('.onlyMobile').hide();
                $('.sideBar').show();
        }
    }

    componentDidMount(){
        this.size();
        this.resize();
    }
    componentWillMount(){
        this.size();
        this.resize();
    }
    

    changeInput = (event)=>{
        this.setState({
            searchEntry:event.target.value
        });
        this.searchSignIn();
    }

    searchSignIn=()=>{
        var searchbar = document.getElementById('searchbar');
        var message = document.getElementsByClassName('message_box');
    
        for (var i= 0; i<message.length; i++){
    
            if( (message[i].children[1].innerHTML.toUpperCase().search(searchbar.value.toUpperCase()) > -1) || 
            (message[i].children[0].children[0].innerHTML.toUpperCase().search(searchbar.value.toUpperCase()) > -1) ||
            (message[i].children[0].children[1].innerHTML.toUpperCase().search(searchbar.value.toUpperCase()) > -1)){
                message[i].style.display='block';
            } else if( (message[i].children[1].innerHTML.toUpperCase().search(searchbar.value.toUpperCase()) === -1) &&
            (message[i].children[0].children[0].innerHTML.toUpperCase().search(searchbar.value.toUpperCase()) === -1) &&
            (message[i].children[0].children[1].innerHTML.toUpperCase().search(searchbar.value.toUpperCase()) === -1)){
                message[i].style.display='none';
            }
        }
      
    }

    toggleSideBar=()=>{
        $('.sideBar').toggle();
    }

    render(){
        return(
            <div>
                <div className='col-md-12 col-sm-12 col-xs-12 searchbox'>
                    <div className='search-container input-group'>
                        <div className='input-group-addon onlyMobile' onClick={this.toggleSideBar}><i className="fa fa-bars" aria-hidden="true"></i></div>
                        <input type='text' className='form-control search' 
                        placeholder='Search using keywords...' id='searchbar' 
                        value={this.state.searchEntry}
                        onChange={this.changeInput}/>
                        <div className='input-group-addon'><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;