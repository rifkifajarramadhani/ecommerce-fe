export const Join = () => {
  return (
    <section className="px-5 md:px-0 mb-10 md:mb-0">
      <div className="flex flex-col md:flex-row md:bg-[#F0EEEC] md:p-8 lg:p-24 justify-center items-center">
        <picture className="me-3 w-[85px] md:w-[180px]">
          <img
            src="https://utfs.io/f/KIQHcaf9Yatf9R0WmVbsV0xJzTmvjMNW17gKI4ZwcnAPb6Ee"
            alt=""
          />
        </picture>

        <div>
          <p className="font-medium text-center text-7xl md:text-left md:text-[40px] leading-10 uppercase mb-2">
            Join Our <span className="font-bold">WhatsApp</span>
          </p>

          <p className="text-center text-2xl md:text-left md:text-4xl font-sans-condensed leading-8 mb-5">
            Get the latest news, offers and promotions on your phone.
          </p>

          <div className="flex flex-col md:flex-row">
            <input
              className="mb-3 md:mb-0 md:me-3 bg-[#F0EEEC] md:bg-white rounded-none border-none xs:w-[400px] uppercase"
              type="text"
              name="subscribe"
              id=""
              placeholder="Cellphone Number"
            />
            <button className="transition-all bg-black text-white hover:bg-brand2 px-8 py-4 uppercase font-bold text-xl leading-4 text-nowrap">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
