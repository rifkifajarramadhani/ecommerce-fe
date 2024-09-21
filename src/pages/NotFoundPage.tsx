import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <picture className="block max-w-[430px] md:max-w-[750px] m-auto">
        <img
          src="https://utfs.io/f/KIQHcaf9YatfTPduMZJFtS7rMvlLdPgNAq5RnUuj3EcQ2YIT"
          alt=""
        />
      </picture>

      <p className="text-black font-medium uppercase text-sm md:text-lg leading-5 md:leading-6 mb-10">
        The page you are looking for cannot be found
      </p>

      <Button
        onClick={() => history.back()}
        variant={"black"}
        className="font-bold uppercase w-44 h-12"
      >
        Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
