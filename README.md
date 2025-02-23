<!-- This is my first node.js project using express, express handlebars and MongoDB(Mongoose).
Functionality: 
1.Create a movie   |
2.See all movies   |
3.Search movies    |
4.Detailed view of every movie    |
5.Create cast  |
6.Attach a cast to a movie (you cannot attach 2 or more same casts to a film)    |
7.You can register     |
8.You can login        |
8.You can logout       |
9.You can edit or delete a post (only if you are the owner of the post).        |||
Dont forget to install the dev dependencies: npm install.
To run the app type:
1: npm run dev (this is using nodemon)
2: npm start -->

# Movie Magic

This is my first node.js project using express.

## Tech Stack
- express
- express-handlebars
- mongoDB
- mongoose
- jsonwebtoken
- cookie-parser

## Functionality 
1. Authentication (*register, login and logout*)
2. See all movies
3. Search movies (*search page with search filters*)
4. Detailed view of every movie
5. Create a new movie (*only if user*)
6. Create a new cast (*only if user*)
7. You can edit and delete movie (*only if owner*)
8. You can attach a cast to your movie(*only if owner*, *you cannot attach 2 or more same casts to a movie*)

## How to run the app locally on your machine
1. **Download Dependencies**
```bash
npm install
```
2. **Run the app**
```bash
npm run dev (this is using nodemon)
npm start (without nodemon)
```

## Notes
- The templates are not mine. They are from Softuni. 