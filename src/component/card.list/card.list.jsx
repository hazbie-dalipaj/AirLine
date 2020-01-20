import React from 'react';
import Card from '../card/card';

const CardList = ({company}) => {
    const cartComponent = company.map((user, i) => {
    return <Card key={i} id={company[i].id} company={company[i].company} /> 
    })
    return(
        <>
            {cartComponent}
        </>
    )
}
export default CardList;
