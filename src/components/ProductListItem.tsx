import { Link } from "react-router-dom";

type ProductListItemProps = {
  smartphone: Object;
};

export const ProductListItem = (props: ProductListItemProps) => {
  const { smartphone } = props;

  return (
    <Link
      to={"#"}
      className="relative w-full h-[315px] border border-gray-825 p-3 flex flex-col justify-between overflow-hidden"
      key={smartphone.id}
    >
      <div className="absolute right-2 top-4">
        <span className="font-extrabold text-xl bg-red-500 text-white px-5 py-2 uppercase">
          Save
        </span>
      </div>

      <div className="flex justify-center items-center h-4/6">
        <img src={smartphone.images[0]} className="max-w-full object-contain" />
      </div>

      <div className="flex flex-col justify-end items-start h-2/6">
        <div className="flex flex-col items-start mt-2">
          <div className="flex items-start space-x-1 text-gray-400 strike-center">
            <span className="text-[19px] font-bold leading-none">WAS 1</span>
            <span className="text-[14px] font-bold leading-none">1</span>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-1">
        <span className="font-sans text-[40px] lg:text-[42px] font-bold leading-none">
          1
        </span>

        <div className="flex flex-col">
          <span className="font-sans text-3xl font-bold leading-none">1</span>
        </div>
      </div>

      <div className="flex items-start space-x-1">
        <span className="font-sans text-[40px] lg:text-[42px] font-bold leading-none">
          1
        </span>

        <div className="flex flex-col">
          <span className="font-sans text-3xl font-bold leading-none">1</span>
        </div>
      </div>

      <div className="font-sans-condensed text-sm lg:text-xl font-bold text-black">
        {smartphone.title}
      </div>
      <div className="absolute bottom-2 right-2">
        <button className="focus:outline-none p-2 rounded-full bg-black">
          <i className="far fa-heart text-3xl text-white "></i>
        </button>
      </div>
    </Link>
  );
};
