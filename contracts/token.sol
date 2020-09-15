pragma solidity >=0.4.23 <0.6.0;
contract Test{
    function f() public pure returns (string memory){
        return "method f()";
    }
    function g() public pure returns (string memory){
        return "method g()";
    }
}

//require poolCheck 

var poolCheck = artifacts.require("./rePool.sol/poolCheck"); //needs to pull from /contracts/rePool.sol
var Burning = artifacts.require("./Burning.sol"); //needs to exist still
var Minting = artifacts.require("./Minting.sol"); //needs to exist still
var BurnLen = [];
BurnLen += artifacts.require("./Burning.sol");
var burnlist = [];

module.exports = function(deployer) {
  deployer.deploy(poolCheck);
  deployer.deploy(Burning);
  deployer.deploy(Minting);
};

//check burn wallet for minting math

var burnnum = Burning.value;



// check minting wallet for minting math
  // looking for the number of unique wallet addresses
  var mintList = artifacts.require("./Minting.sol").addresses;
  sort(mintList);
var mintsize = mintList;

comp(burnnum, mintsize);
//compare 

comp(burnnum, mintsize) {
if burnnum >= (mintsize*0.15) {
  var burnnum2 = BurnLen.slice[BurnLen.length+1];
  if burnnum2.length >= burnnum.length;
  return burnnum = burnnum2;
  comp(burnnum, mintsize); 
}
else {
  burnlist = [burnnum];
}
return (burnnum, mintsize, burnlist);
}


