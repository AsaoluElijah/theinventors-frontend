import './index.scss';
import missionImage from '../../images/mission-img.png';

const Mission = () => {
	return (
		<div className="section mission-section">
			<div className="mission-section__container container">
				<div className="mission-section__content">
					<h2 className="section-title">Our Mission</h2>
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
				</div>
				<div className="mission-section__image">
					<img src={missionImage} className="mission-img" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Mission;
