import React from 'react';

const FeatureImage = (props) => {
	return (
		<div className="text-center d-flex flex-column mt-2 mx-2">
			<div style={{ border: '2px solid black', borderRadius: '10px' }}>
				<img className="img-fluid" src={props.image} />
			</div>
			<div className="text px-2 pt-2 " style={{ lineHeight: 1 }}>
				{props.text}
			</div>
		</div>
	);
};

export default FeatureImage;
