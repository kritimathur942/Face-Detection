
import { useEffect, useState } from 'react';
import './app.css';
import  Navbar  from "./components/Navbar.jsx";
import NewPost from './components/NewPost';


function App() {
  const[file,setFile] = useState();
const [image,setImage]= useState()

  useEffect(()=>{
    const getImage = ()=>{
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = ()=> {
      setImage({
        url:img.src,
        width:img.width,
        height:img.height,
      });
    };
    };
    file && getImage();
  },
  [file])

  return (
    <div >
      <Navbar/>
      {image ? (<NewPost image={image}/>) : (

      <div className="newPostCard">
        <div className="addPost">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
           alt="" 
           className='avatar' />
           <div className="postForm">
             <input type="text"
             placeholder="what's on your mind?"
             className='postInput' />
             <label htmlFor="file">
             <img
                  className="addImg"
                  src="https://cdn-icons-png.flaticon.com/512/1375/1375106.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://cdn-icons-png.flaticon.com/512/235/235861.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://cdn-icons-png.flaticon.com/512/4206/4206324.png"
                  alt=""/>
                    <button>Send</button>
             </label>
             <input onChange={(e)=> setFile(e.target.files[0])} id="file" style={{display:"none"}}type="file" />
             
           </div>
        </div>
      </div>
      )};
    </div>
  );
}

export default App;
