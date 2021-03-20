import React from "react";
import Popper from "popper.js";
import Link from "next/link"

const Dropdown = (props) => {
    const { color, items, heading } = props

    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    // bg colors
    let bgColor;
    color === "white"
        ? (bgColor = "bg-gray-800")
        : (bgColor = "bg-" + color + "-500");

    return (
        <>
            <div className="flex flex-wrap">
                <div className="relative inline-flex w-full align-middle">
                    <button
                        className={
                            "text-white font-bold text-sm px-2 py-1 rounded outline-none focus:outline-none mx-1 " +
                            bgColor
                        }
                        style={{ transition: "all .15s ease" }}
                        type="button"
                        ref={btnDropdownRef}
                        onClick={() => {
                            dropdownPopoverShow
                                ? closeDropdownPopover()
                                : openDropdownPopover();
                        }}
                    >
                        {heading}
                    </button>
                    <div
                        ref={popoverDropdownRef}
                        className={
                            (dropdownPopoverShow ? "block " : "hidden ") +
                            (color === "white" ? "bg-white " : bgColor + " ") +
                            "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                        }
                        style={{ minWidth: "8rem" }}
                    >
                        <ul>
                            {items.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link as={`/item/${item.slug}`} href="/item/[id]">
                                            <a
                                                href="#pablo"
                                                className={
                                                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                                                    (color === "white" ? " text-gray-800" : "text-white")
                                                }
                                                onClick={e => e.preventDefault()}
                                            >
                                                {item.name}</a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="h-0 my-2 border border-t-0 border-gray-900 border-solid opacity-25" />
                        <a
                            href="#pablo"
                            className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                                (color === "white" ? " text-gray-800" : "text-white")
                            }
                            onClick={e => e.preventDefault()}
                        >
                            All languages
              </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown