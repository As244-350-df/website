var fs=require("fs")
var in_data
fs.readFile('./node js.txt',function(error,data){
    if(error) return console.log(error);
    in_data=data;
    console.log('ansc data',in_data)

})
console.log('program end')