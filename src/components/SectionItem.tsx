import React from "react";

interface SectionItemProps {
  tit: string;
  children: React.ReactNode;
}

function SectionItem ({ tit, children }: SectionItemProps ) {
  return (
    <section className="w-2/4 mb-10 pr-10">
      <div className="tit flex items-center mb-5">
        <div className="w-3 h-10 bg-lightBlue"></div>
        <p className="ml-4 text-3xl">{tit}</p>
      </div>
      <div className="grid grid-cols-2 gap-y-12 gap-x-4 mb-10">
        {children}
      </div>
      <div className="w-full border border-white rounded-full bg-lightBlue px-5 py-2 cursor-pointer">
        <p className="text-white text-center">看更多</p>
      </div>
    </section>
  )
}

export default SectionItem;
