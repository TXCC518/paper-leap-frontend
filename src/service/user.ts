import {getCurrentUser} from "../request/user.ts";

/**
 * 请求当前用户信息
 */
export const getCurrentUserMessage = async () => {
    const { data } = await getCurrentUser();
    return data.data;
}