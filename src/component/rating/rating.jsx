import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Column from '../copyright/column';
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
  10:'Excellent+',
};

const useStyles = makeStyles({
  rating: {
    alignItems: 'center',
  },
});


const HoverRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  console.log(`You rating: ${rating}`);

  return (
    <>
      <div className = 'tc'>
        <ol className='heading'>Please rate the app</ol>     
        <div className={classes.rating} >        
          <Rating name="hover-feedback" value={rating} size="large" max={10} onChange={(event, newRating) => { setRating(newRating); }} />
          {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]} </Box>}      
        </div>
        <div className='rating'> {rating} / 10  </div>                  
      </div>
      <div className='information3'>
        <div className='note'>(I can't see the ratings)</div>
        <Column />
      </div> 
    </>      
  );
}
export default HoverRating;
