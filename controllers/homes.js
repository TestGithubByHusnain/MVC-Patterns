// const registeredHomes=[];
const Home =require("../models/home");
exports.getAddHome=(req, res, next)=>{
    res.render('addHome', {pageTitle:'Add home to airbnb'});
}


exports.postAddHome=(req, res, next)=>{
    
    const {houseName, price, location, photoUrl, rating}=req.body;
    const home=new Home(houseName, price, location, photoUrl, rating);
    home.save();

    res.render('homeAdded'),{pageTitle: 'Home added Successfully', currentPage: 'homeadded'};
};

exports.getHomes= (req, res, next)=>{
    const registeredHomes=Home.fetchaAll();

    
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage:'Home'});
}


