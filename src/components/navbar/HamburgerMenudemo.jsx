// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";
// import { AiFillCaretDown } from "react-icons/ai";
// import { hammenuItems } from "@/allcontent/hamBurgerData";

// const HamburgerMenu = () => {
//   const [toggle, setToggle] = useState(false);

//   function AccordionItem({ title, children }) {
//     const [isExpanded, setIsExpanded] = useState(false);

//     function toggleExpanded() {
//       setIsExpanded(!isExpanded);
//     }

//     return (
//       <div>
//         <div
//           onClick={toggleExpanded}
//           className="flex items-center justify-between w-full py-2 px-4 text-lg font-semibold bg-[#161616] hover:bg-gray-500 focus:bg-gray-500 focus:outline-none"
//         >
//           <span>{title}</span>
//           <div
//             className={`h-6 w-6 transform ${isExpanded ? "rotate-180" : ""}`}
//             viewBox="0 0 24 24"
//           >
//             {children && <AiFillCaretDown />}
//           </div>
//         </div>
//         <div className={`accordion-content ${isExpanded ? "" : "hidden"} pl-6 bg-[#161616]`}>
//           {children && children.map((childItem) => (
//             <AccordionItem key={childItem.main} title={childItem.main} children={childItem.children} />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="lg:block xl:hidden 2xl:hidden">
//       {!toggle ? (
//         <RxHamburgerMenu
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       ) : (
//         <RxCross2
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       )}

//       {toggle ? (
//         <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[500px] pb-10 transition duration-100 bg-[#161616] opacity-90 text-white overflow-scroll">
//           {hammenuItems && hammenuItems.map((item) => (
//             <AccordionItem key={item.main} title={item.main} children={item.children} />
//           ))}
//         </div>
//       ) : (
//         null
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;



// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";
// import { AiFillCaretDown } from "react-icons/ai";
// import { hammenuItems } from "@/allcontent/hamBurgerData";
// import { menuItems } from "@/allcontent/navdata";

// const HamburgerMenu = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className="lg:block xl:hidden 2xl:hidden">
//       {!toggle ? (
//         <RxHamburgerMenu
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       ) : (
//         <RxCross2
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       )}

//       {toggle ? (
//         <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[500px] pb-10 transition duration-100 bg-[#161616] opacity-90 text-white overflow-scroll">
//           {menuItems.map((item, index) => (
//               <div className=" px-5">
//                 <div className="flex justify-between items-center py-4 px-5 relative">
//                   <span>{item.main}</span>
//                   {item.children && <AiFillCaretDown />}
//                 </div>
//                 <div className=" w-full  py-4 px-5">
//                   {item.children && item?.children?.map((subitem) => (
//                     <>
//                     <div className="flex justify-between items-center">
//                       <span className="py-4">{subitem.childmenu}</span>
//                       {subitem.subchildren && <AiFillCaretDown />}
//                     </div>
//                     {subitem?.subchildren?.map((subChildren)=>(
//                         <div className="flex justify-between items-center">
//                         <span className="py-4">{subChildren.subchild}</span>
//                         {/* <AiFillCaretDown /> */}
//                       </div>
//                     ))}
//                     </>
//                   ))}
//                 </div>
//               </div>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default HamburgerMenu;






// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";
// import { AiFillCaretDown } from "react-icons/ai";
// import { hammenuItems } from "@/allcontent/hamBurgerData";
// import { menuItems } from "@/allcontent/navdata";

// const HamburgerMenu = () => {
//   const [toggle, setToggle] = useState(false);
   
//   return (
//     <div className="lg:block xl:hidden 2xl:hidden">
//       {!toggle ? (
//         <RxHamburgerMenu
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       ) : (
//         <RxCross2
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       )}

//       {toggle ? (
//         <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[500px] pb-10 transition duration-100 bg-[#161616] opacity-90 text-white overflow-scroll">
//           {menuItems.map((item, index) => (
//               <div className=" px-5">
//                 <div className="flex justify-between items-center py-4 px-5 relative">
//                   <span>{item.main}</span>
//                   {item.children && <AiFillCaretDown />}
//                 </div>
//                 <div className=" w-full  py-4 px-5">
//                   {item.children && item?.children?.map((subitem) => (
//                     <>
//                     <div className="flex justify-between items-center">
//                       <span className="py-4">{subitem.childmenu}</span>
//                       {subitem.subchildren && <AiFillCaretDown />}
//                     </div>
//                     {subitem?.subchildren?.map((subChildren)=>(
//                         <div className="flex justify-between items-center">
//                         <span className="py-4">{subChildren.subchild}</span>
//                         {/* <AiFillCaretDown /> */}
//                       </div>
//                     ))}
//                     </>
//                   ))}
//                 </div>
//               </div>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default HamburgerMenu;




// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";
// import { AiFillCaretDown } from "react-icons/ai";
// import { hammenuItems } from "@/allcontent/hamBurgerData";
// import { menuItems } from "@/allcontent/navdata";

// const HamburgerMenu = () => {
//   const [toggle, setToggle] = useState(false);
   
//   return (
//     <div className="lg:block xl:hidden 2xl:hidden">
//       {!toggle ? (
//         <RxHamburgerMenu
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       ) : (
//         <RxCross2
//           className="cursor-pointer"
//           size={25}
//           onClick={() => setToggle(!toggle)}
//         />
//       )}

//       {toggle ? (
//         <div className="fixed top-[90px] z-50 left-0 w-full h-auto max-h-[300px] pb-10 transition duration-100 bg-[#161616] opacity-90 text-white overflow-scroll">
//           {menuItems.map((item, index) => (
//               <div className=" px-5">
//                 <div className="flex   justify-between items-center py-4 px-5 relative">
//                   <span>{item.main}</span>
//                   {item.children && <AiFillCaretDown />}
//                 </div>
//                 <div className=" w-full   px-5">
//                   {item.children && item?.children?.map((subitem) => (
//                     <>
//                     <div className="flex justify-between items-center mt-2  ">
//                       <span className="py-4">{subitem.childmenu}</span>
//                       {subitem.subchildren && <AiFillCaretDown />}
//                     </div>
//                     {subitem?.subchildren?.map((subChildren)=>(
//                         <div className="flex justify-between items-center  mt-2 ">
//                         <span className="py-4">{subChildren.subchild}</span>
//                         {/* <AiFillCaretDown /> */}
//                       </div>
//                     ))}
//                     </>
//                   ))}
//                 </div>
//               </div>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default HamburgerMenu;



