import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
        formControl: {
          margin: theme.spacing(8)
        },
}));

const CardForm = (props) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    const {onFromChange, onToChange, onCompanyChange} = props;
    const value = event.target.value;

    switch(name){
      case 'FromCountry':{
        onFromChange(value);
        break;
      }
      case 'ToCountry':{
        onToChange(value);
        break;
      }
      case 'Company':{
          onCompanyChange(value);
      }      
      default:
    } 
  };

    return(
        <div className='return'>
        <FormControl className={useStyles().formControl}>
        <FormHelperText ref={inputLabel}>From</FormHelperText>
        <NativeSelect
          onChange={handleChange('FromCountry')}         
        >
          <option>None</option>
          <option>Canada</option>
          <option>China</option>
          <option>England</option>
          <option>Germany</option>
          <option>Italy</option>
          <option>Portugal</option>
        </NativeSelect>
      </FormControl>
      
      <FormControl className={useStyles().formControl}>
        <FormHelperText >To</FormHelperText>
        <NativeSelect
          onChange={handleChange('ToCountry')}          
        >
          <option>None</option>
          <option>Canada</option>
          <option>China</option>
          <option>England</option>
          <option>Germany</option>
          <option>Italy</option>
          <option>Portugal</option>
        </NativeSelect>
      </FormControl>

      <FormControl className={useStyles().formControl}>
        <FormHelperText >Company</FormHelperText>
        <NativeSelect
          onChange={handleChange('Company')}          
        >
          <option>None</option>
          <option>Adria</option>
          <option>Advanced Air</option>
          <option>Aegean</option>
          <option>Air Canada</option>
          <option>Air China</option>
          <option>Air Europa</option>
          <option>Lufthansa</option>
          <option>Olympic</option>
          <option>Skyjet Airlines</option>
          <option>United</option>
        </NativeSelect>
      </FormControl>              
        </div>
    )
}
export default CardForm;