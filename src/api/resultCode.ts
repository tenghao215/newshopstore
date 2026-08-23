import type { Result } from '@/api';
// TODO:后续使用接口定义语言（IDL） + 代码生成 使用 OpenAPI Generator 或 protobuf，后端定义好错误码枚举文件，构建时自动生成前端的 TypeScript 枚举文件。代码是机器生成的，永远不会不一致
// ---------- 状态码定义 ----------
export const ResultCode = {
  // 通用成功
  SUCCESS: 200,

  // 客户端错误 (1000-1999)
  BAD_REQUEST: 1001,
  UNAUTHORIZED: 1002,
  FORBIDDEN: 1003,
  NOT_FOUND: 1004,

  // 业务逻辑错误 (2000-2999)
  ORDER_NOT_EXIST: 2001,
  INSUFFICIENT_BALANCE: 2002,
  DUPLICATE_SUBMIT: 2003,

  // 系统错误 (3000-3999)
  DB_ERROR: 3001,
  THIRD_PARTY_ERROR: 3002,
} as const;

// 提取状态码的类型（联合类型：200 | 1001 | 1002 | ...）
export type ResultCodeType = typeof ResultCode[keyof typeof ResultCode];

// ---------- 状态码对应的默认消息映射 ----------
export const ResultCodeMessageMap: Record<ResultCodeType, string> = {
  [ResultCode.SUCCESS]: '操作成功',
  [ResultCode.BAD_REQUEST]: '请求参数错误',
  [ResultCode.UNAUTHORIZED]: '未登录或Token已过期',
  [ResultCode.FORBIDDEN]: '无操作权限',
  [ResultCode.NOT_FOUND]: '请求资源不存在',
  [ResultCode.ORDER_NOT_EXIST]: '订单不存在',
  [ResultCode.INSUFFICIENT_BALANCE]: '账户余额不足',
  [ResultCode.DUPLICATE_SUBMIT]: '请勿重复提交',
  [ResultCode.DB_ERROR]: '数据库执行异常',
  [ResultCode.THIRD_PARTY_ERROR]: '第三方接口调用失败',
};

// ---------- 辅助工具函数 ----------
/**
 * 根据状态码获取默认消息（用于后端未返回 message 时的兜底）
 */
export function getResultMessage(code: ResultCodeType): string {
  return ResultCodeMessageMap[code] || '未知错误';
}

/**
 * 判断响应是否成功（只有 code === 200 才是成功）
 */
export function isSuccess<T>(result: Result<T>): result is Result<T> & { code: 200 } {
  return result.code === ResultCode.SUCCESS;
}