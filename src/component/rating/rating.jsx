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

let labels1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const useStyles = makeStyles({
  rating: {
    alignItems: 'center',
  },
});

const HoverRating = ({currentUser}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(-1);

  const classes = useStyles();
  console.log(`You rating is ${rating}`);

    let sum = labels1.reduce((previous, current) => current += previous);
    let avg = sum / labels1.length;

  return (
    <>
    <div className = 'tc'>
      <ol className='heading'>Please rate the app</ol>     
      <div className={classes.rating}>        
        <Rating name="hover-feedback" value={rating} size="large" max={10} onChange={(event, newRating) => { setRating(newRating); }}      
        //onChangeActive={(event, newHover) => { setHover(newHover); }}
        />
        {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}
        </Box>}      
      </div>
      <>
        <br></br><br></br>
        <ol>Your rating is: {rating}</ol>
       <ol>The sum of all the elements is: {sum}</ol>
       <ol>The average is:{avg}</ol> 
      </>               
    </div>
    <Link to='/results-my-app'>App Results</Link> 
    </>      
  );
}
export default HoverRating;
