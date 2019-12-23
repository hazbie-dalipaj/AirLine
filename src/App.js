import React, {Component} from 'react';
import './App.css';
import {company} from './company';
import CardList from './component/card.list/card.list';
import Search from './component/search/search';
import Header from './component/header/header';

class App extends Component {
  constructor(){
    super();
    this.state={
      company: company,
      searchfield:''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    const filteredCompany = this.state.company.filter(company => {
      return company.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
    <div className="App">
       <Header />
      <h1 className='title'>Airline Company</h1>     
      <Search searchChange={this.onSearchChange} />
      <CardList company={filteredCompany}/>
    </div>
  );
  }  
}

export default App;
