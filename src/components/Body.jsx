import Box from './Box';

export default function Body() {
    return (
        <main>
            <div className="rounded-x1 m-5 p-5 border-2 border-blue-500 rounded-xl">
                <Box />
            </div>
            <div className="rounded-x1 m-5 p-5 border-2 border-blue-500 rounded-xl">
                <Box />
                <Box />
            </div>
      </main>
    )
}