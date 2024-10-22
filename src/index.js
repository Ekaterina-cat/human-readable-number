module.exports = function toReadable (number) {
  let arrNumNatural = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arrToTenForTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let arrNumTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let arrString = [];
  let arrNumber = [...number.toString()].map(Number);
  for(let i = 0; i < arrNumber.length; i++){
    if(arrNumber.length === 1){
      arrString.push(arrNumNatural[Number(arrNumber[i])]);
    }
    if(arrNumber.length === 2 && i === 0){
      if (arrNumber[i] === 1){
        arrString.push(arrToTenForTwenty[Number(arrNumber[i + 1])])
      }
      if (arrNumber[i] > 1){
        if(arrNumber[i+1] === 0){
          arrString.push(arrNumTen[arrNumber[i]-2])
        }
        if (arrNumber[i + 1] > 0){
          arrString.push(arrNumTen[arrNumber[i] - 2])
          arrString.push(arrNumNatural[arrNumber[i+1]]) 
        }
      }
    }
    if(arrNumber.length === 3){
      if(i === 0){
        arrString.push(arrNumNatural[arrNumber[i]])
      }
      if (i === 1) {
        if (arrNumber[i] === 0 && Number(arrNumber[i + 1]) > 0) {
          arrString.push(arrNumNatural[Number(arrNumber[i + 1])]);
        }
        if (Number(arrNumber[i]) === 1) {
          arrString.push(arrToTenForTwenty[Number(arrNumber[i + 1])])
        }
        if (Number(arrNumber[i]) > 1) {
          if (Number(arrNumber[i + 1]) === 0) {
            arrString.push(arrNumTen[Number(arrNumber[i] - 2)])
          }
          if (Number(arrNumber[i + 1]) > 0) {
            arrString.push(arrNumTen[Number(arrNumber[i] - 2)]);
            arrString.push(arrNumNatural[Number(arrNumber[i + 1])])
          }
        }
      }
    }
  }
  if (arrNumber.length === 3) {
    arrString.splice(1, 0, 'hundred')
  }
  return arrString.join(' ');
}