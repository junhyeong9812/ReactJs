import React from "react";

class ComfirmButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isConfirmed: false,
        };
        //클래스 바인드 코드 
        // this.handleConfirm =this.handleConfirm.bind(this);
    }
    //바인드 구성 시 생성
    // handleConfirm(){
    //     this.setState((preState)=>({
    //         isConfirmed: !preState.isConfirmed,
    //     }));
    // }
    handleConfirm=()=>{
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render(){
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed? "확인됨" : "확인하기"}
            </button>
        )
    }
}
export default ComfirmButton;