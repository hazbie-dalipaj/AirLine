import React, {useState} from 'react';
import CardForm from './card.form';
import {Link} from 'react-router-dom';
import Column from '../copyright/column';

const FormCheckInCard = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [company, setCompany] = useState(null);
  const onFromChange = (from) => setFrom(from);
  const onToChange = (to) => setTo(to);
  const onCompanyChange = (company) => setCompany(company);
  console.log(`the from value ${from}`);
  console.log(`the to value ${to}`);
  console.log(`the depart date ${company}`);

  const url3 = `/search-flights-by-company${from ? `/from:${from}`: ''}${to ? `/to:${to}`: ''}${company ? `/company:${company}`: ''}`;

  const onSetValue = (type, value) => {
    switch(type){
      case 'FromCountry':{
        onFromChange(value);
        break;
      }
      case 'ToCountry':{
        onToChange(value);
        break;
      }
      case 'Company': {
        onCompanyChange(value);
        break;
      }
      default:
    }
  };

  return(
    <>     
      <form className='form'>
      <h2>What's your next destination ?</h2>
        <CardForm onSetValue={onSetValue}  />  <Link to={url3}><button className='search-flights'>Search Flights</button></Link>
      </form>
      <div className='information2'>
        <Column />
      </div>      
    </>
  )
}
export default FormCheckInCard;
