import React, {Component} from 'react'; 
import axios from 'axios';

export default class Read extends Component{
  constructor(props){
    super(props);
    this.state = {
      chapter:[],
    }
  }

  componentDidMount() {
    // axios.get(`https://betruyen2.herokuapp.com/api/chapter/${this.props.match.params.chapterid}`, {
    //  })
    //   .then(res => {
    //   })
    //   .catch(error => console.log(error));

    axios.get('https://travel-share-backend.herokuapp.com/api/user')
    .then(res=>{
        console.log(res.data);
        console.log("it work")
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
      </div>
    );
  }
}