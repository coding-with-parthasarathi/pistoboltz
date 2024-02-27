// pages/signup.js
import React from "react";
import './neon.css';
const SignUp = () => {
	return (
		<div className="signup"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "centre",
				alignItems: "centre"
			}}
		>
			<div class="logo"><b><span>Sign</span><span> Up</span></b></div>
			<iframe
				title="Google Form"
				src="https://docs.google.com/forms/d/e/1FAIpQLSc3zESJSABkjQszE6G8kbf_zU1ZAP3-ZV_A-nSoDFLprFsrmw/viewform"
				width="640"
				height="800"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Loading...
		      </iframe>
		</div>
	);
};

export default SignUp;
