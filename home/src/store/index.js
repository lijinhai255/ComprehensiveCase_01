//创建store
import { createStore} from "redux"
//引入react-redux
import { connect } from "react-redux"
//引入 reducer
import { reducer} from "../reducer"

//创建store
export let store = createStore(reducer)

//定义mapStateToProps
function mapStateToProps(state){
    return {state}
}
//定义mapDispatchToProps
function mapDispatchToProps(dispatch){
    return {dispatch}
}
//定义connect方法 

export let dealFn = connect(mapStateToProps,mapDispatchToProps)
