import React from 'react';
import RsvpModal from './RsvpModal';

const Banner = () => {
    return (
			<div>
				<div class="row">
					<img class="img-fluid" src={"assets/engagement1.jpg"} alt="Andrew and Vanessa"></img>
				</div>
				<div class="row">
					<div class="fixed-top col col-12">
						<h1>
							Andrew & Vanessa
							<br/>
							Date to be announced
							<br/>
							{/* <button id="rsvp-button" type="button" class="btn btn-primary">
								RSVP
							</button> */}
							<RsvpModal />
						</h1>
    			</div>
				</div>
			</div>
    )
}

export default Banner;