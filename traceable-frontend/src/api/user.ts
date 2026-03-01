
import { http } from "@/utils/http";

/** 登录返回结果类型 */
export type UserResult = {
  success: boolean;
  data: {
    username: string;
    roles: Array<string>;
    accessToken: string;
    expires: any;
  };
};

/** * 登录接口
 * 对接 FastAPI 后端，使用 JSON 格式
 */
export const getLogin = (data?: any) => {
  return http.request<UserResult>("post", "/api/v1/auth/login", { 
    // 直接把 data 丢进去，http 库会自动把它转成 JSON 字符串
    data: {
      username: data?.username || "",
      password: data?.password || ""
    }
    // 注意：删掉了原来的 headers，因为默认就是 application/json
  });
};

/** 获取个人信息接口 */
export const getMine = (data?: object) => {
  return http.request<any>("get", "/api/v1/auth/me", { data });
};

export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/login", { data });
};
