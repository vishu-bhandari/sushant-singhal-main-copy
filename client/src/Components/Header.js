import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Empower You",
    description: "One to One Coaching Programme",
    href: "/service",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Confident Orators",
    description: "Excel your oration with our group coaching",
    href: "/service",
    icon: ChartPieIcon,
  },
  {
    name: "Eloquence pe charcha",
    description: "Join our Community of Eloquent Speakers",
    href: "/service",
    icon: FingerPrintIcon,
  },
];
const callsToAction = [
  {
    name: "Youtube Channel",
    href: "https://www.youtube.com/@sushanttalks1049",
    icon: PlayCircleIcon,
  },
  { name: "Contact ", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8  "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 gap-1">
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect
              x="3"
              y="1"
              width="7"
              height="12"
              className="text-tertiary"
            ></rect>
            <rect
              x="3"
              y="17"
              width="7"
              height="6"
              className="text-primary"
            ></rect>
            <rect
              x="14"
              y="1"
              width="7"
              height="6"
              className="text-primary"
            ></rect>
            <rect
              x="14"
              y="11"
              width="7"
              height="12"
              className="text-secondary"
            ></rect>
          </svg>
          <NavLink to="/" className="-m-1.5 p-1.5 sm:text-lg font-semibold  text-md">
           
              <span className="sm:text-2xl  text-xl ">S</span>ushant{" "}
              <span className="sm:text-2xl text-xl ">S</span>inghal
              <hr className="border w-1/3 border-secondary opacity" />
              <hr className="border w-1/4 border-tertiary opacity mt-0.5" />
              <hr className="border w-1/5 border-primary opacity mt-0.5" />
            
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </NavLink>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-[100] mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-secondary "
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <NavLink
                          to='/service'
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </NavLink>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <NavLink
            to="/gallary"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </NavLink>
        </Popover.Group>
        
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-[100]" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
           
            <div className="flex lg:flex-1 gap-1">
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect
                  x="3"
                  y="1"
                  width="7"
                  height="12"
                  className="text-tertiary"
                ></rect>
                <rect
                  x="3"
                  y="17"
                  width="7"
                  height="6"
                  className="text-primary"
                ></rect>
                <rect
                  x="14"
                  y="1"
                  width="7"
                  height="6"
                  className="text-primary"
                ></rect>
                <rect
                  x="14"
                  y="11"
                  width="7"
                  height="12"
                  className="text-secondary"
                ></rect>
              </svg>
              <NavLink to="/" className="-m-1.5 p-1.5 sm:text-lg font-semibold  text-md">
               
                  <span className="sm:text-2xl  text-xl ">S</span>ushant{" "}
                  <span className="sm:text-2xl text-xl ">S</span>inghal
                  <hr className="border w-1/3 border-secondary opacity" />
                  <hr className="border w-1/4 border-tertiary opacity mt-0.5" />
                  <hr className="border w-1/5 border-primary opacity mt-0.5" />
                
              </NavLink>
            </div>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <NavLink
              to="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Home
            </NavLink>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Service
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </NavLink>
                <NavLink
                  to="/gallary"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </NavLink>
              </div>
             
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
