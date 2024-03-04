import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';

export default function Body() {
    return (
        <main className="h-screen">
            <div className="rounded-x1 m-5 px-5 border-2 border-blue-500 rounded-xl h-1/2">
                <Box name="Graph" content={Graph} />
            </div>
            <div className="rounded-x1 m-5 px-5 border-2 border-blue-500 rounded-xl h-1/2 flex">
                <div className="w-1/2 px-2">
                    <Box className="w-1/2" name="Calculator" content={Calculator} />  
                </div>
                <div className="w-1/2 px-2">
                    <Box className="w-1/2" name="Estimates" content={Estimates} />
                </div>
            </div>
      </main>
    )
}