import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:"김준형",
        comment:"안녕하세요",
    },
    {
        name:"누구세요",
        comment:"방가워요",
    },
    {
        name:"안녕",
        comment:"하세요",
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name}
                     comment={comment.comment}/>
                )
            })}
        </div>
    )
}


// function CommentList(props){
//     return(
//         <div>
//             <Comment name={"이인제"} comment="안녕하세요,hi"/>
//             <Comment name={"김준형"} comment="안녕하세요,h2"/>
//         </div>
//     )
// }

export default CommentList;