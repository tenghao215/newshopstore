import type { ResultCodeType } from './resultCode';

/**
 * 后端统一响应结构
 * 泛型 T 表示 data 字段的具体类型
 */
export interface Result<T = any> {
  code: ResultCodeType; // 状态码（强类型，非 number）
  message: string;      // 响应信息（后端返回的 msg）
  data: T;              // 实际载荷
}