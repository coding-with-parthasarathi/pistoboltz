// pages/events.js
import { CRow,CCol,CCard,CCardImage,CCardTitle, CCardImageOverlay} from '@coreui/react';
import './neon.css';
import './events.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import React from "react";
const Events = () => {
	return (
		<div className='events'
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "centre",
				alignItems: "centre"
			}}
		>
			<div class="logo"><b><span>Events</span> & <span>Workshops</span></b></div>
			<CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 2 }}>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://i.ytimg.com/vi/O6t3JvdIhIw/maxresdefault.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Technical Events</CCardTitle>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://swall.teahub.io/photos/small/130-1309247_dark-background-abstract-hd.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Non-technical Events</CCardTitle>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://png.pngtree.com/background/20230612/original/pngtree-an-old-workshop-with-woodworking-tools-in-it-picture-image_3175408.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Workshops</CCardTitle>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://images.thequint.com/thequint%2F2020-02%2Fbe7cd804-b429-474e-8236-87cbb816b98b%2FMaruti_Futuro_e.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Auto Expo</CCardTitle>
					</CCardImageOverlay>
					</CCard>
				</CCol>
			</CRow>
		</div>
	);
};

export default Events;
