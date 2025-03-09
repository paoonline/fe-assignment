import { EMenu, menuType } from "../constants";

const SectionMenuType = ({
  typeItem,
  menuList,
  callback,
}: {
  typeItem: EMenu;
  menuList: menuType[];
  callback: (data: menuType) => void;
}) => (
  <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start ml-5">
    <div className="border border-gray-500 p-4 w-70 text-center bg-gray-200 font-bold">
      {typeItem}
    </div>
    <div className="border border-gray-500 p-4 w-70 text-center h-200 mt-[-16px]">
      {menuList.map((res, i) => (
        <div
          onClick={() => callback(res)}
          key={res.name + "_" + i}
          className="border border-gray-500 p-4 w-60 text-center cursor-pointer mb-3"
        >
          <p>{res.name}</p>
        </div>
      ))}
    </div>
  </main>
);

export default SectionMenuType;
