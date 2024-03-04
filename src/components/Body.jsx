import Box from './Box';
import Calculator from './Calculator';
import Estimates from './Estimates';
import Graph from './Graph';

export default function Body() {
    return (
        <main className="flex h-screen grow">
            <div className="rounded-x1 m-5 p-5 border-2 border-blue-500 rounded-xl w-1/2">
                <Box name="Graph" content={Graph} />
            </div>
            <div className="rounded-x1 m-5 p-5 border-2 border-blue-500 rounded-xl w-1/2">
                <Box name="Calculator" content={Calculator} />
                <Box name="Estimates" content={Estimates} />
            </div>
      </main>
    )
}