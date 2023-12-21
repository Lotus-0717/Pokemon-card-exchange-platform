interface CardItemProps {
  name: string;
  pic: string;
  series: string;
  no: string;
}

function CardItem({ name, pic, series, no }: CardItemProps) {
  return (
    <div className="w-full flex items-end">
      <div className="w-32">
        <img src={pic} alt="" />
      </div>
      <div className="ml-4">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-md mb-1">{no}</p>
        <div className="rounded-md bg-black p-0.5 w-fit">
          <p className="text-white rounded-md border border-white p-1">{series}</p>
        </div>
      </div>
    </div>
  )
}

export default CardItem;
