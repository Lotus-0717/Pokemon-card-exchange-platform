import ThemeButton from "./themeButton";

interface CardItemProps {
  name: string;
  pic: string;
  series: string;
  no: string;
}

function CardItem({ name, pic, series, no }: CardItemProps) {
  return (
    <div className="w-full flex rounded-xl border-2 p-4 md:max-w-lg bg-white shadow-lg relative">
      <div className="w-32 md:shrink">
        <img src={pic} alt="" />
      </div>
      <div className="flex flex-col grow ml-4 items-end justify-between gap-y-2">
        <div className="w-full">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-md mb-1">{no}</p>
          <div className="rounded-md bg-black p-0.5 w-fit">
            <p className="text-white rounded-md border border-white p-1">{series}</p>
          </div>
        </div>
        <ThemeButton className="max-w-36 min-w-28 w-full">前往挑選</ThemeButton>
      </div>
    </div>
  )
}

export default CardItem;
