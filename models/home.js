const fs =require('fs');
const path = require('path');
const rootDir =require ('../utils/pathUtil');

let registeredHomes=[]; 
module.exports=class Home{
    constructor(houseName, price, location, photoUrl, rating ){
this.houseName=houseName;
this.price=price;
this.location=location;
this.photoUrl=photoUrl;
this.rating=rating;
}
save(){
    registeredHomes.push(this);
    const homeDataPath=path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=>{
        console.log("file writing concluded", error);
    } ) 
}
static fetchAll(){
    const homeDataPath=path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data)=>{
        console.log("File read: ", err, data);

    if(!err){
        registeredHomes= JSON.parse(data);
    }
    return registeredHomes;
    });
    return registeredHomes;
}

}