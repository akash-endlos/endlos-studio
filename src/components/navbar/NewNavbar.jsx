import { menuItems } from "@/allcontent/navdata";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const NewNavbar = () => {
  const MultiSubNestedMenu = ({ subchildrenMenu }) => (
    <ul className="absolute right-0 top-0 bg-[#111111] w-[170px] py-2">
      {subchildrenMenu &&
        subchildrenMenu.map((item) => (
          <li className="px-2 py-2 relative cursor-pointer pl-5" key={item.subchild}>
            {/* <span className="font-semibold text-sm">{item.subchild}</span> */}
            <div className="flex justify-between">
              <Link href={{
                pathname:`${item.link}`,
                query:{
                  id:`${item.id}`
                }
              }}><div className="font-semibold text-sm">{item.subchild}</div></Link>
              {item.subgrandchildren && <AiFillCaretRight />}
            </div>
          </li>
        ))}
    </ul>
  );

  const SubNestedMenu = ({ subchildrenMenu }) => (
    <ul className="absolute right-0 top-0 bg-[#111111] w-[170px] py-2">
      {subchildrenMenu &&
        subchildrenMenu.map((item) => (
          <li className="px-2 py-2 relative cursor-pointer pl-5" key={item.subchild}>
            {/* <span className="font-semibold text-sm">{item.subchild}</span> */}
            <div className="flex justify-between">
              <Link href={{
                pathname:`${item.link}`,
                query:{
                  id:`${item.id}`
                }
              }}><div className="font-semibold text-sm">{item.subchild}</div></Link>
              {item.subgrandchildren && <AiFillCaretRight />}
            </div>
            {item.subgrandchildren && (
              <MultiSubNestedMenu subchildrenMenu={item.subgrandchildren} />
            )}
          </li>
        ))}
    </ul>
  );

  const DropdownMenu = ({ childMenu }) => (
    <ul className="absolute xl:right-32 md:right-40 top-24 bg-[#111111] w-[170px] py-2">
      {childMenu.map((child) => (
        <li className="py-3 relative cursor-pointer px-2 pl-5" key={child.childmenu}>
          <div className="flex justify-between">
            <Link href={child.link}><div className="font-semibold text-sm">{child.childmenu}</div></Link>
            {child.subchildren && <AiFillCaretRight />}
          </div>
          {child.subchildren && (
            <SubNestedMenu subchildrenMenu={child.subchildren} />
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="hidden xl:block z-20">
      <ul className="flex justify-between items-center gap-4">
        {menuItems.map((item) => (
          <li className="relative py-10 cursor-pointer" key={item.main}>
            <Link href={item.link}><span className="font-semibold">{item.main}</span></Link>
            {item.children && <DropdownMenu childMenu={item.children} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewNavbar;
