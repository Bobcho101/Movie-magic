import express from 'express'; 
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import routes from './routes.js';
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
    const globalUri = 'mongodb+srv://bgbobi878:nF1xmfzLcd5NP1YU@cluster0.gtyux.mongodb.net/movie-magic?retryWrites=true&w=majority&appName=Cluster0';
    const uri = 'mongodb://127.0.0.1/movie-magic';
    await mongoose.connect(globalUri);
} catch(err){
    console.log(err.message);
}

app.use(routes);

app.listen(port, () => console.log(`Server is listening to: http://localhost:${port}`));