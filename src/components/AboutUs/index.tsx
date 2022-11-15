import './index.scss';
import image1 from '../../images/aboutus-img1.png';
import image2 from '../../images/aboutus-img2.png';
import image3 from '../../images/aboutus-img3.png';
import image4 from '../../images/aboutus-img4.png';

import { motion } from 'framer-motion';

import { sectionVariant, childrenVariant } from '../../utilities/animations';

const AboutUs = () => {
	return (
		<section className="aboutus-section section">
			<motion.div
				className="aboutus-section__container container"
				variants={sectionVariant}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				<motion.div className="aboutus-images">
					<div className="image-row">
						<img src={image1} className="about-img wide1" alt="" />
						<img src={image2} className="about-img wide2" alt="" />
					</div>
					<div className="image-row">
						<img src={image3} className="about-img wide2" alt="" />
						<img src={image4} className="about-img wide1" alt="" />
					</div>
				</motion.div>
				<motion.div className="aboutus-content" variants={childrenVariant}>
					<div className="title-container">
						<h2 className="section-title">About Us</h2>
						<div className="line"></div>
					</div>
					<div className="aboutus-text">
						<p>
							Inventors is a community for developers, designers and tech
							enthusiasts who are newbies and experts. It was founded by
							innovative and motivated individuals with the goal of exposing
							campus students to various tech fields.
						</p>
						<p>
							Inventors community is a congregation of developers, designers and
							writers both newbies and experts alike. It aims at equipping every
							tech enthusiast with the (technical know how) of forging one's
							path in the tech world.{' '}
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default AboutUs;
