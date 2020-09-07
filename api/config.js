const env = process.env.PATH_TYPE;

let interfaceData = {
}

switch (env) {
  case "pro":
    interfaceData = {
      mainOptions: {
        fullNode: 'http://fullnode.tron.network',
        solidityNode: 'http://solidity.tron.network',
        eventServer: 'http://fullnode.tron.network'
      },
      sideOptions: {
        fullNode: 'http://fullnode.sun.network',
        solidityNode: 'http://solidity.sun.network',
        eventServer: '{server location}'  //we do not have an event server yet
      },
      mainGatewayAddress: '{some address}', 
      sideGatewayAddress: '{some address}',
      chainId: '{ID}',

      SERVER_API: 'https://api.trondice.org',

      TRON_GRID: "https://api.trongrid.io", 
      contractAddress: "{some address}",
      
      trx20ContractAddress: '{some address}',
      
    }
    break;
  default:
    interfaceData = {
      mainOptions: {
        fullNode: 'http://fullnode.tron.network',
        solidityNode: 'http://solidity.tron.network',
        eventServer: 'http://fullnode.tron.network'
      },
      sideOptions: {
        fullNode: 'http://fullnode.sun.network',
        solidityNode: 'http://solidity.sun.network',
        eventServer: 'http://fullnode.sun.network'  
      },
      mainGatewayAddress: '{some address}',
      sideGatewayAddress: '{some address}',
      chainId: '{ID}',

      SERVER_API: 'http://47.90.249.61:9083',
      TRON_GRID: "http://47.90.249.61:8099",
      contractAddress: "{some address}",
      
      trx20ContractAddress: '{mint address}',
    }
    break;
}
export default interfaceData;
