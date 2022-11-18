import './index.scss';
import visionImage from '../../images/vision-img.png';

import { motion } from 'framer-motion';

import { sectionVariant, childrenVariant } from '../../utilities/animations';

const Vision = () => {
	return (
		<div className="section vision-section">
			<motion.div
				className="vision-section__container container"
				variants={sectionVariant}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				<div className="vision-section__image">
					<img src={visionImage} className="vision-img" alt="" />
				</div>
				<motion.div
					className="vision-section__content"
					variants={childrenVariant}
				>
					<div className="title-container">
						<h2 className="section-title">Our Vision</h2>
						<div className="line"></div>
					</div>
					<div className="vision-text">
						<p>
							Inventors community is solely concerned about individual
							progression of tech enthusiasts both newbies and professional
							through the medium of mentor and mentees, awareness seminar.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Vision;
