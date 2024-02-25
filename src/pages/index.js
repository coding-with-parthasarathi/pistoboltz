// pages/index.js
import React, { Component } from "react";
import Countdown from "./countdown.js";
import './index.css';
class Home extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
		<div className='home'
		style={{
			display: 'flex',
			flexDirection: 'column',
			paddingBlockStart: '50px',
			alignItems: 'center',
			color: 'white'
		}}
		>
			<h1 id='title'>THE ASSOCIATION OF MECHANICAL ENGINEERS
     <p></p>
     <center><i>proudly presents</i></center></h1>
     <p></p>
	 <div className='Blazing'>PISTOBOLTZ'24</div>
                <h3 className="title">
          <i>Starts in</i>
        </h3>
        <Countdown date={`${year}-03-16T10:00:00`} />
      </div>
    );
  }
}
export default Home;