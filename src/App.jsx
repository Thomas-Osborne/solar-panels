import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';

export default function App() {

  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    </>
  )
}