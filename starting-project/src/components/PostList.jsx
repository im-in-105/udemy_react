import Post from './Post';
import classes from './PostList.module.css';

function PostList(){
    return(
    <ul className ={classes.post}>
        <Post author = "별명" body="치와와, 오리"/>
        <Post author ="이유" body=" 오리와 치와와를 닮았고, 성격이 치와와 같아서 "/>
    </ul>
    );
}

export default PostList;