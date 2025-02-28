import Link from "next/link";

const FooterComponent = () => (
  <div className="bg-gray-100 mt-24">
    <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
      <div className="p-5 sm:w-2/12 border-r">
        <div className="text-sm uppercase text-pink-600 font-bold">Menu</div>
        <ul>
          {["/", "/about", "/contact"].map((href, idx) => (
            <li key={idx} className="my-2">
              <Link className="hover:text-pink-600" href={href}>
                {["Home", "About", "FeedBack"][idx]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 sm:w-7/12 border-r text-center">
        <h3 className="font-bold text-xl text-pink-600 mb-4">Componentity</h3>
        <p className="text-gray-500 text-sm mb-10">
          Componentity is more than just a development technique; it’s a mindset
          shift that allows teams to work more efficiently, develop faster, and
          maintain applications over time. By embracing the power of components,
          developers can ensure their applications remain flexible, scalable,
          and maintainable.
        </p>
      </div>
      <div className="p-5 sm:w-3/12">
        <div className="text-sm uppercase text-pink-600 font-bold">  Contact Us </div>
        <ul>
          {["product@gmail.com", "contact@company.com"].map((email, idx) => (
            <li key={idx} className="my-2">
              <Link className="hover:text-pink-600" href="#">
                {email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        {["tweet", "facebook", "instagram"].map((icon) => (
          <Link key={icon} href="#" className="w-6 mx-1">
            <img src={`${icon}.svg`} alt={icon} />
          </Link>
        ))}
      </div>
      <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
    </div>
  </div>
);

export default FooterComponent;
