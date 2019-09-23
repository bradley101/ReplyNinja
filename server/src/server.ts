import express from 'express';

let app = express();
declare const port = 3333;

app.get(/api/, (req, res) => {
    res.send('Ok we are typescript baby!');
});



app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`listening to port ${port}`);
});