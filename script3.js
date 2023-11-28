// d) Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    console.log(output);
    var res = output.map((ele)=>ele.population);
    console.log(res);
    var result = res.reduce((acc,ele)=>acc+ele);
    console.log("Total population of all countries: " + result);
}