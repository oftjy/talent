export const request = {
  //!配置过请求拦截器之后mock关停
  requestInterceptors: [
    (url, options) => {
      console.log('经过请求拦截器');
      options.url = '' + url;
      return options;
    },
  ],
  responseInterceptors: [
    (response, options) => {
      console.log('响应拦截器', response, options);
      return response;
    },
  ],
};
