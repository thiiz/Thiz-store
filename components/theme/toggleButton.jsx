import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa'
import style from './toggleButton.module.css'
const Switch = ({ isOn, ...rest }) => {
  // initialize the customClassName according to the
  // state of the "isOn" using ternary operator
  const customClassName =
    `toggleSwitch ${isOn ? "on" : "off"}`;

  // initialize the src according to the
  // state of the "isOn" using ternary operator
  const src = isOn
    ?
    <FaSun className={style.themeIcon}/>
    :
    <FaMoon className={style.themeIcon}/>

  return (
    <motion.div animate className=
      {customClassName} {...rest}>
      <motion.div animate>
        {src}
      </motion.div>
    </motion.div>
  );
};

const ToggleButton = () => {
  // useState hook is used to manage the state of
  // "isOn" that is used to change the className, 
  // background-color and img src accordingly
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor =
      isOn ? "#1c1c1c" : "#ffffff";
  }, [isOn]);

  return <Switch isOn={isOn} onClick={() =>
    setIsOn(!isOn)} />;
}
export default ToggleButton