import { request } from '@/api'
import type { Result } from '@/api/result';
import type { RegisterDTO } from './types';
import  { RegisterSchema } from './types';


/**
 * 获取短信验证码
 * @param phone 手机号
 * @returns Promise<Result<string>>  data 为验证码字符串
 */
export const reqGetCode = (phone: string): Promise<Result<string>> => {
    return request.get<Result<string>>(`/user/passport/sendCode/${phone}`);
};

/**
 * 用户注册
 * @param data 注册信息对象，包含手机号、密码、验证码等
 * @returns Promise<Result<null>>  data 为注册结果
 */
export const reqUserRegister = (data: RegisterDTO): Promise<Result<null>> => {

    // 使用 Zod 校验输入，如果失败则抛出 ZodError
    const validatedData = RegisterSchema.parse(data);
    // 也可以使用 safeParse 自行处理错误
    // const result = RegisterSchema.safeParse(data);
    // if (!result.success) {
    //   throw new Error(result.error.issues[0].message);
    // }
    return request.post<Result<null>>('/user/passport/register', { data: validatedData });
};

/**
 * 用户登录
 * @param data 登录信息对象，包含手机号、密码等
 * @returns Promise<Result<any>>  data 为登录结果，通常包含 token 等信息
 */
export const reqUserLogin = (data: any): Promise<Result<any>> => {
    return request.post<Result<any>>('/user/passport/login', { data });
};

/**
 * 获取用户信息
 * @returns Promise<Result<any>>  data 为用户信息
 */
export const reqUserInfo = (): Promise<Result<any>> => {
    return request.get<Result<any>>('/user/passport/auth/getUserInfo');
};


/**
 * 退出登录
 * @returns Promise<Result<any>>  data 为退出登录结果
 */
export const reqUserLogout = (): Promise<Result<any>> => {
    return request.get<Result<any>>('/user/passport/logout');
};