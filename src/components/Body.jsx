import Box from './Box';

export default function Body() {
    return (
        <main className="flex h-screen">
            <div className="rounded-x1 m-5 p-5 border-2 border-blue-500 rounded-xl w-1/2">
                <Box />
            </div>
            <div className="rounded-x1 m-5 p-5 border-2 border-blue-500 rounded-xl w-1/2">
                <Box />
                <Box />
            </div>
      </main>
    )
}