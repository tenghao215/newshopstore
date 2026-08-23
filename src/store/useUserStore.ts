// store/userStore.ts
import { create } from 'zustand';
import {
  reqGetCode,
  reqUserInfo,
  reqUserLogin,
  reqUserRegister,
  reqUserLogout,
  reqAddUserAddress,
} from '@/api/request';
import { setToken, removeToken } from '@/utils';

// ----- 定义 state 的类型 -----
interface UserState {
  confirmCode: string;
  userInfo: Record<string, any>; // 可以具体化为 UserInfo 类型
}

// ----- 定义 store 的完整类型（包含 actions）-----
interface UserStore extends UserState {
  // actions 都是异步方法，返回 Promise
  getCode: (phone: string) => Promise<void>;
  userRegister: (data: any) => Promise<'ok'>;
  userLogin: (data: any) => Promise<void>;
  getUserInfo: () => Promise<void>;
  userLogout: () => Promise<void>;
  addUserAddress: (data: any) => Promise<'ok'>;
}

// ----- 创建 store -----
export const useUserStore = create<UserStore>((set, get) => ({
  // 初始 state
  confirmCode: '',
  userInfo: {},

  // ------- actions -------
  getCode: async (phone) => {
    const result = await reqGetCode(phone);
    if (result.code === 200) {
      set({ confirmCode: result.data });
    } else {
      throw new Error('fail');
    }
  },

  userRegister: async (data) => {
    const result = await reqUserRegister(data);
    if (result.code === 200) {
      return 'ok';
    } else {
      throw new Error('Register fail');
    }
  },

  userLogin: async (data) => {
    const result = await reqUserLogin(data);
    if (result.code === 200) {
      setToken(result.data.token || result.data);
      // 注意：登录后通常紧接着获取用户信息，这里可以调用 get 中的 getUserInfo
      await get().getUserInfo(); // 自动获取用户信息
    } else {
      throw new Error('Login fail');
    }
  },

  getUserInfo: async () => {
    const result = await reqUserInfo();
    if (result.code === 200) {
      set({ userInfo: result.data });
    } else {
      throw new Error('getUserInfo fail');
    }
  },

  userLogout: async () => {
    const result = await reqUserLogout();
    if (result.code === 200) {
      removeToken();
      set({ userInfo: {} });
    }
    // 如果失败，也可以选择不抛错，按业务决定
  },

  addUserAddress: async (data) => {
    const result = await reqAddUserAddress(data);
    if (result.code === 200) {
      return 'ok';
    } else {
      throw new Error('getUserInfo fail');
    }
  },
}));