import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideup } from '../../animation/animate';

const PasswordCreator = () => {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  // ----useRef use for copy button ------
  const passwordRef = useRef(null);

  //   -----passwordgenerator function-----

  const passwordgenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // random number generator formula
      pass += str.charAt(char); //+ add na korla akta aliment ascha taii + add kora hoacha
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //setPassword ar jaigai password dila infinite loop chola asba tai setpassword use kora hoacha

  //   -----code Run---

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, charAllowed, passwordgenerator]);

  //   -----copyPasswordToClipboard function-----

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // ?. use korla error asba na jodi passwordRef.current na thaka tahola error asba . copy portion hilite hoii jaii
    passwordRef.current?.setSelectionRange(0, 100); // 0 theke 100 porjonto select korba
    window.navigator.clipboard.writeText(Password); // window word ta Next.js a use kora jaii naa sudu matra React.js a use kora jaii
    alert('Password Copied');
  }, [Password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 my-6 sm:my-8 md:my-10 text-fuchsia-900  bg-gradient-to-br from-[#f0fcfb] to-[#40a1f5] ">
        <motion.h1 className="text-2xl text-center cursor-pointer font-bold  hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out ">
          Password Generator
        </motion.h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            type="text"
            value={Password}
            className="w-full px-3 py-1  text-black  bg-gray-300"
            plasholder="Password"
            readOnly
            rsf={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 hover:shadow-lg hover:scale-105 transition duration-200 ease-in-out"
          >
            Copy
          </button>
        </div>
        <motion.div className="flex text-sm gap-x-2">
          <div className="font-semibold flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          {/* numberAllowed */}
          <div className="hover:scale-105 transition ease-in-out font-semibold flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* charAllowed */}
          <div className="hover:scale-105 transition ease-in-out font-semibold flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharacterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PasswordCreator;
