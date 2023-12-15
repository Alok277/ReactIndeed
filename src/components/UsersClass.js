import React from "react";
import UserContext from "../utils/UserContext";
class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userInfo:{
        name:'Sunny',
        location:'Ballia',
      }
    };
  }

  async componentDidMount(){
    const data=await fetch('https://api.github.com/users/Alok277');
    const jsonData=await data.json();
   
    this.setState({
      userInfo:jsonData
    })
  }

  componentDidUpdate(){
    console.log('Update is called')
  }

  componentWillUnmount (){
    console.log("Unmount is called")
  }
  render() {
    const { name, location ,login ,avatar_url } = this.state.userInfo;
    return (
      <div className="about-card bg-gray-100 rounded-lg w-52">
        <img className="rounded-lg" src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>Contact:{login}</h2>
        <UserContext.Consumer>
          {({ userLogin })=><h2>{userLogin}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UsersClass;





/***
 * --Mounting Phase--
 * 
 *   Constructor is called (dummy data)
 *   Render (dummy data)
 *          <HTML dummy data></HTML>
 *   Component Did Mount
 *          <Api Call></Api>
 *          <This.setState> State Variable is updated
 *   
 * 
 *   ---Update
 *       render (APi data)
 *       <Html (new API data)></Html>
 *     Component Did Update
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  */ 
