import React, {Component} from 'react';
import './page.flights.css';
import DirectoryMenu from '../directory.menu/directory-menu';
import FormCheckIn from './form-checkin/form.check.in';
import SimpleMap from './google.map/google.map';

class PageFlights extends Component {
    render(){       
        return(
            <> 
                <div className='flights'>
                    <FormCheckIn />
                </div>

                <div className='flights'>
                <h1 className='title'>Countries to travel</h1>
                    <DirectoryMenu />                
                </div>
                
                <div className='map-flights'>
                    <h1 className='title'>See the map</h1>
                    <SimpleMap />
                </div>
                
            </>
            
        )
    }    
}
export default PageFlights;