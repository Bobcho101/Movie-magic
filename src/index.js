import express from 'express'; 
import handlebars from 'express-handlebars';
import routes from './routes.js';
const app = express();
const port = 4000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');  

app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));
app.use(routes);

app.listen(port, () => console.log(`Server is listening to: http://localhost:${port}`));