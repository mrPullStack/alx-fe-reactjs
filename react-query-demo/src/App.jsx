// src/App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
