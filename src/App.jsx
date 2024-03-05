import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function App() {

  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="grow">
            <Body 
            />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}