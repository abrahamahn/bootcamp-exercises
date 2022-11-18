function test () {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[0]);
        console.log(arguments[1]);    
    }
}
  // console.log(arguments[0]);
  // console.log(arguments[1]);

test(`pizza`, `bread`);