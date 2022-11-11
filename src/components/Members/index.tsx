import './index.scss';
import member1 from '../../images/member1.png';
import member2 from '../../images/member2.png';
import member3 from '../../images/member3.png';

const Members = () => {
	return (
		<div className="section members-section">
			<div className="members-section__container container">
				<h2 className="section-title">Community Members</h2>
				<div className="members-section__content">
					<div className="member">
						<div className="member__image">
							<img src={member1} alt="" />
						</div>
						<div className="member__info">
							<h3 className="member__name">John Doe</h3>
							<p className="member__role">Founder</p>
						</div>
					</div>
					<div className="member">
						<div className="member__image">
							<img src={member2} alt="" />
						</div>
						<div className="member__info">
							<h3 className="member__name">Jake Doe</h3>
							<p className="member__role">Founder</p>
						</div>
					</div>
					<div className="member">
						<div className="member__image">
							<img src={member3} alt="" />
						</div>
						<div className="member__info">
							<h3 className="member__name">Jane Doe</h3>
							<p className="member__role">Founder</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Members;
