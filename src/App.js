import './App.css';
import {Firebase} from './firebase/config'

function App() {
  return (
    <div className="App">
     <button onClick={()=>{
      Firebase.firestore().collection('producs').get().then(snapshot=>{
        snapshot.foreach((obj)=>{
          console.log(obj.data)
        })
      })   
     }}>click me</button>
    </div>
  );
}

export default App;
