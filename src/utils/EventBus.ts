import mitt from "mitt";

// 定义事件类型
type Events = {
    'update-target': {target: string},
    'search-users': { target: string, value: string }
}

// 创建事件总线实例
const emitter = mitt<Events>()

export default emitter