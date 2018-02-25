import React from "react";
import PropTypes from 'prop-types';
import './applist.less';
import { connect } from 'react-redux'
import { changePage } from "../../redux/action";
import http from '../../http/http';
import api from '../../http/api';

class Applist extends React.Component{
    constructor(props){
        super();
        this.state={
            list:[]
        };
    }

    componentDidMount(){
      this.getList(1);
    }
    getList(page){
        let data={
            page:page
        }
        http(api.getInfo,data).then(res=>{
            this.setState({list:res.data.list})
        })
    }

    render(){
        return(
            <Applistcontent list={this.state.list} store={this.context.store}></Applistcontent>      
        )
    }
}
class Applistcontent extends React.Component{
    constructor(props){
        super();
        // this.changePage=this.changePage.bind(this)
        this.state = {
            activekey:null,
       }
    }
    changePage({v,k}){
        this.setState({activekey:k},()=>{
            this.props.store.dispatch(changePage(v));
        })
        
    }
    render(){
        return(
            <div className="list">
                <ul>
                 {this.props.list.map((v,k)=>(
                     
                     <li onClick={this.changePage.bind(this,{v:v,k:k})} key={k} className={k==this.state.activekey?"active":""}>
                        <div className="head"><img src={v.bgimg} alt=""/></div>
                        <div className="foot">{v.name}</div>
                    </li>
                 ))}   
                </ul>
            </div> 
                
        )
    }         

}
Applist.contextTypes = { store: PropTypes.object.isRequired }
const mapDispatchToProps=(dispatch,info)=>{
    return dispatch(changePage(info));
}
// export default Applist;
export default connect(state=>({info:state.info}),mapDispatchToProps)(Applist)
