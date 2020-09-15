pragma solidity ^0.4.25;
import "./common/SafeMath.sol";
import "./common/Ownership.sol";

/**
* Defi 2.0: rePool
*/
contract rePool is  CommunityOwnership {
    using SafeMath for uint256;
    
    uint256 constant precision = 1000000;
    uint256 constant public yi = 100000000;
    
    uint256 _R = 98 * precision;

    uint256 public index = 0;
    uint256 public batchIndex = 0;
    
    struct Item {
        address addr; //user address
        uint256 amount; //user address weight
        address daddr; //rebase after mint address
        uint256 damount //rebase mint address weight
        address pool; //pool of placed bids
        uint256 poolweight //placed bids pool weight
        uint256 dpool; //allowance for pool burn
        address mintpool; //the address mints go to
        address ultrapool; //ultrapool 
        uint256 parts; //number of participants
        uint256 timercool; //timer value for cool down
        uint256 timerseason; //timer value for season wait
        address prevseason; //location of previous pool season
//each pool remembers the prev pool so each pool can, in a chain, acitvate the prev for rebase payouts        
        uint256 mintcost;  //cost to mint
        uint256 participantbid; //what user inputs for bid
    }

    mapping(uint256 => Item) public items;
    bytes32 private defaultSalt;

    event Participate(address _addr, uint256 _amount, uint256 _index);
    event PoolCheck(address _addr, uint256 _amount, address _pool);
    event UserWeight(uint256, address _addr, uint256 _amount, address _pool, uint256 _poolweight);
    event DefiToken(uint256, address _daddr, uint256 _damount, address _mintpool);
    
    constructor() public payable {
        defaultSalt = keccak256(abi.encodePacked(owner));
    }
  //this needs to check pool
    function poolCheck(address _pool) isHuman whenNotPaused public  payable returns (uint256) {
        require(_pool);
        require(msg.value >= 1 * precision && msg.value <= 1000 * precision);
        index = index.add(1);
        items[index] = Item(msg.sender, msg.value, _point, 0, 0);
       
        emit poolCheck(msg.sender, msg.value, index);
        return index;
        return msg.value;
        return msg.sender;
    }
//determine 25% of pool weight
    function checkPoolWeight() public returns (address, uint256, uint256) {
        require(batchIndex < index);
        uint256 currIndex = batchIndex.add(1);
        Item storage item = items[currIndex];
        require(_pool);
        _poolweight = (_pool*25%);
        
        // allowed overflow here.
        defaultSalt = bytes32(uint256(defaultSalt) + item.point + msg.value); 
        uint256 random = uint256(keccak256(abi.encodePacked(defaultSalt, blockhash(block.number - 1)))).mod(100);
        
        uint256 payOut = 0;
        
     //determine what user may receive   
        if (_mintprice > _poolweight) {
            uint256 _guess = (_participantbid * _mintprice) - (_poolweight);
            
            emit UserGuess(currIndex, item.addr, item.amount, _guess);
        } else {
            emit UserLose(currIndex, item.addr, item.amount, 0);
        }
        
      

    function check(uint256 _index) public view returns (address, uint256, uint256, uint256, uint256) {
        require(_index <= index);
        Item memory item = items[_index];
        return (item.addr, item.amount, _guess);
    }

    function stat() public view returns (uint256, uint256) {
        return (index, batchIndex);
    }

}
