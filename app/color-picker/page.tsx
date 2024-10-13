'use client'
import { useState } from "react"

function Colorpicker () {
    const [bgColor, setBgColor] = useState("bg-white");

    return (
        <div className={`${bgColor} h-screen flex justify-center items-center`}>
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6">Color Picker</h1>
                <div className="grid grid-cols-2 gap-4 md:flex md:justify-center">
                    <button className="bg-yellow-400 text-white w-full md:w-auto rounded border-2 border-yellow-500 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-yellow-500")}>Yellow</button>
                    <button className="bg-green-400 text-white w-full md:w-auto rounded border-2 border-green-500 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-green-500")}>Green</button>
                    <button className="bg-amber-800 text-white w-full md:w-auto rounded border-2 border-amber-700 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-amber-900")}>Brown</button>
                    <button className="bg-orange-400 text-white w-full md:w-auto rounded border-2 border-orange-500 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-orange-500")}>Orange</button>
                    <button className="bg-pink-400 text-white w-full md:w-auto rounded border-2 border-pink-500 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-pink-500")}>Pink</button>
                    <button className="bg-red-500 text-white w-full md:w-auto rounded border-2 border-red-600 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-red-500")}>Red</button>
                    <button className="bg-purple-500 text-white w-full md:w-auto rounded border-2 border-purple-600 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-purple-600")}>purple</button>
                    <button className="bg-blue-500 text-white w-full md:w-auto rounded border-2 border-blue-600 p-4 md:p-2 text-lg md:text-xl" onClick={() => setBgColor("bg-blue-600")}>Blue</button>
                </div>
            </div>
        </div>
    );
}

export default Colorpicker;
