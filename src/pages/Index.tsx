import SectionItem from '../components/SectionItem';
import CardItem from '../components/CardItem';

function Index() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <SectionItem tit="最熱門釋出卡牌Top5">
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
          <CardItem name="阿勃梭魯ex" pic="https://asia.pokemon-card.com/tw/card-img/tw00008722.png" series="SV3" no="126/108"></CardItem>
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
        </SectionItem>
        <SectionItem tit="最熱門徵求卡牌Top5">
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
          <CardItem name="阿勃梭魯ex" pic="https://asia.pokemon-card.com/tw/card-img/tw00008722.png" series="SV3" no="126/108"></CardItem>
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
          <CardItem name="走路草" pic="https://asia.pokemon-card.com/tw/card-img/tw00009029.png" series="SV4a" no="001/190"></CardItem>
        </SectionItem>
        <SectionItem tit="最新釋出卡牌Top5">
          aaa
        </SectionItem>
        <SectionItem tit="最新徵求卡牌Top5">
          aaa
        </SectionItem>
        <SectionItem tit="最多釋出卡牌Top5">
          aaa
        </SectionItem>
        <SectionItem tit="最多徵求卡牌Top5">
          aaa
        </SectionItem>
      </div>
    </div>
  );
}



export default Index;
