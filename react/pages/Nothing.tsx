import React from 'react'

export const Nothing = (props: any) => {
	return(
		<div id="reset">
			<div className="container">
				<div className="row">
					<h2 style={{ fontSize: 180, textAlign: 'center', margin: '80px 0', lineGeight: 160 }}>404</h2>

					<h3 style={{ textAlign: 'center'}}>
						Oops! Nothing here to see!
					</h3>
				</div>
			</div>
		</div>
	);
}