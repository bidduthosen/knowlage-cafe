import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {

  return (
    <>
      <Header></Header>
      <main className='max-w-screen-xl mx-auto px-6'>
        <Products></Products>
      </main>
      
    </>
  )
}

export default App
