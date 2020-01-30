import React, {useState} from 'react';
import CardForm from './card.form';
import {Link} from 'react-router-dom';

const FormCheckInCard = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [company, setCompany] = useState(null);

  console.log(`the from value ${from}`);
  console.log(`the to value ${to}`);
  console.log(`the depart date ${company}`);

  const url3 = `/search-flights-by-company${from ? `/from:${from}`: ''}${to ? `/to:${to}`: ''}${company ? `/company:${company}`: ''}`;

  return(
    <>     
      <form className='form'>
      <h2>What's your next destination ?</h2>
        <CardForm 
          onFromChange={(from)=> setFrom(from)} 
          onToChange={(to)=> setTo(to)} 
          onCompanyChange={(company)=>setCompany(company)}  />  <Link to={url3}><button className='search-flights'>Search Flights</button></Link>
      </form>      
    </>
  )
}
export default FormCheckInCard;