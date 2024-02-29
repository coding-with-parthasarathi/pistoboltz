// pages/team.js
import './neon.css';
import React from "react";
import './team.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel,CCarouselItem,CRow,CCol,CCard,CCardImage,CCardBody,CCardTitle,CCardText} from '@coreui/react';
import './team.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import agas from '../assets/agas.png';
import arvind from '../assets/arvind.png';
import bala from '../assets/bala.png';
import dharsan from '../assets/dharsan.png';
import krishna from '../assets/krishna.png';
import ashik from '../assets/ashik.png';
import jt from '../assets/jtsec.png';
import pranav from '../assets/pranav.png';
import akash from '../assets/akash.png';
import tharun from '../assets/tharun.png';
import sabari from '../assets/sabari.png';
import kamesh from '../assets/kamesh.png';
import lakshmi from '../assets/Lakshmi.png';
import vignesh from '../assets/vignesh.png';
const Teams = () => {
	return (
		<div className="team"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "centre",
				alignItems: "centre"
			}}
		>
			<div class="logo"><b><span>Te</span><span>am</span></b></div>
			<CCarousel controls indicators className='layout'>
			<CCarouselItem>
				<center>
				<CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}  className='container'>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image' orientation="top" src={agas} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/agastheeswar/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>AGASTHEESWAR B</CCardTitle>
							<CCardText>CHAIRMAN</CCardText>
							agastheeswaredu@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={pranav} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/pranav-dharshan-570856238/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>PRANAV DHARSHAN B</CCardTitle>
							<CCardText>VICE CHAIRMAN</CCardText>
							pranavdharshan.b@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={bala} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/balaji-k-9220a7206/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>BALAJI K</CCardTitle>
							<CCardText>TREASURER</CCardText>
							balaji.k.s55556@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
				</CRow>
				</center>
			</CCarouselItem>
			<CCarouselItem>
			<center>
				<CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}  className='container'>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image' orientation="top" src={tharun} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/tharunr1102/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>THARUN R</CCardTitle>
							<CCardText>PROGRAM SECRETARY</CCardText>
							tharunjheri1102@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={arvind} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/arvindxyogesh/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>ARVIND YOGESH S</CCardTitle>
							<CCardText>SPONSOR HEAD</CCardText>
							sayesh03@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={ashik} />
						<CCardBody>
							<CCardTitle>ASHIK ROSHAN S</CCardTitle>
							<CCardText>EVENT COORDINATOR</CCardText>
							sashikroshan2003@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
				</CRow>
				</center>
			</CCarouselItem>
			<CCarouselItem>
			<center>
				<CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}  className='container'>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image' orientation="top" src={dharsan} />
						<CCardBody>
						<CCardTitle><a href="https://www.linkedin.com/in/dharsan-r-92b74524b/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>DHARSAN R</CCardTitle>
							<CCardText>EVENT COORDINATOR</CCardText>
							dharsan2211@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={krishna} />
						<CCardBody>
							<CCardTitle>THARUN KRISHNA S</CCardTitle>
							<CCardText>EVENT COORDINATOR</CCardText>
							tharunkrishna79@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={akash} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/akash-suresh-82a920247/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>AKASH S</CCardTitle>
							<CCardText>EVENT COORDINATOR</CCardText>
							akashsuresh1976@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
				</CRow>
				</center>
			</CCarouselItem>
			<CCarouselItem>
			<center>
				<CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}  className='container'>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image' orientation="top" src={sabari} />
						<CCardBody>
						<CCardTitle><a href="https://www.linkedin.com/in/sabari-vivek-kumar-79b81423a/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>S SABARI VIVEK KUMAR</CCardTitle>
							<CCardText>EVENT COORDINATOR</CCardText>
							sabarivivekkumar69@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={kamesh} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/kamesh-arivalagan-5a8717231/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>KAMESH A</CCardTitle>
							<CCardText>EVENT COORDINATOR</CCardText>
							kameshari2002@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={lakshmi} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/lakshmi-sree-harini-s-3442ab262/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>LAKSHMI SREE HARINI S</CCardTitle>
							<CCardText>GENERAL SECRETARY</CCardText>
							sree23.pv@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
				</CRow>
				</center>
			</CCarouselItem>
			<CCarouselItem>
			<center>
				<CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}  className='container'>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image' orientation="top" src={vignesh} />
						<CCardBody>
						<CCardTitle>VIGNESWARAN S</CCardTitle>
							<CCardText>ASSISTANT EVENT COORDINATOR</CCardText>
							mailforvignesh10@gmail.com
						</CCardBody>
						</CCard>
					</CCol>
					<CCol xs>
						<CCard className="h-80">
						<CCardImage className='image'  orientation="top" src={jt} />
						<CCardBody>
							<CCardTitle><a href="https://www.linkedin.com/in/sivani-gandupilli-1134a0295/" target='_blank' rel='noreferrer'>  <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>SIVANI GANDUPILLI</CCardTitle>
							<CCardText>JOINT SECRETARY</CCardText>
						</CCardBody>
						</CCard>
					</CCol>
				</CRow>
				</center>	
			</CCarouselItem>
			</CCarousel>
		</div>
	);
};

export default Teams;
