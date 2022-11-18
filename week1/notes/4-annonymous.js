setTimeout(function() {
    //Do something
}, 1000);

function getLength(myString, counter) {
    counter(myString);
}

//const counter = function(string){
//    console.log(string.length);
//}

getLength(`some string`, function(myStringPassed){
    console.log(myStringPassed.length);
});