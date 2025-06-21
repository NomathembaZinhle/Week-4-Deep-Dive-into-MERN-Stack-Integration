import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SinglePost from './components/SinglePost';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm edit />} />
      </Routes>
    </Router>
  );
}
