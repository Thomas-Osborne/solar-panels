export default function Box(props) {

    const Content = props.content;

    return (
        <div className="rounded-x1 p-5 my-5 border-2 border-rose-500 rounded-xl">
            <h3 className="text-gray-500 text-xl font-semibold">{props.name}</h3>
            <button className="bg-blue-500 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-600">Test Button</button>
            <Content />
        </div>
    )
}