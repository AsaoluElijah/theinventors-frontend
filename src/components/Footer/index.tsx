import './index.scss';

import Logo from '../../images/logo.png';
import TwitterIcon from '../../images/twitter-icon.png';
import FacebookIcon from '../../images/facebook-icon.png';
import DiscordIcon from '../../images/discord-icon.png';
import LinkedInIcon from '../../images/linkedin-icon.png';

const Footer = () => {
	return (
		<div className="footer-section">
			<div className="footer-section__container container">
				<div className="footer-section__content">
					<div className="footer-section__logo">
						<img src={Logo} alt="" />
					</div>
					<div className="footer-section__socials">
						<a
							href="https://twitter.com/InventorsComm"
							target="_blank"
							rel="noreferrer"
						>
							<img src={TwitterIcon} alt="" />
						</a>
						<a
							href="https://www.facebook.com/inventorscommunity"
							target="_blank"
							rel="noreferrer"
						>
							<img src={FacebookIcon} alt="" />
						</a>
						<a
							href="https://discord.gg/4Z7QZ9Z"
							target="_blank"
							rel="noreferrer"
						>
							<img src={DiscordIcon} alt="" />
						</a>
						<a
							href="https://www.linkedin.com/company/inventorscommunity"
							target="_blank"
							rel="noreferrer"
						>
							<img src={LinkedInIcon} alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
