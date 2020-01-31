import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
        formControl: {
          margin: theme.spacing(5),
          minWidth: 10,
        },
}));

const FormOneWay = (props) => {
  const [state, setState] = useState({
    country: '',
    name: '',
  });

  const inputLabel = useRef(null);
  const [, setLabelWidth] = useState(0);
  
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    const {onFromChange, onToChange} = props;
    const {onDepartureChange} = props;
    const {onCabineChange} = props;
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
      case 'Departure':{
        onDepartureChange(value);
        break;
      }
      case 'cabine':{
        onCabineChange(value);
        break;
      }
      
      default:
    }

    setState({
      ...state,
      [name]: value,
    });
  };

    return(
        <div className='return'>
        <FormControl className={useStyles().formControl}>
        <FormHelperText ref={inputLabel}>From</FormHelperText>
        <NativeSelect
          value={state.FromCountry}
          onChange={handleChange('FromCountry')}
          inputProps={{
            name: 'FromCountry'            
          }}
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
          value={state.ToCountry}
          onChange={handleChange('ToCountry')}
          inputProps={{
            name: 'ToCountry'            
          }}
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
      <FormHelperText ref={inputLabel}>Departure</FormHelperText>
      <TextField
        value={state.Departure}
        onChange={handleChange('Departure')}
        inputProps={{
        name: 'Departure'            
      }}
        id="date"
        type="date"
        format="dd/MM/yyyy"
        defaultValue="2020-01-01"  
      />
    </FormControl>

    <FormControl className={useStyles().formControl}>
      <FormHelperText ref={inputLabel}>Return</FormHelperText>
      <TextField disabled
        id="date"
        type="date"
        format="dd/MM/yyyy"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormControl>

    <FormControl className={useStyles().formControl}>
        <FormHelperText ref={inputLabel}>Cabin Class</FormHelperText>
        <NativeSelect
          value={state.cabine}
          onChange={handleChange('cabine')}
          inputProps={{
            name: 'cabine'            
          }}
        >
          <option>None</option>
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>Business Class</option>
          <option>First Class</option>
        </NativeSelect>
      </FormControl>
        </div>
    )
}
export default FormOneWay;