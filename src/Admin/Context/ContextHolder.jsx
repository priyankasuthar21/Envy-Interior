import React, { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContext = createContext()

export default function ContextHolder(props) {
  const notify = (msg) => toast(msg);
  return (
    <MainContext.Provider value={{notify}}>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer />
      {props.children}
    </MainContext.Provider>
  );
}

export { MainContext }