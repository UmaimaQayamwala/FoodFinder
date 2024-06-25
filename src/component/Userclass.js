// it is named as user class becoz we are gonna use class based component here
import React from "react"
class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // count:0,
            userinfo:{
                name:"dummy",
                location:"default",
                avatar_url:"aaa",
            }
           
        };

    }

  async componentDidMount(){
    //  apicalls
    const data = await fetch("https://api.github.com/users/umaimaqayamwala")
    const json= await data.json();

    console.log(json);

    this.setState({
        userinfo:json,
    })
  }



    render(){
        const{name,location,avatar_url}=this.state.userinfo;
        const {count}=this.state;
        return(
            <div className="user-card">



            {/* <h1>Count:{count}</h1> */}
             {/* <button onClick={()=>{
                this.setState({
          count:this.state.count+1,
                })
            }}>count increase</button> */}


            <h2>Name:{name}</h2>
            <img src={avatar_url}></img>
            <h2>Location:{location}</h2>
            <h3>Gmail2:</h3>
             </div>
        )
    }
}
export default Userclass;