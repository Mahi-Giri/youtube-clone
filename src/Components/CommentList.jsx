import Comment from "./Comment";

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 ml-5 border border-l-gray-300">
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
};

export default CommentList;
