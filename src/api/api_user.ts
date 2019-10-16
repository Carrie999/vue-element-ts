/**
 * 用户相关api
 */
import * as API from './'
import Env from './env';
const { version } = Env

export default {
  login: function (params) {
    return API.POST(`${version}user/auth`, params)
  },
  logout: function (params) {
    return API.DELETE(`${version}user/auth`, params)
  },
  getDataset: params => {
    return API.GET(`${version}dataset`, params)
  },
  postDataset: params => {
    return API.POST(`${version}dataset`, params)
  },
  delDataset: params => {
    return API.DELETE(`${version}dataset`, params)
  },
  putDataset: params => {
    return API.PUT(`${version}dataset`, params)
  },
  deleteDataset: params => {
    return API.POST(`${version}file`, params)
  },
  getDatasetImg: (dataset_id, params) => {
    return API.GET(`${version}dataset/images/${dataset_id}`, params)
  },
  getProjectDatasets: id => {
    return API.GET(`${version}project/${id}/datasets`)
  },
}
