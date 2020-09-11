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

module.exports = function(deployer) {
  deployer.deploy(poolCheck);
  deployer.deploy(Burning);
  deployer.deploy(Minting);
};

