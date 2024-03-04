export default function Box(props) {

    const Content = props.content;

    return (
        <div className="rounded-xl p-5 my-5 border-2 border-rose-500 h-full">
            <h3 className="text-gray-500 text-xl font-semibold">{props.name}</h3>
            <div className="h-full overflow-y-auto">
                <Content />
            </div>
        </div>
    )
}