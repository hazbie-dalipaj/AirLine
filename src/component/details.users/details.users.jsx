import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PersonalDetail from './personal.detail';
import ControlDetail from './control.detail';
import Payment from '../flights/payment/payment';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

const DetailsUsers = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  function getSteps() {
    return ['Complete your details', 'Control you details', 'Payment'];
  }

  function getStepContent (step) {
    switch (step) {
      case 0: return <PersonalDetail onNameChange={(name)=> setName(name)} onEmailChange={(email)=> setEmail(email)} onPhoneChange={(phone)=> setPhone(phone)} />;
      case 1: return <ControlDetail  />  ;      
      case 2: return <Payment/>; 
      default: return 'Unknown step'
    }    
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };  

  console.log(`name is ${name}`);
  console.log(`email is ${email}`);
  console.log(`phone is ${phone}`);

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <h4 className='title'>Please, complete all fields</h4> <hr />
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <>{getStepContent(index)}</>
                <>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}> Back </Button>                   
                  <Button variant="contained" value='next' color="primary" disabled={!name || !email || !phone} onClick={handleNext} className={classes.button} >
                     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}                  
                  </Button>
                </>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography> Your payment is complete! Nice Trip!</Typography>
        </Paper>)}
    </div>
  );
}
export default DetailsUsers;
