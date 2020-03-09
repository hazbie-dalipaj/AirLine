import React, { useState } from 'react';
import FormCard from './form.card';
import { Link } from 'react-router-dom';
import ParticleField from 'react-particles-webgl';

const FormCheckInCard = () => {
  const config = {
    lines: {
      minDistance: 80,
    },
    particles: {
      transparency: 0.6,
      shape: 'circle',
      count: 200,
      maxSize: 50,
    },
  };
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [company, setCompany] = useState(null);
  const onFromChange = (from) => setFrom(from);
  const onToChange = (to) => setTo(to);
  const onCompanyChange = (company) => setCompany(company);
  console.log(`the from value ${from}`);
  console.log(`the to value ${to}`);
  console.log(`the company ${company}`);
  const url3 = `/search-flights-by-company${from ? `/from:${from}`: ''}${to ? `/to:${to}`: ''}${company ? `/company:${company}`: ''}`;

  const onSetValue = (type, value) => {
    switch(type){
      case 'FromCountry': {
        onFromChange(value);
        break;
      }
      case 'ToCountry': {
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
    <div className='tc'>    
      <form className='form br4 pa2 ma4 dib shadow-2'>
        <h2>What's your next destination ?</h2>
        <FormCard onSetValue={onSetValue}  />
        <Link to={url3}><button disabled={!from || !to || !company } className='search-flights grow br4'>Search Flights</button></Link>
      </form>
      <ParticleField config={config} />
    </div>
  )
}
export default FormCheckInCard;
