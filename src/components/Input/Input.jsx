import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

/*
const Input = ({ label, value, onChange, type, name }) => (
	<Fragment>
		<label>{label}</label>
		<input
			type={type}
			name={name}
			value={value}
			onChange={ this.onChange}
		/>
	</Fragment>
);

Input.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	name: PropTypes.string,
};

Input.defaultProps = {
	label: '',
	value: '',
	onChange: null,
	type: 'text',
	name: '',
};
*/

export default class Input extends Component {
	static propTypes = {
		value: PropTypes.string,
		setValue: PropTypes.func.isRequired,
		label: PropTypes.string,
		type: PropTypes.string,
		name: PropTypes.string,
	};

	static defaultProps = {
		label: '',
		type: 'text',
		name: '',
	};

	changeAction = (event) => {
		this.props.setValue(event);
	}

	render() {
		const {
			value,
			label,
			type,
			name,
		} = this.props;

		return (
			<Fragment>
				<label>{ label }</label>
				<input
					type={ type }
					name={ name }
					value={ value }
					onChange={ this.changeAction }
				/>
			</Fragment>
		);
	}
}
