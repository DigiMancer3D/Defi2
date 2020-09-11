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

var poolCheck = artifacts.require("./rePool.sol/poolCheck");
var Burning = artifacts.require("./Burning.sol");
var Minting = artifacts.require("./Minting.sol");

module.exports = function(deployer) {
  deployer.deploy(poolCheck);
  deployer.deploy(Burning);
  deployer.deploy(Minting);
};

