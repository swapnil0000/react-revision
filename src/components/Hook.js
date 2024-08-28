import React , {Component} from "react"
import ClassComponent from "./ClassComponent";


class LifeCycleMethod extends Component{

    constructor(){
        super()

        console.log("Swapnil Srivastava");
        this.state={
            count:0
        }
        console.log(this.state.count);
    }
    componentDidMount(){
        console.log(this.state.count+1)
    }
    increment(){
         this.setState({
            count:this.state.count=this.state.count+1
         })
    }

 
    render(){
        return(
            <div>
             <h1>Swapnil Srivastava</h1>
             <ClassComponent number={this.state.count}></ClassComponent>
             <button onClick={()=>{this.increment()}}>Add +1</button>
            </div>
        )
    }
}


export default LifeCycleMethod