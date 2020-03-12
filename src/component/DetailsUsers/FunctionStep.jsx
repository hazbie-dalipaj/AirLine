import React, {useState, useEffect} from 'react';
import UserDetails from './UserDetails';
import ControlDetail from './ControlDetails';
import Payment from '../payment/payment';

export function getSteps() {
    return ['Complete your details', 'Control you details', 'Payment'];
}

export function getStepContent (step) {
    switch (step) {
        case 0: return <UserDetails />;
        case 1: return <ControlDetail />  ;
        case 2: return <Payment/>; 
        default: return null;
    }    
}
