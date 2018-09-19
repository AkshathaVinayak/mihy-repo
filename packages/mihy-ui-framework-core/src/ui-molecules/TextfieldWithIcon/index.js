import React from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '../../ui-atoms/InputAdornment';
import TextField from '../../ui-atoms/TextFields/Text';
import Icon from '../../ui-atoms/Icon';
import isEmpty from "lodash/isEmpty";


function InputWithIcon(props) {
  const { label,iconObj,...rest } = props;
  const extraProps = !isEmpty(iconObj) &&(iconObj.position === "end"?  {InputProps :{
      endAdornment: (
        <InputAdornment position="end">
          <span style={{color:iconObj.color?iconObj.color:"inherit"}}><Icon iconName={iconObj.iconName} /><span style={{position: "relative",top: "-7px"}}>{iconObj.label && iconObj.label}</span> </span>
        </InputAdornment>
      ),
  }}:
    {
      InputProps: {
        startAdornment: (
          <InputAdornment position="start">
            <Icon iconName={iconObj.iconName} />
          </InputAdornment>
        ),
      }
    })

  return (
      <TextField
        label={label}
        {...extraProps}
        {...rest }
      />

  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InputWithIcon;
