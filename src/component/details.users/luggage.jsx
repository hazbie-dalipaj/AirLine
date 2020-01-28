import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import LuggageYes from './luggage.yes';
import LuggageNo from './luggage.no';

const Luggage = () => {
  const [value, setValue] = useState('yes');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return(
    <>     
      <form className='bord'>
      <h2>Have you luggage for check in ?</h2>
      <FormControl >
     
        <RadioGroup value={value} onChange={handleChange} >        
          <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
        </RadioGroup>
      </FormControl>

      <FormControl >
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
        </RadioGroup>
      </FormControl>

      {value === 'yes' && <LuggageYes />}
      {value === 'no' && <LuggageNo />}
      </form>
      
    </>
  )
}
export default Luggage;