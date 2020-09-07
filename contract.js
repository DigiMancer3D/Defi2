module.exports = {
  networks: {
      development: {

          from: 'some address',
          privateKey: 'some private key',
          consume_user_resource_percent: 30,
          fee_limit: 100000000,
          fullNode: "https://api.trongrid.io",
          solidityNode: "https://api.trongrid.io",
        //  eventServer:  "it is optional",
        //  network_id: "*" // Match any network id
      },
      production: {
          from: 'some other address',
          privateKey: 'some other private key',
          consume_user_resource_percent: 30,
          fee_limit: 100000000,
          fullNode: "https://api.trongrid.io",
          solidityNode: "https://api.trongrid.io",
      //    eventServer:  "it is optional",
      //    network_id: "*" // Match any network id
      },
    ..... you can define other network configuration as well
  }
};
