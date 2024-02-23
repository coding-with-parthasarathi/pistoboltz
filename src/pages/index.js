// pages/index.js
import './index.css';
import React from 'react';
const Home = () => {
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
	</div>
);
};
export default Home;