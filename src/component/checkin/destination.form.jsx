import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
  }));

const DestinationForm = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };
    return(
        <form className='bord'>
            <h1 className='tc'>What is your destination?</h1>
             <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Return" />
          <FormControlLabel value="male" control={<Radio />} label="One way" />
          <FormControlLabel value="other" control={<Radio />} label="Multi-city" />
        </RadioGroup>
      </FormControl>
      
    </div>
            
            <div>
                <br />
                From 
                <select name="from">
                    <option value="canada">Canada</option>
                    <option value="china">China</option>
                    <option value="england">England</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Italy</option>
                    <option value="portugal">Portugal</option>
                </select>
                To
                <select name="to">
                    <option value="canada">Canada</option>
                    <option value="china">China</option>
                    <option value="england">England</option>
                    <option value="germany">Germany</option>
                    <option value="italy">Italy</option>
                    <option value="portugal">Portugal</option>
                </select>
            </div>
            
            
        </form>
    )
} 
export default DestinationForm;