import { useState } from "react";
import { EMenu, menu, menuType } from "../constants";

const useMenu = () => {
  const [fruitLists, setFruitLists] = useState<menuType[]>([]);
  const [vegetableLists, setVegetableLists] = useState<menuType[]>([]);
  const [menuSets, setMenuSets] = useState(
    new Set<string>(menu.map((res) => res.name))
  );

  const onClickMenuLists = (name: string, index: number) => {
    const nameAtIndex = Array.from(menuSets)[index];
    const item = menu.find((res) => res.name === nameAtIndex);
    const type = item?.type || '';

    const newMenuLists = {
      type,
      name,
    } as menuType;
    setMenuSets(
      (menuSetPrev) =>
        new Set([...menuSetPrev].filter((res) => res !== name))
    );
    if (type === EMenu.Fruit) {
      setFruitLists((fruitListsPrev) => [...fruitListsPrev, newMenuLists]);
    }
    if (type === EMenu.Vegetable) {
      setVegetableLists((vegetableListsPrev) => [
        ...vegetableListsPrev,
        newMenuLists,
      ]);
    }
    setTimeout(() => {
      onClickMenuType({ type, name });
    }, 5000);
  };

  const onClickMenuType = ({ type, name }: menuType) => {
    setMenuSets((menuSetPrev) => new Set([...menuSetPrev, name]));
    if (type === EMenu.Fruit) {
      setFruitLists((fruitListsPrev) =>
        fruitListsPrev.filter((res) => res.name !== name)
      );
    }
    if (type === EMenu.Vegetable) {
      setVegetableLists((vegetableListsPrev) =>
        vegetableListsPrev.filter((res) => res.name !== name)
      );
    }
  };

  return {
    fruitLists,
    vegetableLists,
    menuSets,
    onClickMenuLists,
    onClickMenuType,
  };
};

export default useMenu
