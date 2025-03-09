const SectionMenu = ({
  menu,
  callback,
}: {
  menu: Set<string>;
  callback: (name: string, i: number) => void;
}) => {
  return (
    <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
      {[...menu].map((res, i) => (
        <div
          key={res + "_" + i}
          onClick={() => callback(res, i)}
          className="border border-gray-500 p-4 w-70 text-center cursor-pointer"
        >
          <p>{res}</p>
        </div>
      ))}
    </main>
  );
};

export default SectionMenu;
