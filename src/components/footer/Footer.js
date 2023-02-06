import React from 'react'
import FooterLogo from '../../assets/images/logo.png'
import 'font-awesome/css/font-awesome.min.css';
import './_footer.scss'


const Footer = () => {
    return (

        <footer className="site-footer">
				<div className="container">
					 <img src={FooterLogo} height={'100px'} width={'100px'} alt="Logo" />

					<address>
						<p>Islamabad <br />Pakistan<br /><br />Contact: +923322449696
						</p>
					</address>

					<div className="social-links">
						
						<a href="https://www.linkedin.com/in/muhammad-hamza-aslam-7a1850178/"><i className="fa fa-linkedin"></i></a>
						<a href="mailto:hamzaaslam554433@gmail.com"><i className="fa fa-google"></i></a>
						<a href="https://www.artstation.com/hamzaaslam9"><i className="fa-solid fa-camera"></i></a>

					</div>

					<p className="copy">This site is developed using ReactJS by Hamza Aslam from the original template of Themezy</p>
				</div>
			</footer>
    )
}

export default Footer