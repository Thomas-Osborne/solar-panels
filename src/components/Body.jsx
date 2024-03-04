import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';
import History from './History';

export default function Body() {
    return (
        <main className="h-screen flex flex-col">
            <div className="rounded-xl m-5 px-5 border-2 border-blue-500 h-3/5">
                <div className="h-full flex">
                    <div className="w-1/5 px-2">
                        <Box name="Previous Records" content={History} />
                    </div>
                    <div className="w-4/5 px-2">
                        <Box name="Graph" content={Graph} />
                    </div>
                </div>
            </div>
            <div className="rounded-xl m-5 px-5 border-2 border-blue-500 h-2/5">
                <div className="h-full flex">
                    <div className="w-1/2 px-2">
                        <Box name="Calculator" content={Calculator} />  
                    </div>
                    <div className="w-1/2 px-2">
                        <Box name="Estimates" content={Estimates} />
                    </div>
                </div>
            </div>
      </main>
    )
}