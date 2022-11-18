import './index.scss';
import member1 from '../../images/member1.png';
import member2 from '../../images/member2.png';
import member3 from '../../images/member3.png';

import { motion } from 'framer-motion';

import { sectionVariant, childrenVariant } from '../../utilities/animations';

const Members = () => {
	return (
		<div className="section members-section">
			<motion.div
				className="members-section__container container"
				variants={sectionVariant}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				<div className="title-container">
					<div className="line2"></div>
					<h2 className="section-title">Community Members</h2>
					<div className="line"></div>
				</div>
				<div className="members-section__content">
					<motion.div className="member" variants={childrenVariant}>
						<div className="member__image">
							<img src={member1} alt="" />
						</div>
						<div className="member__info">
							<h3 className="member__name">John Doe</h3>
							<p className="member__role">Founder</p>
						</div>
					</motion.div>
					<motion.div className="member" variants={childrenVariant}>
						<div className="member__image">
							<img src={member2} alt="" />
						</div>
						<div className="member__info">
							<h3 className="member__name">Jake Doe</h3>
							<p className="member__role">Founder</p>
						</div>
					</motion.div>
					<motion.div className="member" variants={childrenVariant}>
						<div className="member__image">
							<img src={member3} alt="" />
						</div>
						<div className="member__info">
							<h3 className="member__name">Jane Doe</h3>
							<p className="member__role">Founder</p>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Members;
