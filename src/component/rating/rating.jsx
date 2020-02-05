import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

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
    width:200,
    display: 'flex',
    alignItems: 'center',
  },
});

const HoverRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  const [mo, setMo] = useState(null);
  console.log(`You rating is ${rating}`);

  return (
    <>
    <div className = 'tc'>
      <ol className='heading'>Please rate the app</ol>     
      <div className={classes.rating}>        
        <Rating name="hover-feedback" value={rating} size="large" max={10} onChange={(event, newRating) => { setRating(newRating); }}      
        //onChangeActive={(event, newHover) => { setHover(newHover); }}
        />
        {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}<br></br>Rating:{rating}
        </Box>}      
      </div>
      H teliki bathomlogia tis efarmogis mexrh twra einai : 
    </div>
    <Link to='/results-my-app'>App Results</Link> 
    </>      
  );
}
export default HoverRating;
