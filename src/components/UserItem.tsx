import ThemeButton from "./ThemeButton";

interface UserItemProps {
  name: string;
  pic: string;
  type: string;
  count: string;
}

function UserItem({ name, pic, count, type }: UserItemProps) {
  return (
    <div className="w-full flex rounded-xl border-2 p-4 md:max-w-lg bg-white shadow-lg relative items-center">
      <div className="rounded-full overflow-hidden shrink md:shrink-0 w-28">
        <img src={pic} alt="" />
      </div>
      <div className="flex flex-col grow ml-4 items-end justify-between gap-y-2">
        <div className="ml-4 w-full">
          <p className=" text-2xl font-bold">{name}</p>
          <p>總{type}量：{count}</p>
        </div>
        <ThemeButton className="max-w-40 min-w-40 w-full">前往個人檔案</ThemeButton>
      </div>
    </div>
  )
}

export default UserItem;