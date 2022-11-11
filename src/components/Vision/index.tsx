import './index.scss';
import visionImage from '../../images/vision-img.png';

const Vision = () => {
	return (
		<div className="section vision-section">
			<div className="vision-section__container container">
				<div className="vision-section__image">
					<img src={visionImage} className="vision-img" alt="" />
				</div>
				<div className="vision-section__content">
					<h2 className="section-title">Our Vision</h2>
					<div className="vision-text">
						<p>
							Inventors community is solely concerned about individual
							progression of tech enthusiasts both newbies and professional
							through the medium of mentor and mentees, awareness seminar.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vision;
