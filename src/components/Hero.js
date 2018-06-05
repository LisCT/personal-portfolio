import React from 'react';
import heroBubbles from '../helpers/hero-bubbles';

class Hero extends React.Component{

    componentDidMount(){

        heroBubbles(); // hero canvas code

    }
    
    render(){
        return(
            <div className="hero-interactive">
                <canvas id="canvas"></canvas>
            </div>
        )
    }
}

export default Hero;
