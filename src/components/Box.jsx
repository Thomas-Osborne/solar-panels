export default function Box(props) {

    const Content = props.content;

    return (
        <div className="rounded-x1 p-5 my-5 border-2 border-rose-500 rounded-xl">
            <h3 className="text-gray-500 text-xl font-semibold">{props.name}</h3>
            <Content />
        </div>
    )
}