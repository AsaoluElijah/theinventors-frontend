import './index.scss';

import partner1 from '../../images/gdsc-logo.png';

const Partners = () => {
	return (
		<div className="section partners-section">
			<div className="partners-section__container container">
				<div className="title-container">
					<div className="line2"></div>
					<h2 className="section-title">Our Partners</h2>
					<div className="line"></div>
				</div>
				<div className="partners-section__content">
					<p>
						Inventors community has always been moving alongside some dedicated
						partner's that share our vision and goal like
					</p>
					<div className="partner">
						<div className="partner__image">
							<img src={partner1} alt="" />
						</div>
						<div className="partner__image">
							<img src={partner1} alt="" />
						</div>
						<div className="partner__image">
							<img src={partner1} alt="" />
						</div>
						<div className="partner__image">
							<img src={partner1} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
