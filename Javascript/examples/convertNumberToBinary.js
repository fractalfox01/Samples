let bin = "";
let temp = 0;
let idx = 0;
let binaryCheck = [128, 64, 32, 16, 8, 4, 2, 1];
let binAddress = "";

// "addressArr" Argument must be an array.
// meant to take in an ipv4 address that's been split and stuck in an array.
// then combines binary back into ipv4 format.
// return is type String.

function convertToBinary(addressArr){
  //console.log("here");
  addressArr.forEach(function(element){
    temp = parseInt(element, 10);
    //console.log("temp is " + temp);
    if(temp == 0){
      bin = "00000000";
    }else{
      while(temp > 0){
        if(temp >= binaryCheck[idx]){
          temp = temp - binaryCheck[idx];
          bin += "1";
        }else{
          bin += "0";
        }
        idx++;
      }
      for(var i = idx;i < 8;i++){
        bin += "0";
      }
      idx = 0;
    }
    //console.log(bin);
    binAddress += bin + ".";
    bin = "";
    temp = 0;
  });

  return binAddress.substring(0, binAddress.length - 1);
};