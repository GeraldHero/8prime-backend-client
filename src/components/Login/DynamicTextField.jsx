import React from 'react';
import { TextField, Box } from '@mui/material';
import { useState } from 'react';
const DynamicTextField = (props) => {
  const [touched, setTouched] = useState(false);
  const { onChangeHundler, helperText, pattern, value, ...inputProps } = props;

  var reg = new RegExp(pattern);
  return (
    <Box sx={{ margin: 'auto', padding: '10px' }}>
      <TextField
        sx={{ width: 250 }}
        onChange={onChangeHundler}
        helperText={!reg.test(value) && touched && helperText}
        {...inputProps}
        onFocus={() => setTouched(true)}
        value={value}
        autoComplete='false'
        error={!reg.test(value) && touched}
      />
    </Box>
  );
};

export default DynamicTextField;
