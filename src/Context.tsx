import React, { useState } from "react";

interface SwiperContextProps {
  children: React.ReactNode
}

const SwiperContext = React.createContext({
  isSwiperInit: false,
  onSwiperInit: () => {}
});

export const SwiperContextProvider = ({children}: SwiperContextProps) => {
  const [isSwiperInit, setIsSwiperInit] = useState(false);

  const swiperInitHandler = () => {
    setIsSwiperInit(true);
  }
  return (
    <SwiperContext.Provider value={{
      isSwiperInit: isSwiperInit,
      onSwiperInit: swiperInitHandler
    }}>
      {children}
    </SwiperContext.Provider>
  )
}

export default SwiperContext;