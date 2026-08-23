import {z} from 'zod';


export const RegisterSchema = z.object({
  phone: z.string()
    .regex(/^1[3-9]\d{9}$/, '手机号格式不正确'), // 简单手机号正则
  password: z.string()
    .min(6, '密码至少6位')
    .max(20, '密码最多20位'),
  code: z.string()
    .length(6, '验证码必须为6位数字')
    .regex(/^\d{6}$/, '验证码必须为数字'),
});


// 2. 从 Schema 推导 TypeScript 类型（替代手写的 RegisterDTO）
export type RegisterDTO = z.infer<typeof RegisterSchema>;