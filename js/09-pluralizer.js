var noun = window.prompt('Enter a noun');
var num = window.prompt('Enter a number');

if(noun=='fish' || noun=='sheep' || noun=='geese'){
    console.log(num + ' ' + noun);
}else if(num > 1){
    console.log(num + ' ' + noun+'s')
}else{
    console.log(num + ' ' + noun);
}