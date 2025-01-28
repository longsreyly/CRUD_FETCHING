import Link from "next/link";

const FooterComponent = () => {
    return(
        <>
         {/* Footer */}
      <div className="bg-gray-100" style={{ marginTop: "100px" }}>
        <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-pink-600 font-bold">Menu</div>
            <ul>
              <li className="my-2">
                <Link className="hover:text-pink-600" href="/">Home</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-pink-600" href="/about">About</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-pink-600" href="/contact">FeedBack</Link>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-xl text-pink-600 mb-4">Componentity</h3>
            <p className="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-pink-600 font-bold">Contact Us</div>
            <ul>
              <li className="my-2">
                <Link className="hover:text-pink-600" href="#">product@gmail.com</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-pink-600" href="#">contact@company.com</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link href="#" className="w-6 mx-1">
              <img src="tweet.svg"></img>
            </Link>
            <Link href="#" className="w-6 mx-1">
              <img src="facebook.svg"></img>
            </Link>
            <Link href="#" className="w-6 mx-1">
              <img src="instagram.svg"></img>
            </Link>
          </div>
          <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
        </div>
      </div>
        </>
    )
}
export default FooterComponent;