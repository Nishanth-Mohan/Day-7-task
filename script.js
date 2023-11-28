//a) Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    console.log(output);
    var res = output.filter((element)=>element.region === "Asia");
    console.log(res);
    var result = res.map((element)=>element.name.common);
    console.log(result);
}
/*---------------------------------------------------
Solved using for loop below:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    for(i=0;i<result.length;i++){
        if(result[i].region === "Asia"){
        console.log("countries name:"+result[i].name.common);
        }
    }
}
*/