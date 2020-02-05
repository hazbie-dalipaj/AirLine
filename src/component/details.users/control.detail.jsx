import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const ControlDetail = () => {
    const [value, setValue] = useState('yes');
    const handleChange = event => {
        setValue(event.target.value);
      };
    console.log(`value is ${value}`);

    return(
        <div>
            <ol className='heading'>Are correct your detail?</ol>
            <FormControl >
              <RadioGroup value={value} onChange={handleChange} >
                <FormControlLabel value="yes" control={<Radio color="default" />} label="Yes" />
              </RadioGroup>
            </FormControl>

            <FormControl >
              <RadioGroup value={value} onChange={handleChange} >
                <FormControlLabel value="no" control={<Radio color="default" />} label="No" />
              </RadioGroup>
            </FormControl>
          {value==='yes' && <ol>Continue to next step</ol>}
          {value==='no' && <ol>Please, rewite your details on setp 1</ol>}
        </div>
    )
}
export default ControlDetail;
