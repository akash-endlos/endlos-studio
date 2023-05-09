import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
import { menuItems, navData } from "@/allcontent/navdata";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);
  function AccordionItem({ title, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpanded() {
      setIsExpanded(!isExpanded);
    }

    return (
      <div>
        <button onClick={toggleExpanded} className="flex items-center justify-between w-full py-2 px-4 text-lg font-semibold bg-[#161616] hover:bg-gray-500 focus:bg-gray-500 focus:outline-none">
          <span>{title}</span>
          <div className={`h-6 w-6 transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
            <AiFillCaretDown />
          </div>
        </button>
        <div className={`accordion-content ${isExpanded ? '' : 'hidden'} pl-6 bg-[#161616]`}>
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="lg:block xl:hidden 2xl:hidden ">
      {!toggle ? (
        <RxHamburgerMenu
          className="cursor-pointer"
          size={25}
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <RxCross2
          className="cursor-pointer"
          size={25}
          onClick={() => setToggle(!toggle)}
        />
      )}

      {toggle ? (
        <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[500px] pb-10 transition duration-100 bg-[#161616] text-white overflow-scroll">
          <div>
            {menuItems.map((item) => (
              <AccordionItem title={item.main}>
                {item.children.map((item) => (
                  <div className="p-4">{item.childmenu}</div>
                ))}
              </AccordionItem>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HamburgerMenu;


// <AccordionItem title="Accordion Item 1">
// <div className="p-4">Content for Accordion Item 1</div>
// </AccordionItem>
// <AccordionItem title="Accordion Item 2">
// <div className="p-4">Content for Accordion Item 2</div>
// <AccordionItem title="Nested Accordion Item 1">
//   <div className="p-4">Content for Nested Accordion Item 1</div>
// </AccordionItem>
// <AccordionItem title="Nested Accordion Item 2">
//   <div className="p-4">Content for Nested Accordion Item 2</div>
//   <AccordionItem title="Nested Nested Accordion Item 1">
//     <div className="p-4">Content for Nested Nested Accordion Item 1</div>
//   </AccordionItem>
// </AccordionItem>
// </AccordionItem>
// <AccordionItem title="Accordion Item 3">
// <div className="p-4">Content for Accordion Item 3</div>
// </AccordionItem>