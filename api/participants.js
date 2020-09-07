import request from "~/plugins/request";

import interfaceData from "./config"
const SERVER_API = interfaceData.SERVER_API
const CLI_API = interfaceData.CLI_API

import { Message } from "element-ui";


/**
 *
 * 
 *
 * @param {*} params 
 */
export function addParticipants(params) {
  return new Promise(function(resolve, reject) {
    request({
      url: `${SERVER_API}/api/user`,
      method: "post",
      data: params
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
 * @param {Object} params
 */
export function getUserInterface(params) {
  return new Promise(function(resolve, reject) {
    request({
      url: `${SERVER_API}/api/invite/list`,
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
