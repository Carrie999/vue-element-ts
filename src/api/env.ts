/*
 * 设置api请求的baseURL
 * 实际项目中建议该文件不纳入版本管理
 */
// 本地
const locationUrl: string = window.location.origin;

let baseUrl: string;

if (process.env.NODE_ENV === 'development') {
  // 本地
  baseUrl = 'http://10.60.242.105:5566/';
} else if (locationUrl.includes('visionlabel.ainirobot')) {
  // master
  baseUrl = 'http://10.60.242.105:5566/';
} else {
  // dev
  baseUrl = 'http://10.60.242.105:5566/';
}

interface API {
  baseURL: string;
  version: string;
}

const api: API = {
  baseURL: baseUrl,
  version: '/api/v1/',
};

export default api;
