
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserForm from './component/UserForm';
import PostForm from './component/PostForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user" element={<UserForm />} />
        <Route path="/post" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
