import React from 'react';

const JoinUs = () => {
	return (
		<div className="section joinus_section">
			<div className="joinus_section__container container">
				<div className="heading">
					<h2>Love to join the community?</h2>
				</div>
				<div className="joinus_section__form">
					<form action="">
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;
