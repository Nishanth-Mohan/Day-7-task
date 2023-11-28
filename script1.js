//b) Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    console.log(output);
    var res = output.filter((element)=>element.population<200000);
    console.log(res);
    var result = res.map((element)=>element.name.common);
    console.log(result);
}