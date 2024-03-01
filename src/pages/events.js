// events.js
import React from "react";
import { CRow, CCol, CCard, CCardImage, CCardText, CCardTitle, CCardImageOverlay } from '@coreui/react';
import './neon.css';
import './events.css';
import '@coreui/coreui/dist/css/coreui.min.css';

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
			<CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 2}}>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://t4.ftcdn.net/jpg/02/90/56/89/360_F_290568984_FNoCgHBmnUUvzl2qPBL9G4vtIWb06AGB.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Events</CCardTitle>
						<CCardText>
						<ol>
						<div className='list'>
						<li>Mech Connection</li>
						<li>Design Master</li>
						<li>Business Plan</li>
						<li>TAME Shark Tank</li>
						</div>	
						<div className='list2'>
						<li>Paper Presentation</li>
						<li>Line Follower racing</li>
						<li>Robo Soccer</li>
						<li>F1 Quiz</li>
                        </div>
                        </ol>
                        </CCardText>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Workshops</CCardTitle>
						<CCardText>
						<ol>
						<div className='list'>
						<li>EPC Project Design</li>
						<li>Rapid Prototyping</li>
						<li>Go Kart</li>
						</div>	
						<div className='list2'>
						<li>Robo Studio & <br/>Robotic Jogging/Welding</li>
						<li>Industrial Automation <br/>using PLC</li>
						</div>
						</ol>
						</CCardText>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
                    <CCard>
					<CCardImage orientation="top" src={'https://images.thequint.com/thequint%2F2020-02%2Fbe7cd804-b429-474e-8236-87cbb816b98b%2FMaruti_Futuro_e.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Auto Expo</CCardTitle>
						<CCardText style={{color:'gold', fontSize:'larger', textAlign:'center', paddingTop:'30px'}}>
						Auto Expo is one of the MIT’s premier auto shows. A signature event, that witness the best minds coming
						together on a single platform to showcases all that is best in the automotive world Previous editions of 
						Pistoboltz witnessed some of the lauded automobiles like Rolls royce,Mustang GT,Lexus, and much more
						</CCardText>
					</CCardImageOverlay>
					</CCard>
				</CCol>
			</CRow>
		</div>
	);
};
export default Events;