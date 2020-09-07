import { Message } from "element-ui";
import request from "~/plugins/request";

import interfaceData from "./config"
const cli_url = interfaceData.CLI_API

/**
 *
 *
 * @param {*} params
 */
export function getProgress(params) {
  return new Promise(function(resolve, reject) {
    request({
      url: `${cli_url}/api/mine/${params}/progress`,
      method: "get"
    })
      .then(response => {
        if (response) {
          resolve(response)
        } else {
          Message({ type: "warning", message: response, showClose: true });
          reject(response)
        }
      })
      .catch(err => {
        Message({ type: "error", message: err.message, showClose: true });
        reject(err);
      });
  });
}
