function receivesAFunction (callBack){
    callBack ('Hello');
}
function returnsANamedFunction () {
    return function namedFunction(){}
}
function returnsAnAnonymousFunction(){
    return function(){};
}