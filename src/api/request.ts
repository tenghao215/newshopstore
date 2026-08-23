// 对于axios进行二次封装
import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
// TODO: 进度条功能暂时不需要，后续再加，如需启用请安装 @types/nprogress
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import detailAbout from '@/store/detail'; // 将临时游客uuid导入（Vuex 模块，类型暂用 any）
import { getToken } from '@/utils';

// 1. 利用axios对象的方法create，去创建一个axios实例
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 开启进度条（如需启用，取消注释）
    // NProgress.start();

    // 添加临时游客 ID
    const uuidToken = (detailAbout as any).state?.uuid_token;
    if (uuidToken) {
      config.headers = config.headers || {};
      config.headers.userTempId = uuidToken;
    }

    // 添加 token（如果已登录）
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.token = token;
    }

    // 如果有交易号，也可以添加
    // const tradeNo = getTradeNo();
    // config.headers.tradeNo = tradeNo || '';

    return config;
  },
  (error) => {
    // NProgress.done();
    console.error('请求拦截器错误：', error);
    return Promise.reject(error);
  }
);

// 响应拦截器：直接返回 res.data（解包）
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    // NProgress.done();
    // 直接返回 res.data，使得调用时直接获得后端返回的数据体（例如 Result<T>）
    return res.data;
  },
  (error) => {
    // NProgress.done();
    console.error('响应拦截器错误：', error);
    // 这里可以统一处理错误提示，例如 Message.error(error.message)
    return Promise.reject(error);
  }
);

// ==================== 核心改造：自定义 HttpClient 类型 ====================
/**
 * 自定义 HttpClient 接口，覆盖所有请求方法的返回类型。
 * 因为响应拦截器已经解包（返回 res.data），所以所有方法直接返回 Promise<T>，
 * 而不是 Promise<AxiosResponse<T>>。
 */
interface HttpClient {
  // 通用 request 方法（对应 axios(config) 形式）
  <T = any>(config: AxiosRequestConfig): Promise<T>;
  
  // 常用 HTTP 方法
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

// 将 axiosInstance 断言为 HttpClient 类型，导出
const request = axiosInstance as HttpClient;

export default request;