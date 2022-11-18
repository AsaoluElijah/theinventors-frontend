import './index.scss';
import missionImage from '../../images/mission-img.png';

import { motion } from 'framer-motion';

import { sectionVariant, childrenVariant } from '../../utilities/animations';

const Mission = () => {
	return (
		<div className="section mission-section">
			<motion.div
				className="mission-section__container container"
				variants={sectionVariant}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				<motion.div
					className="mission-section__content"
					variants={childrenVariant}
				>
					<div className="title-container">
						<h2 className="section-title">About Us</h2>
						<div className="line"></div>
					</div>
					<div className="mission-text">
						<p>
							We aim at guiding and training students on campus based on the
							areas of technology they are interested in.
						</p>
						<p>
							Our goal is to empower many students to use their technological
							expertise to identify and solve problems in their community.
						</p>
						<p>
							We urge people to "own their learning," which means they should
							have complete control over the instruction and training they get
							from instructors at Inventors.
						</p>
					</div>
				</motion.div>
				<div className="mission-section__image">
					<img src={missionImage} className="mission-img" alt="" />
				</div>
			</motion.div>
		</div>
	);
};

export default Mission;
