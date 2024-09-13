import { CartButton } from "./CartButton"

export const Header = () => {
  return (
    <header className="w-full h-32 flex items-center bg-black">
      <div className="container flex justify-between items-center m-auto">
        <picture>
          <img src="https://utfs.io/f/ccd08d95-ad3a-4c44-9035-29c7a59c5c1f-1zbfv.png" alt="logo" />
        </picture>

        <div className="flex flex-col w-full">
          <div className="flex w-full justify-between">
            {/* TODO create search bar component */}
            <input type="text" name="search" id="" className="w-full" />
            {/* TODO create search bar component */}

            {/* TODO create proper button component */}
            <CartButton />
            {/* TODO create proper button component */}
          </div>

          <div className="flex justify-between items-center text-white">
            <div>
              Store
            </div>

            <div>
              Track order
            </div>

            <div>
              Auth
            </div>

            <div>
              Smartbuy points
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}