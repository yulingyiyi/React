import React from 'react';
import {Route} from 'react-router-dom';
import Dash from '../component/dash/index';
import User from '../component/user/index';

const Routers =()=> {
 
        return (
            <div>
                <Route path='/dash' component={Dash}/>
                <Route path='/user' component={User}/>
            </div>
              );
    
};
export  default  Routers;
