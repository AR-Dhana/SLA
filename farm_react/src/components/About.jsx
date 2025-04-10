import React from "react";

export default class About extends React.Component
{
    //statefull
    constructor(props)
    {
       super(props);
       this.state = { input: "enter your name" };
   
       this.handleChange = this.handleChange.bind(this);
     }
   
     handleChange(e) {
       this.setState({ input: e.target.value });
     }
   
     render() {
       return (
         <input
           type="text"
           value={this.state.input}
           onChange={this.handleChange}
         />
       );
     }

   
}