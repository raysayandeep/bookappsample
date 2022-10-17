import React from 'react';
import '.././App.css';

class Option extends React.Component{
    render(){
        return(
            <div>
                <input type='radio' name="booklist" value={this.props.optiontext}/>
                <label htmlFor={this.props.optiontext}>{this.props.optiontext}</label>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                {
                this.props.booklist.map((book) => {
                    return <Option key={book} optiontext={book} />
                })}
            </div>
        )
    }
}

export default Options;