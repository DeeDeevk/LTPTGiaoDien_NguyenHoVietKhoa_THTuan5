import './App.css';
import PhanDau from './components/PhanDau.jsx'
import PhanGiua from './components/PhanGiua.jsx';
import PhanCuoi from './components/PhanCuoi.jsx';


function App() {
  // const [data, setData] = useState([]);

  // var url = "https://jsonplaceholder.typicode.com/todos";

  // useEffect(() =>{
  //   fetch(url).then((res) => {
  //     return res.json()
  //   }).then((dataItem) => {
  //     setData(dataItem)
  //   })
  // },[]) 

  return (
    <>
      <header>
        <PhanDau />
      </header>
      <main>
        <PhanGiua />
      </main>
      <footer>
        <PhanCuoi/>
      </footer>
    </>
  )
}

export default App
