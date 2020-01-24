import React, {useState} from 'react';
import FormReturn from './form/form-return/form.return';
import FormOneWay from './form/form-oneway/form.one.way';
import './form.check.in.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Link} from 'react-router-dom';
//import FlightsPage from '../../collection-flights/flights.page';

const FormCheckIn = () => {
  const [value, setValue] = useState('return');
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [retur, setReturn] = useState(null);
  const [cabine, setCabine] = useState(null);

  const handleChange = event => {
    setValue(event.target.value);
  };
  console.log('The state is: ', value);

  console.log(`the from value ${from}`);
  console.log(`the to value ${to}`);
  console.log(`the depart date ${departure}`);
  console.log(`the return date is ${retur}`);
  console.log(`the cabine is ${cabine}`);

  const url = `/search-flights${from ? `/from:${from}`: ''}${to ? `/to:${to}`: ''}${departure ? `/departure:${departure}`: ''}${cabine ? `/cabine:${cabine}`: ''}`;

  return(
    <>     
      <form className='form'>
      <h2>What's your next destination ?</h2>

      <FormControl >
        <RadioGroup value={value} onChange={handleChange} >
          <FormControlLabel value="return" control={<Radio color="default" />} label="Return" />
        </RadioGroup>
      </FormControl>

      <FormControl >
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="oneway" control={<Radio color="default" />} label="OneWay" />
        </RadioGroup>
      </FormControl>

        {value=== 'return' && <FormReturn 
          onFromChange={(from)=> setFrom(from)} 
          onToChange={(to)=> setTo(to)} 
          onDepartureChange={(departure)=>setDeparture(departure)} 
          onReturnChange={(retur)=>setReturn(retur)} 
          onCabineChange={(cabine)=>setCabine(cabine)} />}

        {value === 'oneway' && <FormOneWay 
          onFromChange={(from)=> setFrom(from)} 
          onToChange={(to)=> setTo(to)} 
          onDepartureChange={(departure)=> setDeparture(departure)} 
          onCabineChange={(cabine)=>setCabine(cabine)} />}

        <Link to={url}><button className='search-flights'>Search Flights</button></Link>
        {/*<Link to='/search-flights'><button className='search-flights'>Search Flights</button></Link>*/}
      </form>
      
    </>
  )
}
export default FormCheckIn;