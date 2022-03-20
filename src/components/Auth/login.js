import React, {Component} from 'react';
import '../../App.css';
import avtar from '../img/avatar.svg';
import bg from '../img/bg.svg';
import wave from '../img/wave.png';
import Swal from 'sweetalert2';

// import { v4 as uuidv4 } from 'uuid';
// const axios = require('axios');

class login extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //      showDataPermission:false,
    //       DisplayData:[],
    //       options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}],
    //       reporting_group:[
    //         {
    //         name:'Tempered Glass'
    //       },
    //       {
    //         name:'Battery'
    //       },
    //       {
    //         name:'Touch Glass'
    //       },
    //       {
    //         name:'Body %26 Housing'
    //       },
    //       {
    //         name:'Display %26 Combo'
    //       },
    //       {
    //         name:'Flex %26 Spares'
    //       },
    //       {
    //         name:'Mobile Accessories'
    //       },
    //       {
    //         name:'Tools %26 Machinery'
    //       },
    //     ],
    //     // filterBrand:'',
    //   };
        
    // }
    Login = (e) =>{
        e.preventDefault();
        var getuser= document.getElementById("userID").value;
        var getpassword = document.getElementById("password").value;
        var userid=getuser.split(' ').join('');
        var password=getpassword.split(' ').join('');
        console.log("userid", userid, "password", password)
        if(userid && password){
                if(userid==="user" && password==="password")
                {
                  var data={
                    credential:`${userid}_${password}`
                  }
                  localStorage.setItem("anotonycredential",`${userid}_${password}`)

                  this.props.history.push({
                    pathname:'/calc',
                    data:{data},
                  })
                }
                else{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'your user id and password is not match',
                    // footer: '<a href>Why do I have this issue?</a>'
                  })
                }
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill your field',
                // footer: '<a href>Why do I have this issue?</a>'
              })
        }
    }
    render(){
        return(
          <div>
            <div class="container">
                <div class="login-content">
                    <form  onSubmit={this.Login}>
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                                <input placeholder="Username" id="userID" type="text" class="input"/>
                        </div>
                        </div>
                        <div class="input-div pass">
                        <div class="i"> 
                                <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                                <input placeholder="Password" id="password" type="password" class="input"/>
                        </div>
                        </div>
                        <input type="submit" class="btn" value="Login"/>
                    </form>
                </div>
            </div>
          </div>

        )
    }
}
export default login
