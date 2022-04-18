// import Button from "./Button"
// import styles from "./App.module.css"
import {useState, useEffect} from "react";
function App() {
  const [counter,setValue] =useState(0);
  const [keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1); 
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Call the API");
  },[]);
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]);
  useEffect(()=>{
    console.log('i run all the time');
  },[counter]);
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!</h1> */}
      {/* <Button text={"Continue"}/> */} 
      <input 
        type="text" 
        value={keyword}
        onChange={onChange}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;