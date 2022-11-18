import './index.scss';

import lead1 from '../../images/lead1.png';
import lead2 from '../../images/lead2.png';
import lead3 from '../../images/lead3.png';
import lead4 from '../../images/lead4.png';

import LeadGitHubIcon from '../../images/github-lead-icon.png';
import LeadLinkedInIcon from '../../images/linkedin-lead-icon.png';
import LeadTwitterIcon from '../../images/twitter-lead-icon.png';

const Leads = () => {
	return (
		<div className="section leads-section">
			<div className="leads-section__container container">
				<div className="title-container">
					<div className="line2"></div>
					<h2 className="section-title">Community Leads</h2>
					<div className="line"></div>
				</div>
				<div className="leads-section__content">
					<div className="lead">
						<div className="lead__image">
							<img src={lead1} alt="" />
							<div className="icons">
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadGitHubIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadTwitterIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadLinkedInIcon} alt="" />
								</a>
							</div>
						</div>
						<div className="lead__info">
							<h3 className="lead__name">John Doe</h3>
							<p className="lead__role">Founder</p>
						</div>
					</div>
					<div className="lead">
						<div className="lead__image">
							<img src={lead2} alt="" />
							<div className="icons">
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadGitHubIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadTwitterIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadLinkedInIcon} alt="" />
								</a>
							</div>
						</div>
						<div className="lead__info">
							<h3 className="lead__name">John Doe</h3>
							<p className="lead__role">Founder</p>
						</div>
					</div>
					<div className="lead">
						<div className="lead__image">
							<img src={lead3} alt="" />
							<div className="icons">
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadGitHubIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadTwitterIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadLinkedInIcon} alt="" />
								</a>
							</div>
						</div>
						<div className="lead__info">
							<h3 className="lead__name">John Doe</h3>
							<p className="lead__role">Founder</p>
						</div>
					</div>
					<div className="lead">
						<div className="lead__image">
							<img src={lead4} alt="" />
							<div className="icons">
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadGitHubIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadTwitterIcon} alt="" />
								</a>
								<a
									href="https://www.linkedin.com/in/robert-lee-1b1b2b1b1/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={LeadLinkedInIcon} alt="" />
								</a>
							</div>
						</div>
						<div className="lead__info">
							<h3 className="lead__name">John Doe</h3>
							<p className="lead__role">Founder</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Leads;
