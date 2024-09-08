import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    };

    const PostsComponent = () => {
    const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
        <h1>Posts</h1>
        <button onClick={() => refetch()}>Refetch Posts</button>
        {data.map(post => (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );
};

export default PostsComponent;
