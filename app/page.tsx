"use client";
import Button from "./components/Button";
// import Button from "./components/Button";
import SectionMenu from "./components/SectionMenu";
import SectionMenuType from "./components/SectionMenuType";
import { EMenu } from "./constants";
import useMenu from "./hooks/useMenu";

export default function Home() {
  const {
    vegetableLists,
    fruitLists,
    menuSets,
    onClickMenuLists,
    onClickMenuType,
  } = useMenu();

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button/>
      <main className="flex flex-row gap-4 row-start-2 items-center sm:items-start">
        <SectionMenu menu={menuSets} callback={onClickMenuLists}/>
        <SectionMenuType typeItem={EMenu.Fruit} menuList={fruitLists} callback={onClickMenuType}/>
        <SectionMenuType typeItem={EMenu.Vegetable} menuList={vegetableLists} callback={onClickMenuType}/>
      </main>
    </div>
  );
}
