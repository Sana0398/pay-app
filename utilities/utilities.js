function getConvertedValue(id){
    const Value=document.getElementById(id).value;
    console.log(Value)
    const convertedValue=parseFloat(Value);
    return convertedValue;
}
const number=getConvertedValue("number");