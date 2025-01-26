import express from 'express'; 
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import routes from './routes.js';
import 'dotenv/config';


const app = express();
const port = 4000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');  


app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

try{ 
    const globalUri = process.env.DATABASE_URI;
    console.log(globalUri);
    const localUri = 'mongodb://127.0.0.1/movie-magic';
    await mongoose.connect(globalUri);
} catch(err){
    console.log(err.message);
}

app.use(routes);

app.listen(port, () => console.log(`Server is listening to: http://localhost:${port}`));