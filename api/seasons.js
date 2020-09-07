import request from "~/plugins/request";
import { Message } from 'element-ui'
import interfaceData from "./config"
const SERVER_API = interfaceData.sideOptions.eventServer

/**
 *  transactionId
 * @param {Object} params 
 */
export function timeLoop(params) {
  return new Promise(function(resolve, reject) {
    request({
      url: `${SERVER_API}/events/contract/${params.contractAddress}/${params.eventName}`,
      method: "get",
      data: {limit: params.limit}
    })
      .then(response => {
        if (response) {
          resolve(response)
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
