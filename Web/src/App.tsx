import { useState, useEffect } from 'react'
import { firebase, auth} from "./services/firebase"
interface UserProps{
  username: string,
  avatar: string,
}

function App() {
  const [ chars, setChars] = useState<Object>();
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("http://localhost:3000/home");
        console.log(await data.json())
      } catch (error) {
        console.log(error);
      }
    } 
    setChars(getData);
  }, []);

  console.log(chars);
  return (
    <div className="App">
      <header>
        <a href="/">Game Art Database</a>
        <p>{user?.username}</p>
        <img src={user?.avatar} alt="" />
      </header>
    </div>
  )
}

export default App
