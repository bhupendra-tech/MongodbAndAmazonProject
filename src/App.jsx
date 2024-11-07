import './App.css'
import Navbar from './components/navbar'
function App() {
  return (
    <div className='h-screen w-screen px-10 flex justify-between flex-col py-6 gradient-background'>
     <Navbar/>
     <div className='w-full' style={{"maxWidth" : 1100}}>
     <h3 className='text-5xl'>A Intelligent system that will help you to learn things at your own pace.</h3>
     <h6 className='text-xl mt-8 mb-14'> QUICK 
      <span className='px-1 font-extrabold text-xl'> &#183; </span>
          SMART 
          <span className='px-1 font-extrabold text-xl'> &#183; </span> 
        PERSONALIZED LEARNING
        </h6>
     </div>
    </div>
  )
} 

export default App
