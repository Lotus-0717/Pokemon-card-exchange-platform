import React from "react";
import ThemeButton from "./ThemeButton";
interface SectionItemProps {
  tit: string;
  children: React.ReactNode;
  showButton?: boolean;
}

function SectionItem({ tit, children, showButton = true }: SectionItemProps) {
  return (
    <section className="w-full mb-10">
      <div className="tit flex items-center mb-5">
        <div className="w-3 h-10 bg-lightBlue"></div>
        <p className="ml-4 text-3xl">{tit}</p>
      </div>
      <div className="grid grid-cols-1 gap-y-12 gap-x-4">
        {children}
      </div>
      {showButton && <ThemeButton className="w-full mt-10">看更多</ThemeButton>}
    </section>
  )
}

export default SectionItem;
