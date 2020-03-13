import React from 'react';
import Card from './card';

const List = ({ company }) => {   
    const cartComponent = company.map((card, i) => {   
        return <Card key={i} id={company[i].id} name={company[i].name} companyUrl={company[i].companyUrl} /> })
    return(
        <>
            {cartComponent}
        </>
    )
}
export default List;
