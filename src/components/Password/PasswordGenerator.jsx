import React, { useState } from "react";


export default function PasswordGenerator() {

    const numberPool = "0123456789";
    const letterPool = "abcdefghijklmnopqrstuvxwyz";
    const symbolPool = "!@#$%&*()_-";

    const [size, setSize] = useState(16);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);
    const [choices, setChoices] = useState(0);

    function generatePassword() {

        if (!(numbers || symbols || upperCase || lowerCase)) {
            alert("Select at least one option.");
            return;
        }

        const letters = [];

        if (numbers)
            letters.push(() => numberPool[randomInt(0, numberPool.length-1)]);

        if (symbols)
            letters.push(() => symbolPool[randomInt(0, symbolPool.length-1)]);

        if (lowerCase)
            letters.push(() => letterPool[randomInt(0, letterPool.length-1)]);

        if (upperCase)
            letters.push(() => letterPool[randomInt(0, letterPool.length-1)].toUpperCase());

        let genPassword = [];

        letters.forEach(letter => {
            genPassword.push(letter());
        });


        while (genPassword.length < size) {
            const randomLetter = letters[randomInt(0, letters.length -1)];
            genPassword.push(randomLetter());
        }

        const shuffledPassword = shufflePassword(genPassword);
        const finalPassword = shuffledPassword.join("");

        setPassword(finalPassword);
        setCopied(false);

    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function copyText() {
        navigator.clipboard.writeText(password);
        setCopied(true);
    }

    function shufflePassword(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div id="layout" className="mt-5 bg-white dark:bg-gray-900 dark:text-white"  >
            <h2 className="text-xl  text-gray-400 dark:text-white">Choose the following options:</h2>
            <div className="mt-6">
                <label className="block" >Size: {size} characters</label>
                <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min="8" max="32" value={size} onChange={(e) => setSize(e.target.value)} />


            </div>
            <div className="mt-2">
                <div >
                    <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} /> <span>Include upper characters</span>
                </div>
                <div>
                    <input type="checkbox" checked={lowerCase} onChange={() => setLowerCase(!lowerCase)} className="" /> <span>Include lower characters</span>
                </div>
                <div>
                    <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} /> <span>Include numbers</span>
                </div>
                <div>
                    <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} /> <span>Include special characters</span>
                </div>
            </div>
            <div>
                <button className="rounded text-white bg-purple-600 px-3 py-2 mt-4"
                    onClick={() => generatePassword()}>Generate</button>
            </div>
            <div className="mt-4 mb-20">
                <span className="font-mono">Your password is: <b className="bg-gray-200 dark:bg-gray-700">{password} </b> </span>
                <div>
                    {password ? <button className="rounded text-white bg-blue-400 px-1 py-1 mt-2"
                        onClick={() => copyText(password)}>
                        {copied ? " Copied! " : "Copy to clipboard"}
                    </button> : <></>}
                </div>
            </div>
        </div>
    )
}