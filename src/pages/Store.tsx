import {CardItem} from "../components/CardItem";
import FilterBar from "../components/FilterBar";
import CardData from '../data/CardData.json';
function Store() {
  return (
    <div>
      <FilterBar></FilterBar>
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-10">
      {CardData.map((item, index) => (
        <CardItem className="max-w-72 md:max-w-sm h-full" key={index} name={item.name} pic={item.pic} series={item.series} no={item.no}></CardItem>
      ))}
      </div>
    </div>
  );
}

export default Store;
