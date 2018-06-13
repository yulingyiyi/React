import React,{ Component } from 'react';
import './index.css';

// const SubMenu = Menu.SubMenu;

export default class Index extends Component {
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
                <h1>index</h1>
            </div>
        );
    }
}