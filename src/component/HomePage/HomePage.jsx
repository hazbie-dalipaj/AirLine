import React, { useState } from 'react';
import { company } from '../card/company';
import List from '../card/List';
import SearchCard from '../Search/SearchCard';
import './HomePage.css';

const HomePage = () => {
  const [state, setState] = useState({
    company: company,
    searchfield:''
  })
  const onSearchChange = (event) => {
    setState({ searchfield: event.target.value })
  }
  const filteredCompany = company.filter(company => {
    return company.name.toLowerCase().includes(state.searchfield.toLowerCase())
  })
  return(
    <div className="App">
      <h1 className='web-title'>Airline Company</h1> 
      <SearchCard searchChange = {onSearchChange} />            
      <List company = {filteredCompany} />
    </div>
  )
}
export default HomePage;
