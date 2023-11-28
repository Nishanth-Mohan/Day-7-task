// c) Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    console.log(output);
    output.forEach(element => {
        console.log("country name :",element.name.common,", capital :",element.capital[0],", flag :",element.flag);
    });
}