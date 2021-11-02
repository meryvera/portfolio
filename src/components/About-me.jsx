import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const AboutMe = () => {
  return (

    <Grid container direction="column" justify="space-around" alignItems="center">
      <Grid item xs>
        <Typography variant='body1' align='center' gutterBottom>
          Soy Mery vera Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quod!
        </Typography>

      </Grid>
      <Grid item xs>
        <Typography variant='body1' align='center'gutterBottom>
          <b>Soy Mery vera Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quod!</b>
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant='body1' align='center' gutterBottom>
          Soy Mery vera Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, quod!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorum? Sapiente, dolor veritatis? Quisquam reprehenderit quod ratione aperiam ab commodi repellat obcaecati, adipisci deserunt facere, saepe vel. Enim autem quisquam sequi in, sapiente quod deserunt saepe veritatis? Praesentium enim amet fuga nesciunt, quibusdam a, sint voluptatibus necessitatibus sed assumenda vitae.
        </Typography>
      </Grid>
    </Grid>
    
  )
}
