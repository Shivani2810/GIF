import Random from './components/Random'
import Tag from './components/Tag'
export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative ">
      <h1 className="bg-white rounded absolute w-full text-center mt-[40px] ml-[25px] overflow-x-hidden px-10 text-3xl">Random GIFS</h1>
      <div className="flex flex-col" >
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
