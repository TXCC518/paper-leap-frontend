import myAxios from "../request.ts";

// 根据标签和名称搜索用户
export const searchUsersByNameAndTags = async (value: any) => {
    return await myAxios.request({
        url: "api/user/search/user",
        method: "GET",
        params: value
    })
}

// 登录
export const userLogin = async (value: any) =>  {
    return await myAxios.request({
        url: "api/user/login",
        method: "POST",
        data: value
    })
}

// 查看当前登录用户信息
export const getCurrentUser = async () => {
    return await myAxios.request({
        url: 'api/user/current',
        method: "GET",
    })
}

// 修改用户信息
export const editUserInfoRequest = async (value: any) => {
    return await myAxios.request({
        url: 'api/user/update',
        method: "POST",
        data: value
    })
}

// 获取推荐用户
export const getRecommendUsers = async (value: any) => {
    return await myAxios.request({
        url: 'api/user/recommend',
        method: "GET",
        params: value
    })
}