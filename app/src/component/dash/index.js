import React,{ Component } from 'react';
import './index.css';

export default class Dash extends Component {
    state={
        collapsed : false
    };
    constructor(props){
        super(props);
        console.log('index');
    }
    toggleCollapsed= ()=>{
        this.setState({
            collapsed:!this.state.collapsed
        });
    };
    render() {
        console.log('index');
        return (
            <div style={{ width: 256 }}>
             <h1> Dash</h1>
            </div>
        );
    }
}