import Comment from "./Comment";
import CommentList from "./CommentList";

const commentData = [
    {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Mahesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Mahesh",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Mahesh",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Mahesh",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Mahesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [],
                            },
                        ],
                    },
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Mahesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [],
                            },
                        ],
                    },
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Mahesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
        ],
    },
    {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Mahesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Mahesh",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Mahesh",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Mahesh",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Mahesh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Mahesh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Mahesh",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Mahesh",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "Mahesh",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Mahesh",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const CommentContainer = () => {
    return (
        <div className="mt-5">
            <h1 className="text-2xl font-bold">Comments</h1>
            <CommentList comments={commentData} />
        </div>
    );
};

export default CommentContainer;
