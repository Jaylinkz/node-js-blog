const hhh = require('./myFirstModule');
const os = require('os');
const fs = require('fs');
if (!fs.existsSync('./docs')){
    fs.mkdir('./docs',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./docs',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
// console.log(os.platform(),os.homedir());
// setTimeout(()=>{
//     clearInterval(int)
// },4000);


// const int = setInterval(() => {
//     console.log(hhh);
// }, 1000);


