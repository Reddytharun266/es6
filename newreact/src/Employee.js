import React, { Component } from 'react'

export default class Employee extends Component {

    constructor(props){
        super(props)

        this.state ={
            name:"hemanth",
            employees:[
                {name:"akhil"},
                {name:"tarun"}
            ]
        }
    }

    render() {

        setTimeout(() =>
            this.setState({name:"kalyan"})
        ,3000 )

        
        return (
            <div>
               <h1>{this.state.employees[1].name}</h1> 
               <h2>{this.state.name}</h2>
            </div>
        )
    }
}
