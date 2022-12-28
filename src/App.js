
import './App.css';
import image from './decor1.webp'
import imageTwo from './decor2.webp'
import { List } from './List';

function App() {
  return (
   
    <div className='container'>
      <img className='image' src={ image } alt="flower" width="150px"  />
      <div>
      <h1>To do list</h1>
      </div>
      <div>
        <h2>January 2023</h2>
      </div>
      <List/>
      <img className='imageTwo' src={ imageTwo } alt="flower" width="150px"/>
    </div>
  );
}

export default App;
