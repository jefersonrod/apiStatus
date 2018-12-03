function setup(){
    console.log("running");
    loadJSON("/lojas", gotData);
}

function gotData(data){
    console.log(data);    
    var keys = Object.keys(data);
    console.log(keys);
}