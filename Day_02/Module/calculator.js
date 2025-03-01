let sumData = (a,b)=>{
    return a+b;
}

let multiData = (a,b)=>{
    return a*b;
}
let subtractionData = (a,b)=>{
    return a-b;
}
//It is a defult export option in module.
export default sumData;

//It is a named export option in module.it's export the multiple.
export{sumData,multiData,subtractionData as subtrD}; //as is use to short the name. and is working similar full name.
export let printHello = (a,b)=>{
    console.log("this is a named export other option");
};