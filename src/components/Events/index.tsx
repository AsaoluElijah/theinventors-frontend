import './index.scss';

import EventImg1 from '../../images/events/algo-hack.png';
import EventImg2 from '../../images/events/designers-ama.jpg';
import EventImg3 from '../../images/events/townhall.jpeg';

const Events = () => {
	return (
		<div className="section events-section">
			<div className="events-section__container container">
				<div className="heading">
					<div className="title-container">
						<div className="line2"></div>
						<h2 className="section-title">Events</h2>
						<div className="line"></div>
					</div>
					<p>Our past and upcoming events</p>
				</div>
				<div className="events-section__content">
					<div className="event">
						<div className="event__image">
							<img src={EventImg3} alt="" />
						</div>
						<div className="event__info">
							<div className="flex-section">
								<div className="left-side">
									<h3 className="event__name">Townhall Meeting</h3>
									<p className="event__date">23 Nov 2022</p>
								</div>
								<div className="right-side">
									<p className="event__location">Online</p>
								</div>
							</div>
							<a
								href="https://meet.google.com/hut-tdxy-iuy"
								className="event-btn"
							>
								Attend
							</a>
						</div>
					</div>
					<div className="event">
						<div className="event__image">
							<img src={EventImg1} alt="" />
						</div>
						<div className="event__info">
							<div className="flex-section">
								<div className="left-side">
									<h3 className="event__name">Algorithm Hackathon</h3>
									<p className="event__date">27 Nov 2022</p>
								</div>
								<div className="right-side">
									<p className="event__location">Online</p>
								</div>
							</div>
							<a href="#" className="event-btn">
								Attend
							</a>
						</div>
					</div>

					<div className="event">
						<div className="event__image">
							<img src={EventImg2} alt="" />
						</div>
						<div className="event__info">
							<div className="flex-section">
								<div className="left-side">
									<h3 className="event__name">Designers AMA</h3>
									<p className="event__date">24 Nov 2022</p>
								</div>
								<div className="right-side">
									<p className="event__location">Online</p>
								</div>
							</div>
							<a
								href="https://meet.google.com/aih-xnea-bas"
								className="event-btn"
							>
								Attend
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
