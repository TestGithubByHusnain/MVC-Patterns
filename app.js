const path= require ('path');
const express= require ('express');
const userRouter=require('./routes/userRouter');
const {hostRouter}=require('./routes/hostRouter');

const rootDir=require('./utils/pathUtil')
const errorsController=require("./controllers/errors");

// Locall modules
;
const app= express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);
const PORT = 3000;
app.listen(PORT, ()=>{
console.log(`Server is running on address http://localhost:${PORT}`);
})