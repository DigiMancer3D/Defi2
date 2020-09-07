import request from "~/plugins/request";

import { Message } from "element-ui";

import interfaceData from "./config"
const server_url = interfaceData.SERVER_API
const ws_server_url = interfaceData.WS_SERVER_API


/**
 * 
 * api/rank/{type}/list
 * type
 * @param {*} params 
 */
export function getRanks(params) {
  return new Promise(function(resolve, reject) {
    request({
      url: `${server_url}/api/rank/1/list`,
      method: "get",
      params: params
    })
      .then(response => {
        if (response.code === 0) {
          resolve(response.data)
        } else {
          Message({ type: "warning", message: response.message, showClose: true });
          reject(response)
        }
      })
      .catch(err => {
        Message({ type: "error", message: err.message, showClose: true });
        reject(err);
      });
  });
}
/**
 * 
 * api/rank/{type}/list
 * type 
 * @param {Object} params
 */
export function getCurrentRank(params) {
  let currentRankURL = `${ws_server_url}/api/rank/0/list?dapp_id=${params.dapp_id}&user_address=${params.user_address}`
  return currentRankURL
}
