import React from "react";

export default function Login(props)  {

    const [formData, setFormData] = React.useState(
        {
            username: "",
            password: ""
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <div className="flex justify-center items-center my-10 w-screen">
            <form onSubmit={props.handleLogin} className="w-1/4 bg-gray-200 p-4 rounded-lg">
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Username</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="text"
                        placeholder="Enter username..."
                        onChange={handleChange}    
                        name="username"
                        value={formData.username}
                    />
                </div>
                <div className="flex flex-col py-1">
                    <label className="font-semibold">Password</label>
                    <input 
                        className="bg-blue-200 text-xl" 
                        type="password"
                        placeholder="Enter password..."
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                    />
                </div>
                <hr className="border-t border-black my-2" />
                <div className="flex justify-center">
                    <input 
                        type="submit" 
                        className="bg-blue-500 text-white text-xl font-medium px-10 py-3 mb-1 mt-1 rounded-lg cursor-pointer hover:bg-blue-600"
                    />
                </div>
                </form>
        </div>
    )
}