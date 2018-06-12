import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Index from '../component/index/index';

const Routers =()=>{
    return (
        <Router>
            <Route path='/' component={Index}/>
        </Router>
    );
};
export  default  Routers;
