import React from "react";
import { connect } from 'react-redux';

class Mobile extends React.Component{
    constructor(props){
        super()
        this.state={
           style:false
        }
        this.route=this.route.bind(this);
    }
    route(){
        this.setState({
            style:!this.state.style
        })
    }
    render(){
        return(
            <section className="mobile">
                <div className="title">{this.props.info.name}</div>
                <div className="mobile-body">
                <div className="roate" onClick={this.route}>旋转屏幕</div>
                    <div className={this.state.style?'roa mobile-content':'mobile-content'}>
                        <iframe src={this.props.info.url} className="iframe">
                        </iframe>
                    </div>
                </div>
            </section>
        )
    }
}
// export default Mobile;
export default connect(state=>({info:state.info}))(Mobile)