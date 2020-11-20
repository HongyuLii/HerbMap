import React, { Component } from 'react';
import styled from "styled-components";

const Style = styled.div`
    display: flex;
    color: #888;
    margin-top: 700px;
    margin-left: 20px;
`;

export class Slider extends Component {
    state = { 
        year: "01/01/1900",
        value: 2015
     }

     handleOnChange = (e) => {
        this.setState({value: e.target.value});
        if (this.state.value === 2015) {
            this.setState({year: "01/01/2015"})
        } else if (this.state.value === 2016) {
            this.setState({year: "01/01/2016"})
        } else if (this.state.value === 2017) {
            this.setState({year: "01/01/2017"})
        } else if (this.state.value === 2018) {
            this.setState({year: "01/01/2018"})
        } else if (this.state.value === 2019) {
            this.setState({year: "01/01/2019"})
        } else if (this.state.value === 2020) {
            this.setState({year: "01/01/2020"})
        }
    }


    render() { 
        return ( 
            <Style>
                <input type="range" min={2015} max={2020} value={this.state.value} className="slider" onChange={this.props.handleOnChange(this.props.slider)}/>
                <div className="value">{this.state.value}</div>
            </Style>
         );
    }
}
 
export default Slider;