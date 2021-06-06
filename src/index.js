import express from 'express';

import usersRoutes from './routes/users.js';

const server = express();


server.use('/users', usersRoutes);

server.get('/users', (req, res) => { 
      res.send('Getting information from users page');   
  });


server.listen(8081, () => {
      console.log('express is up and running');
})

 