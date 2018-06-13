import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Index from '../component/index/index';
import SliderMenu from '../component/common/sliderMenu';

const Routers =()=>{
    return (
        <BrowserRouter>
            <Route path='/' component={SliderMenu}>
               <Route path='/index' component={Index}/>
            </Route>
        </BrowserRouter>
    );
};
export  default  Routers;
