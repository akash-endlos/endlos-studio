import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
import { hammenuItems } from "@/allcontent/hamBurgerData";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);
   
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
          {hammenuItems.map((item, index) => (
              <div className=" px-5">
                <div className="flex   justify-between items-center py-4 px-5 relative">
                  <span>{item.main}</span>
                  {item.children && <AiFillCaretDown />}
                </div>
                <div className=" w-full   px-5">
                  {item.children && item?.children?.map((subitem) => (
                    <>
                    <div className="flex justify-between items-center mt-2  ">
                      <span className="py-4">{subitem.childmenu}</span>
                      {subitem.subchildren && <AiFillCaretDown />}
                    </div>
                    {subitem?.subchildren?.map((subChildren)=>(
                        <div className="flex justify-between items-center  mt-2 ">
                        <span className="py-4">{subChildren.subchild}</span>
                      </div>
                    ))}
                    </>
                  ))}
                </div>
              </div>
          ))}
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
