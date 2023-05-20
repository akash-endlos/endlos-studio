import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import { hammenuItems } from "@/allcontent/hamBurgerData";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="accordion-item">
        <div className="accordion-header flex justify-between py-5">
          <div
            className="accordion-button font-semibold hover:text-gray-200 "
            type="button"
            onClick={toggleAccordion}
          >
            {title}
          </div>
          <div>
           {!isOpen ? <AiFillCaretDown onClick={toggleAccordion}/> :<AiFillCaretUp onClick={toggleAccordion}/>}
          </div>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };

  return (
    <div className="lg:block xl:hidden 2xl:hidden">
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
        <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[300px] pb-10 transition duration-100 bg-[#161616] opacity-90 text-white overflow-scroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="accordion">
              {hammenuItems.map((item) => (
                <AccordionItem title={item.main}>
                  {item?.children &&
                    item?.children?.map((subitem) => (
                      <AccordionItem title={subitem.childmenu}>
                        {subitem?.subchildren?.map((subchildmenu) => (
                          <AccordionItem title={subchildmenu.subchild}>
                            {subchildmenu?.subgrandchildren &&
                              subchildmenu?.subgrandchildren?.map(
                                (subgrandmenu) => (
                                  <AccordionItem
                                    title={subgrandmenu.subchild}
                                  ></AccordionItem>
                                )
                              )}
                          </AccordionItem>
                        ))}
                      </AccordionItem>
                    ))}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HamburgerMenu;

{
  /* <div className="relative px-5">
          <div className="flex justify-between items-center py-4 px-5 relative">
            <span>asd</span>
            <AiFillCaretDown />
            <div className="absolute top-10 w-full flex justify-between items-center py-4 px-5">
              <span>asda1</span>
              <AiFillCaretDown />
              <div className="absolute top-10 w-full flex justify-between items-center py-4 px-10">
              <span>asda1</span>
              <AiFillCaretDown />
            </div>
            </div>
          </div>
          </div> */
}
