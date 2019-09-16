//引入消息类型
import {ADD_LESSON} from "../consts"
// 动态消息
export let addLesson = data => ({data,type:ADD_LESSON})