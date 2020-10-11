import React, {Component} from 'react'; 
import axios from 'axios';
import './FormPostToHomePage.css'

export default class FormPostToHomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }
  post =()=>{
      var imageLinkString = document.getElementById("imgLink").value;
      var imageLinkList= imageLinkString.split(",");
      axios.post('https://travel-share-backend.herokuapp.com/api/post',{
        userName:"Son Hoang",
        userId:"5f696dde9ae89d0594a0e83e",
        cap:document.getElementById("cap").value,
        images:imageLinkList,
        date:new Date(),
        Season: document.getElementById("season").value
      }).then(
        res=>{
            console.log(res.data)
        }
      ).catch(
          err=>console.log("err: " +  err)
      )
  }

  render(){
    return (
      <div>
          <br></br>
          <div class="form">
                <div class="top">
                    <span>Tạo bài viết</span>
                    <img src={require('../access/x-png-18.png')} onClick={this.props.hideForm}></img>
                </div>
                <div className="middle">
                    <img src={require('../access/avatar_2009.jpg')}></img>
                    <input type="text" id="cap" placeholder="Bạn đang nghĩ gì ?"></input>
                </div>
                <div className="hr"></div>
                <div className="bottom">
                    <div className="addImg">
                        <img src={require('../access/img.png')}></img>
                        <input id="imgLink" placeholder="Link ảnh"></input>
                    </div>
                    <div className="addTime" id="season">
                        <select className="select" >
                            <option value="volvo">Mùa xuân</option>
                            <option value="saab">Mùa Hạ</option>
                            <option value="vw">Mùa thu</option>
                            <option value="audi" selected>Mùa đông</option>
                        </select>
                    </div>
                    <br className="clear"/>
                    <div className="addLocation">
                    </div>
                    <button className="post" onClick={this.post}>Đăng</button>
                </div>
          </div>
      </div>
    );
  }
}