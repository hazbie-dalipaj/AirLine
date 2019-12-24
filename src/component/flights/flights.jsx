import React, {Component} from 'react';
import './flights.css';
import DirectoryMenu from '../directory.menu/directory-menu';
import SearchFlights from './search.flights';

class Flights extends Component {
    render(){       
        return(
            <div className='flights'>
                <h1 className='title'>Countries to travel</h1>
                <SearchFlights />
                <DirectoryMenu />
        </div>
        )
    }    
}
export default Flights;