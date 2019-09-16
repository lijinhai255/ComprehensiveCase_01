//引入消息类型
import { ADD_LESSON} from "../consts"

//定义默认state
let defaultState = {
    lessons: [{
        "_id": 1,
        "img": "static/img/lesson/01.jpg",
        "title": "Javscript进阶课程123123121",
        "sales": "12345",
        "price": "50.00",
        "type": "react"
    }, {
        "_id": 2,
        "img": "static/img/lesson/01.jpg",
        "title": "Javscript进阶课程123123121",
        "sales": "12345",
        "price": "60.00",
        "type": "react"
    }, {
        "_id": 3,
        "img": "static/img/lesson/01.jpg",
        "title": "Javscript进阶课程123123121",
        "sales": "12345",
        "price": "70.00",
        "type": "react"
    }]
}

//定义reducer
export function reducer(state=defaultState,action){
    //定义结果对象
    let result = { }
    //根据消息类型，处理结果数据
    switch(action.type){
        case ADD_LESSON:
            //添加课程
            state.lessons.push(action.data)
            break;
        default:
            break;    
    }
    //合并新的数组
    return Object.assign({},state,result)

}