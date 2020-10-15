import React, {Component} from 'react'; 
import axios from 'axios';
import FormPostToHomePage from './FormPostToHomePage';
import Navbar from './Navbar';
import FormSignup from './FormSignUp';
import './Home.css'

export default class Read extends Component{
  constructor(props){
    super(props);
    this.state = {
      chapter:[],
      showForm:false
    }
  }
  showFormPostToHomePage=()=>{
      document.getElementById("FormPostToHomePages").style.display="block";
  }
  hideFormPostToHomePage=()=>{
    document.getElementById("FormPostToHomePages").style.display="none";
}
  componentDidMount(){
    axios.get('https://travel-share-backend.herokuapp.com/api/user')
    .then(res=>{
    })
    .catch(error => console.log(error));
  }
  
  render(){
    var image;
    if(this.state.chapter!=0){
        image=this.state.chapter.imageLink.map((link)=>(
            <img className="img" src={link}></img>
         ))
    }
    return (
      <div>
        <Navbar showForm={this.showFormPostToHomePage} ></Navbar>
        <FormSignup showForm={this.showFormPostToHomePage} ></FormSignup>
        <div id="FormPostToHomePages">
          <FormPostToHomePage hideForm={this.hideFormPostToHomePage}></FormPostToHomePage>
        </div>
      </div>
    );
  }
}