import React from 'react';
import Card from './card';

const CardList = ({props, company}) => {   
    const cartComponent = company.map((user, i) => {   
    return <Card key={i} id={company[i].id} name={company[i].name} companyUrl={company[i].companyUrl} />
    })
    return(
        <>
            {cartComponent}
        </>
    )
}
export default CardList;
