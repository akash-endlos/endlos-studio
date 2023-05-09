import { menuItems } from "@/allcontent/navdata";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const NewNavbar = () => {
  // const menuItems = [
  //   {
  //     main: "Portfolio",
  //     children: [
  //       {
  //         childmenu: "Archviz",
  //         subchildren: [
  //           {
  //             subchild: "Walkthrough",
  //           },
  //           {
  //             subchild: "AR & VR application",
  //           },
  //         ],
  //       },
  //       {
  //         childmenu: "Pre Visualization",
  //         subchildren: [
  //           {
  //             subchild: "Pre Production",
  //             subgrandchildren: [
  //               {
  //                 subchild: "Storyboard",
  //               },
  //               {
  //                 subchild: "Animation",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         childmenu: "Visual production",
  //         subchildren: [
  //           {
  //             subchild: "Enviorment Design",
  //           },
  //           {
  //             subchild: "Augmented Reality",
  //           },
  //           {
  //             subchild: "Virtual Reality",
  //           },
  //         ],
  //       },
  //       {
  //         childmenu: "Game Development",
  //       },
  //     ],
  //   },
  //   {
  //     main: "Blog",
  //     children: [
  //       {
  //         childmenu: "What's New",
  //       },
  //       {
  //         childmenu: "Trending",
  //       },
  //       {
  //         childmenu: "News",
  //       },
  //       {
  //         childmenu: "Customer Reviews",
  //       },
  //       {
  //         childmenu: "Guides",
  //       },
  //     ],
  //   },
  //   {
  //     main: "Company",
  //     children: [
  //       {
  //         childmenu: "About Us",
  //       },
  //       {
  //         childmenu: "Careers",
  //       },
  //       {
  //         childmenu: "Services",
  //         subchildren: [
  //           {
  //             subchild: "Pre Visualization",
  //             subgrandchildren: [
  //               {
  //                 subchild: "Pre Production",
  //                 subgrandchildren: [
  //                   {
  //                     subchild: "Storyboard",
  //                   },
  //                   {
  //                     subchild: "Animation",
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //           {
  //             subchild: "Virtual production",
  //           },
  //           {
  //             subchild: "Game Development",
  //           },
  //           {
  //             subchild: "Archviz",
  //             subgrandchildren: [
  //               {
  //                 subchild: "Walkthrough",
  //               },
  //               {
  //                 subchild: "AR & VR application",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         childmenu: "Our Vision",
  //       },
  //       {
  //         childmenu: "FAQ",
  //       },
  //     ],
  //   },
  //   {
  //     main: "Contact Us",
  //     children: [
  //       {
  //         childmenu: "Write to us",
  //       },
  //       {
  //         childmenu: "Book a meeting",
  //       },
  //     ],
  //   },
  // ];

  const SubNestedMenu = ({ subchildrenMenu }) => (
    <ul className="absolute right-0 top-0 bg-[#111111] w-[170px] py-2">
      {subchildrenMenu &&
        subchildrenMenu.map((item) => (
          <li className="px-2 py-2 relative cursor-pointer pl-5" key={item.subchild}>
            {/* <span className="font-semibold text-sm">{item.subchild}</span> */}
            <div className="flex justify-between">
              <Link href={item.link}><div className="font-semibold text-sm">{item.subchild}</div></Link>
              {item.subgrandchildren && <AiFillCaretRight />}
            </div>
            {item.subgrandchildren && (
              <SubNestedMenu subchildrenMenu={item.subgrandchildren} />
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
    <div className="hidden xl:block">
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
