import { useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  const [phonenumber, setphonenumber] = useState();
  async function send() {
    try {
      const response = await axios.post("https://chimpu.xyz/api/post.php", { Post:phonenumber  });
      setData(prevData => ([...prevData, response.data.data]));
    } catch (error) {
      console.log(error);
    }
}

  return (
    <>
    <div className="header">
      {data && data.length > 0 && data.map((item, index) => (

        <p>{item.text}</p>
      ))
      }
      </div >
      <button onClick={send }></button>
      </>

  );
}

export default App;
