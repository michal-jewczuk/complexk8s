import { React } from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
	return (
		<p>I'm in other page! <Link to="/">Go back home</Link></p>
	);
};

export default OtherPage;
