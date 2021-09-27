
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Documentation", href: "/documentation", current: false },
    { name: "Premium", href: "/premium", current: false },
    { name: "Dashboard", href: "/dashboard", current: false },
];

const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
}

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <nav>
                    <div className="max-w-full px-2 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start w-full">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/">
                                        <button className="font-bold text-white">LOGO</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "text-crusta"
                                                    : "text-gray-300 hover:text-white",
                                                "px-3 py-2 text-sm font-medium"
                                            )}
                                            aria-current={item.current ? "page" : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                                <Disclosure.Panel className="sm:hidden">
                                    <div className="absolute left-3 sm:left-10 top-16 px-1 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                <p
                                                    className={classNames(
                                                        item.current
                                                            ? " text-crusta"
                                                            : "text-gray-300 hover:text-white",
                                                        "inline px-1 py-2 text-base font-medium"
                                                    )}
                                                >
                                                    {item.name}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </Disclosure>
    );
}

export default Header