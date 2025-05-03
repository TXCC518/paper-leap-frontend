import myAxios from "../request.ts";

export const searchUsersByNameAndTags = async (value: any) => {
    return await myAxios.request({
        url: "api/user/search/user",
        method: "GET",
        params: value
    })
}