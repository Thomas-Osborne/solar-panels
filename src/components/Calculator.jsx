export default function Calculator()  {
    return (
        <div>
            <form>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Hours Charging</label>
                    <input className="bg-blue-200" type="number" />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">SoC Increase</label>
                    <input className="bg-blue-200" type="number" />
                </div>
                <br />
                <div className="flex justify-center">
                <input type="submit" className="bg-blue-200" />
                </div>
            </form>

            <div>
                <div className="flex flex-col py-1">
                    <span className="font-semibold">Wattage Required</span>
                    <span className="bg-blue-200">Answer</span>
                </div>
                <div className="flex flex-col py-1">
                    <span className="font-semibold">Set Current Value</span>
                    <span className="bg-blue-200">Answer</span>
                </div>
            </div>
        </div>
    )
}