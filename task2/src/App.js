import './styles/App.css';
import { AddPostContainer } from './containers/AddPostContainer';
import { GalleryContainer } from './containers/GalleryContainer';
import { PostContainer } from './containers/PostContainer';


function App() {

  return (
    <>
      <h1 className='main_heading'>Chatter</h1>
      <div className='wall'>
        <GalleryContainer />
        <PostContainer />
        <AddPostContainer />
      </div>
    </>
  );
}

export default App;
