/* // Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(array){
    let firstTwoDrivers = [...array]
    return firstTwoDrivers.slice(0,2);
}

console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(array){
    let lastTwoDrivers = [...array]
    return lastTwoDrivers.slice(2,4);
}

console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
console.log(selectingDrivers)

const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value ;
    }
}

function  fareDoubler(fare){
    return fare*2
}
function  fareTripler(fare){
    return fare*3
}

function selectDifferentDrivers(drivers,cb){
    return cb(drivers);
 */


// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers  =  function(){
    const slicedArray = drivers.slice(0, 2);
    return slicedArray ;
}

console.log(returnFirstTwoDrivers())

const returnLastTwoDrivers  =  function(){
   const slicedArray2 = drivers.slice(2);
    return slicedArray2;
}

console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];
console.log(selectingDrivers)

const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value ;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,cb){
    return cb(drivers);
}
console.log(selectDifferentDrivers(drivers ,returnFirstTwoDrivers))