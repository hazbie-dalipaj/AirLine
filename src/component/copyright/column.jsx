import React from 'react';
import './column.css';
import Copyright from './copyright';
import Contact from './contact'

const Column = () => {
    return(
    <div className="row">
        <div className="column">
            <h2>Copyright</h2>
            <Copyright />
        </div>
        <div className="column">
            <h2>Contact</h2>
            <Contact />
        </div>
        <div className="column">
            <h2>URL</h2>
            <p>Github: <a href='https://github.com/hazbie-dalipaj/AirLine.git'>click to view a code</a></p>
        </div>
    </div>
    )
}
export default Column;