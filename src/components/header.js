import React from 'react';
import '.././App.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.maintitle}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

export default Header;