import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faChevronUp, faXmark } from "@fortawesome/free-solid-svg-icons";
interface FilterCategoryProps {
  className?: string
  tit: string,
  obj: Array<string>,
  filterArray: string[];
  setFilterArray: React.Dispatch<React.SetStateAction<string[]>>;
}

function FilterBar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterArray, setFilterArray] = useState<string[]>([]);
  return (
    <div className={`relative mb-4`}>
      <div className="bg-gray-200 p-4 rounded-xl">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => { setIsFilterOpen(!isFilterOpen) }}>
          <div className="flex items-center gap-2">
            <p>篩選條件</p>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <FontAwesomeIcon icon={faChevronUp} className={`${isFilterOpen ? 'rotate-0' : 'rotate-180'}`} />
        </div>
        <div className={`${filterArray.length !== 0 ? 'flex' : 'hidden'} gap-2 py-2 flex-wrap`}>
          {filterArray.map(item => (
            <div className={`px-4 py-2 bg-lightBlue text-white rounded-full cursor-pointer`} onClick={() => {
              filterArray.includes(item)
                ? setFilterArray(filterArray.filter(currentItem => currentItem !== item))
                : setFilterArray([...filterArray, item]);
            }}>{item} <FontAwesomeIcon icon={faXmark} /></div>
          ))}
        </div>
        <div className={`${filterArray.length !== 0 ? 'block' : 'hidden'} bg-lightBlue px-4 py-2 text-white rounded-full cursor-pointer`} onClick={() => setFilterArray([])}>
          <p>清空</p>
        </div>
        <div className={`${isFilterOpen ? 'block' : 'hidden'} bg-gray-200 w-full`}>
          <FilterCategory
            obj={['草系', '火系', '電系', '格鬥系', '惡系', '普通系', '水系', '超系', '鋼系', '妖精系', '龍系']}
            tit="屬性"
            filterArray={filterArray}
            setFilterArray={setFilterArray}></FilterCategory>
          <FilterCategory
            obj={['寶可夢卡', '物品卡', '支援者卡', '競技場卡', '特殊能量卡', '基本能量卡']}
            tit="種類"
            filterArray={filterArray}
            setFilterArray={setFilterArray}></FilterCategory>
          <FilterCategory
            obj={['C', 'U', 'R', 'HR', 'RR', 'UR', 'SR', 'SSR', 'RRR', 'PR', 'TR', 'S', 'RAINBOW', 'CHR', 'CSR']}
            tit="稀有度"
            filterArray={filterArray}
            setFilterArray={setFilterArray}></FilterCategory>
          {/* <FilterCategory obj={['草系', '電系', '水系', '火系']} tit="系列"></FilterCategory> */}
        </div>
      </div>
    </div>
  );
}

function FilterCategory({ className = '', tit, obj, filterArray, setFilterArray }: FilterCategoryProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  return (
    <div className="py-2 border-b border-white last:border-b-0 cursor-pointer">
      <div className="flex items-center gap-2" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
        <p>{tit}</p>
        <div className={`toggle-plus w-3 h-3 ${isCategoryOpen ? '-active' : ''}`}></div>
      </div>
      <div className={`${isCategoryOpen ? 'flex' : 'hidden'} gap-2 mt-2 flex-wrap`}>
        {
          obj.map(item => (
            <div className={`${className} ${filterArray.includes(item) ? 'bg-lightBlue' : 'bg-gray-400'} px-4 py-2 text-white rounded-full`} onClick={() => {
              filterArray.includes(item)
                ? setFilterArray(filterArray.filter(currentItem => currentItem !== item))
                : setFilterArray([...filterArray, item]);
            }}>{item}</div>
          ))
        }
      </div>
    </div>
  );
}

export default FilterBar;