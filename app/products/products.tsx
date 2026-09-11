import React from "react";
import ProductItem from "../../components/ProductItem";

const productsData = [
  {
    title: "Crimson Luxe Gown – Elegant full-length dress",
    price: 100.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-1.webp",
  },
  {
    title: "Emerald Draped Dress",
    price: 120.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-2.webp",
  },
  {
    title: "Sapphire Silk Blouse",
    price: 80.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-3.webp",
  },
  {
    title: "Golden Evening Gown",
    price: 150.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-4.webp",
  },
  {
    title: "Ruby Red Cocktail Dress",
    price: 90.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-5.webp",
  },

  {
    title: "Emerald Draped Dress",
    price: 120.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-2.webp",
  },

  {
    title: "Sapphire Silk Blouse",
    price: 80.0,
    thumbnail: "https://readymadeui.com/images/fashion-img-3.webp",
  },
];

const Products = () => {
  return (
    <section className="mt-6 px-4 md:px-8" aria-label="products">
      <div className="max-w-7xl mx-auto">
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-1.webp"
                  alt="Crimson Luxe Gown"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Crimson Luxe Gown – Elegant full-length dress
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $100.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-2.webp"
                  alt="Emerald Draped Dress"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Emerald Draped Dress – Flowing cape-style gown
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $120.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-3.webp"
                  alt="Modern streetwear"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Minimalist Leather Tee Look – Modern streetwear
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $110.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-4.webp"
                  alt="Urban Knit Style"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Urban Knit Style – Casual street look with hoodie
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $115.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-5.webp"
                  alt="Bold Print Winter"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Bold Print Winter Set – Statement coat outfit
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $105.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-6.webp"
                  alt="Floral Puff Sleeve"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Floral Puff Sleeve Dress – Feminine and casual
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $140.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-7.webp"
                  alt="Striped Tee & Blazer"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Striped Tee & Blazer – Smart-casual streetwear
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $130.00
                </p>
              </div>
            </div>
          </li>

          <li className="group flex flex-col transition-all">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="aspect-[3/4] bg-slate-100 w-full overflow-hidden">
                <img
                  src="https://readymadeui.com/images/fashion-img-9.webp"
                  alt="Tank Top & Denim"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </a>

            <div className="py-4 relative">
              <div
                className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0
                  group-hover:bottom-20 group-focus-within:bottom-20
                  lg:bottom-5 lg:opacity-0 lg:bg-white 
                  lg:group-hover:opacity-100 lg:group-focus-within:opacity-100
                  max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60 dark:bg-neutral-900 max-lg:dark:bg-neutral-900/60"
              >
                <button
                  type="button"
                  title="Add to wishlist"
                  aria-label="add to wishlist"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add to cart"
                  aria-label="add to cart"
                  className="bg-transparent outline-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-900 size-5 inline-block dark:fill-slate-50"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="z-20 relative">
                <h3 className="text-sm font-semibold text-slate-900 truncate sm:text-base dark:text-slate-50">
                  Tank Top & Denim – Everyday stylish look
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2 dark:text-slate-400">
                  $130.00
                </p>
              </div>
            </div>
          </li>

          <ProductItem
            title="Crimson Luxe Gown – Elegant full-length dress"
            price={100.0}
            thumbnail="https://readymadeui.com/images/fashion-img-1.webp"
          />
        </ul>
      </div>
    </section>
  );
};

export default Products;
