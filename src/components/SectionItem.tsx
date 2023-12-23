import React from "react";
import ThemeButton from "./themeButton";
interface SectionItemProps {
  tit: string;
  children: React.ReactNode;
}

function SectionItem({ tit, children }: SectionItemProps) {
  return (
    <section className="w-full mb-10">
      <div className="tit flex items-center mb-5">
        <div className="w-3 h-10 bg-lightBlue"></div>
        <p className="ml-4 text-3xl">{tit}</p>
      </div>
      <div className="grid grid-cols-1 gap-y-12 gap-x-4 mb-10">
        {children}
      </div>
      <ThemeButton className="w-full">看更多</ThemeButton>
    </section>
  )
}

export default SectionItem;
