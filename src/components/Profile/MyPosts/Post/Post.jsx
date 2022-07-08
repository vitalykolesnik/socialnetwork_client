import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            {/* <img src={props.image} alt="Ooops" /> */}
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                    alt="Ooops"
                />
                <div className={s.itemMessage}>{props.text}</div>
            </div>
            <div className={s.itemLikesCount}>
                <span>💗</span> {props.likeCount || 0}
            </div>
        </div>
    );
};

export default Post;
