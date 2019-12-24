import React, {Component} from 'react';
import {company} from '../../company';
import CardList from '../card.list/card.list';
import Search from '../search/search';

class HomePage extends Component{
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
    render(){
        const filteredCompany = this.state.company.filter(company => {
            return company.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
          })
        return(
            <div className="App">
                <h1 className='title'>Airline Company</h1> 
                <Search searchChange={this.onSearchChange} />
                <CardList company={filteredCompany}/>
            </div>
        )
    }
}
export default HomePage;