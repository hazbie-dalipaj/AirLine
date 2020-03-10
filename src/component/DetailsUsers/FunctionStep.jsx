import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UserDetails from './UserDetails';
import ControlDetail from './ControlDetails';
import Payment from '../Payment/Payment';

const FunctionStep = () => {
    function getSteps() {
        return ['Complete your details', 'Control you details', 'Payment'];
      }

      function getStepContent (step) {
        switch (step) {
          case 0: return <UserDetails 
                onNameChange={(name)=> setName(name)} 
                onEmailChange={(email)=> setEmail(email)} 
                onPhoneChange={(phone)=> setPhone(phone)} 
            />;
          case 1: return <ControlDetail  />  ;      
          case 2: return <Payment/>; 
          default: return ''
        }    
      }
}
export default FunctionStep;