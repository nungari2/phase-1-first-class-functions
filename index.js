
function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function namedFunction() {
        console.log("I am the named function!");
      };
    }
  function  returnsAnAnonymousFunction(){
    return function() {
        console.log();
    }
      }
  
