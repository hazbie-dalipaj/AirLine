import React from 'react';
import './column.css';
import {Link} from 'react-router-dom'

const Column = () => {
    return(
    <div className="row">
        <div className="column">
            <h2>Copyright</h2>
            <span className='copyright'>&#169; 2020. AirLine</span> 
        </div>
        <div className="column">
            <h2>Contact</h2>
            <footer>
                <p>Create by: Hazbie Dalipaj</p>
                <p>Contact information: <a href='hazbie.dalipaj@marinetraffic.com' className='color'>hazbie.dalipaj@marinetraffic.com</a></p>
            </footer>
        </div>
        <div className="column">
            <h2>URL</h2>
            <p>Github: <a href='https://github.com/hazbie-dalipaj/AirLine.git' className='color'>click to view a code</a></p>
        </div>
    </div>
    )
}
export default Column;