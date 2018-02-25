import React from "react";
import { connect } from 'react-redux';

class Mobile extends React.Component{
    constructor(props){
        super()
        // this.state={
        //     info:{
        //         id:0,
        //         name:'ddd',
        //         bgimg:'',
        //         url:'',
        //     }
        // }
    }
    render(){

        return(
            <section className="mobile">
                <div className="title">{this.props.info.name}</div>
                <div className="mobile-body">
                    <div className="mobile-content">
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