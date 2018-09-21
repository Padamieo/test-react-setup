import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({ label }) => (
	<Fragment>
		<label>{label}</label>
		<input
			type={label}
		/>
	</Fragment>
);

Input.propTypes = {
	label: PropTypes.string
};

Input.defaultProps = {
	label: ''
};

export default Input;
