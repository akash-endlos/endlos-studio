import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import { hammenuItems } from "@/allcontent/hamBurgerData";
import Link from "next/link";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  const AccordionItem = ({ title, children,link }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div onClick={toggleAccordion} className="accordion-item">
        <div className="accordion-header flex justify-between py-5">
          <Link href={link}>
          <div
            className="accordion-button font-semibold hover:text-gray-200 "
            type="button"
           
          >
            {title}
          </div>
          </Link>
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
                <AccordionItem title={item.main} link={item.link}>
                  {item?.children &&
                    item?.children?.map((subitem) => (
                      <AccordionItem title={subitem.childmenu} link={subitem.link}>
                        {subitem?.subchildren?.map((subchildmenu) => (
                          <AccordionItem title={subchildmenu.subchild} link={subchildmenu.link}>
                            {subchildmenu?.subgrandchildren &&
                              subchildmenu?.subgrandchildren?.map(
                                (subgrandmenu) => (
                                  <AccordionItem
                                    link={subgrandmenu.link}
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

