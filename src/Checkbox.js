import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  //const { initChecked } = this.props;
  state = {
    isChecked: this.props.initChecked,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label} = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label} = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            //defaultChecked = {checked}
            onChange={this.toggleCheckboxChange}
          />

          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
