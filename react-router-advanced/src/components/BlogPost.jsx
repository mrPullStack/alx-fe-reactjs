import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { postId } = useParams();
    return (
        <div>
            <h1>Post ID: {postId}</h1>
        </div>
    ); 
}

export default BlogPost;
