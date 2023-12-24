import SectionItem from '../components/SectionItem';
import CardItem from '../components/CardItem';
import UserItem from '../components/UserItem';
import SlideBanner from '../components/SlideBanner';
import CardData from '../data/CardData.json';
import UserData from '../data/UserData.json';
function Index() {
  return (
    <div>
      <SlideBanner></SlideBanner>
      <div className="grid grid-cols-1 m-auto md:max-w-screen-lg md:grid-cols-2 gap-x-10">
        <SectionItem tit="最熱門釋出卡牌Top5">
          {CardData.slice(0, 5).map((item, index) => (
            <CardItem key={index} name={item.name} pic={item.pic} series={item.series} no={item.no}></CardItem>
          ))}
        </SectionItem>
        <SectionItem tit="最熱門徵求卡牌Top5">
          {CardData.slice(0, 5).map((item, index) => (
            <CardItem key={index} name={item.name} pic={item.pic} series={item.series} no={item.no}></CardItem>
          ))}
        </SectionItem>
        <SectionItem tit="最新釋出卡牌Top5">
          {CardData.slice(0, 5).map((item, index) => (
            <CardItem key={index} name={item.name} pic={item.pic} series={item.series} no={item.no}></CardItem>
          ))}
        </SectionItem>
        <SectionItem tit="最新徵求卡牌Top5">
          {CardData.slice(0, 5).map((item, index) => (
            <CardItem key={index} name={item.name} pic={item.pic} series={item.series} no={item.no}></CardItem>
          ))}
        </SectionItem>
        <SectionItem tit="最多釋出卡牌Top5">
          {UserData.slice(0, 5).map((item, index) => (
            <UserItem key={index} name={item.name} pic={item.pic} count={item.count} type={'釋出'}></UserItem>
          ))}
        </SectionItem>
        <SectionItem tit="最多徵求卡牌Top5">
          {UserData.slice(0, 5).map((item, index) => (
            <UserItem key={index} name={item.name} pic={item.pic} count={item.count} type={'徵求'}></UserItem>
          ))}
        </SectionItem>
      </div>
    </div>
  );
}



export default Index;
