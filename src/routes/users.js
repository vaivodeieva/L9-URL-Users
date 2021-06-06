import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Gets all the user pages');
});
router.get('/:id', (req, res) => {
      const { id }= req.params;     
    res.send(`Get an user page with article ID ${id}`);
});

router.post('/', (req, res) => {
    res.send('Create a new user page');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Edit an user page with article ID ${id}`);

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Delete an user page with ID ${id}`);
});

export default router;