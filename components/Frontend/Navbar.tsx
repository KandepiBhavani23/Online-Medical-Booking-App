"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import websiteLogo from "../../public/assets/websiteLogo.png";

interface NavLinks {
  id: number;
  title: string;
  href: string;
}

const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "Home",
    href: "/home",
  },
  {
    id: 2,
    title: "Find Doctor",
    href: "/find-doctor",
  },
  {
    id: 3,
    title: "TeleHealth Visit",
    href: "/telehealth-visit",
  },
  {
    id: 4,
    title: "InPerson Visit",
    href: "/person-visit",
  },
  {
    id: 5,
    title: "About",
    href: "/about",
  },
  {
    id: 6,
    title: "Be Service Provider",
    href: "/service-provider",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-10 w-full bg-white shadow-md shadow-purple-700">
      <nav
        className="flex items-center justify-between px-5 py-2 mx-auto"
        aria-label="Global">
        <div className="flex lg:flex-1 lg:gap-8">
          <Link href="#" className="-m-1.5 p-1.5">
            <Image
              src={websiteLogo}
              alt="medical-app-logo"
              width={80}
              height={80}
            />
          </Link>
          <Popover.Group className="hidden lg:flex lg:gap-x-6 items-center transition-all transform duration-1000">
            {navLinks?.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="text-sm font-semibold leading-6 text-[#251540]">
                {item.title}
              </Link>
            ))}
          </Popover.Group>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-800"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-100 bg-blue-700 rounded-md px-6 py-3">
            Log In <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                src={websiteLogo}
                alt="medical-app-logo"
                width={80}
                height={80}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-200"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300/60">
              <div className="space-y-2 py-6">
                {navLinks?.map((item) => (
                  <Link
                    href={item.href}
                    key={item.id}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50">
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-center py-6">
                <Link
                  href="#"
                  className="bg-blue-800 px-6 py-2.5 rounded-md text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
