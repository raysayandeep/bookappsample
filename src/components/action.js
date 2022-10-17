import React from 'react';
import '.././App.css';

class Action extends React.Component{
    ChooseBook(){
        console.log('Book Chosen')
    }
    render(){
        return(
            <div>
                <button onClick={this.ChooseBook}>Choose Book</button>
            </div>
        )
    }
}

export default Action;