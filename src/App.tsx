import Nav from "./componenets/Nav"
import MobNav from "./componenets/MobNav"
import Hero from "./componenets/Hero"
import Techs from "./componenets/Techs"
import Footer from "./componenets/Footer"
import { Suspense } from "react"
const techFetch = async () => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  )
}

function App() {
  const techPromise = techFetch()
  return (
    <>
      <div className="hidden sm:block">
        <Nav></Nav>
      </div>
      <div className="block sm:hidden">
        <MobNav />
      </div>
      <Hero></Hero>
      <Suspense fallback={<Loading />}>
        <Techs techPromise={techPromise} />
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
