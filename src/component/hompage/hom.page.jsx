import React, {Component} from 'react';
import {company} from '../../company';
import CardList from '../card/card.list';
import Search from '../search/search';
import Column from '../copyright/column';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
          company: company,
          searchfield:'',
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
                <CardList company={filteredCompany} />
                <Column />              
            </div>
        )
    }
}
export default HomePage;
