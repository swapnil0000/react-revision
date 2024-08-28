import React, { Component } from 'react'

class ClassComponent extends Component {
     componentDidUpdate(prevprops,prevState){
        if(prevprops.number!==this.props.number)
        {
            console.log(prevprops.number,"Component Updated")
        }
     }
  render() {
    return (
      <div>{this.props.number}</div>
    )
  }
}
export default ClassComponent