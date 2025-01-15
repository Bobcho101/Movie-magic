import express from 'express';  
const app = express();
const port = 4000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.send('Hi');
});


app.listen(port, () => console.log(`Server is listening to: http://localhost:${port}`));