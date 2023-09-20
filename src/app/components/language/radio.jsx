import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Grid from '@mui/material/Grid';
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: '#000000',
    },
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function UseRadioGroup() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="English">
    
  
  <Grid container spacing={0}>
        <Grid item xs={8}>
        <MyFormControlLabel id='black' value="English" label="English" control={<Radio color="primary"/>}/>
        </Grid>
        <Grid item xs={4}>
        {/* <Image
  src="/bridge.svg"
  alt="Github"
  width={26}
  height={26}

  loading="lazy"
/> */}
        </Grid>
        </Grid>
      <MyFormControlLabel value="Hindi" label="हिंदी" control={<Radio />} />
      <MyFormControlLabel value="Gujarati" label="ગુજરાતી" control={<Radio />} />
      <MyFormControlLabel value="Punjabi" label="ਪੰਜਾਬੀ" control={<Radio />} />
      <MyFormControlLabel value="Marathi" label="मराठी" control={<Radio />} />
      <MyFormControlLabel value="Kannada" label="ಕನ್ನಡ" control={<Radio />} />
      <MyFormControlLabel value="Telugu" label="తెలుగు" control={<Radio />} />
      <MyFormControlLabel value="Bengali" label="বাংলা" control={<Radio />} />
      <MyFormControlLabel value="Tamil" label="தமிழ்" control={<Radio />} />
      <MyFormControlLabel value="Malayalam" label="മലയാളം" control={<Radio />} />
      <MyFormControlLabel value="Odia" label="ଓଡିଆ" control={<Radio />} />
    </RadioGroup>
  );
}