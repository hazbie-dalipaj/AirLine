import React from 'react';
import Card from '../card/card';

const CardList = ({company}) => {
    const cartComponent = company.map((user, i) => {
    return <Card key={i} id={company[i].id} name={company[i].name} companyUrl={company[i].companyUrl}/> 
    })
    return(
        <div>
            {cartComponent}
        </div>
    )
}
export default CardList;
