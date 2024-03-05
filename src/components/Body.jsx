import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';
import History from './History';

export default function Body(props) {
    console.log(props.testingData.find(x => x.id === 1))
    return (
        <main className="h-screen flex flex-col">
            <div className="rounded-xl mx-5 my-1 px-5 h-3/5 flex">
                <div className="w-1/5 flex flex-col px-2">
                    <Box name="Previous Records" content={<History />} />
                </div>
                <div className="w-4/5 flex flex-col px-2">
                    <Box name="Graph" content={<Graph data={props.data}/>} />
                </div>
            </div>
            <div className="rounded-xl mx-5 my-1 px-5 h-2/5 flex">
                <div className="w-1/2 flex flex-col px-2">
                    <Box name="Calculator" content={<Calculator />} />  
                </div>
                <div className="w-1/2 flex flex-col px-2">
                    <Box name="Estimates" content={<Estimates data={props.data}/>} />
                </div>
            </div>
      </main>
    )
}