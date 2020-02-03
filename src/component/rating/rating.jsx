import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './rating.css'

const labels = {
  1: 'Useless',
  2: 'Useless+',
  3: 'Poor',
  4: 'Poor+',
  5: 'Ok',
  6: 'Ok+',
  7: 'Good',
  8: 'Good+',
  9: 'Excellent',
  10: 'Excellent+',
};

const useStyles = makeStyles({
  rating: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});


const HoverRating = () => {
  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  console.log(`You rate is ${rate}`)

  return (
    <>
      <div className = 'tc'>
        <ol className='heading'>Please rate the app</ol>     
        <div className={classes.rating}>        
        <Rating name="hover-feedback" value={rate} size="large" max={10} onChange={(event, newRate) => { setRate(newRate); }}
        onChangeActive={(event, newHover) => { setHover(newHover); }}
      />
      {rate !== null && <Box ml={4}>{labels[hover !== -1 ? hover : rate]}</Box>}      
        </div>
    </div>
    <div className='message'>
      You just rate with: {rate}<br></br>
      Thank You!!
    </div>
      
    </>
      
  );
}
export default HoverRating;
