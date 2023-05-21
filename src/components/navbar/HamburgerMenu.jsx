import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
import { hammenuItems } from "@/allcontent/hamBurgerData";
import Link from "next/link";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openSecondIndex, setOpenSecondIndex] = useState(null);
  const [openThirdIndex, setOpenThirdIndex] = useState(null);
  const handleDropdownThirdToggle = (index) => {
    setOpenThirdIndex(index === openThirdIndex ? null : index);
  };
  const handleDropdownSecondToggle = (index) => {
    setOpenSecondIndex(index === openSecondIndex ? null : index);
  };
  const handleDropdownToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
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

      {toggle && (
        <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[500px] pb-10 transition duration-100 bg-[#161616] opacity-90 text-white overflow-scroll">
          {hammenuItems.map((item, index) => (
            <div className="py-5 px-5" key={index}>
              <Link href={item.link}>
                <div
                  className="py-2"
                  onClick={() => handleDropdownToggle(index)}
                >
                  <div>{item.main}</div>
                </div>
              </Link>
              {openIndex === index &&
                item?.children?.map((childItem, childIndex) => (
                  <div key={childIndex}>
                    <Link href={childItem.link}>
                      <div
                        onClick={() => handleDropdownSecondToggle(childIndex)}
                      >
                        <div>{childItem.childmenu}</div>
                      </div>
                    </Link>
                    {openSecondIndex === childIndex &&
                      childItem?.subchildren?.map(
                        (subChildItem, subChildIndex) => (
                          <div className="py-2" key={subChildIndex}>
                            <Link href={subChildItem.link}>
                              <div
                                onClick={() =>
                                  handleDropdownThirdToggle(subChildIndex)
                                }
                              >
                                <div>{subChildItem.subchild}</div>
                              </div>
                            </Link>
                            {openThirdIndex === subChildIndex &&
                              subChildItem?.subgrandchildren?.map(
                                (subGrandChildItem, subGrandChildIndex) => (
                                  <div
                                    className="py-2"
                                    key={subGrandChildIndex}
                                  >
                                    <Link href={subGrandChildItem.link}>
                                      <div>
                                        <div>{subGrandChildItem.subchild}</div>
                                      </div>
                                    </Link>
                                  </div>
                                )
                              )}
                          </div>
                        )
                      )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
