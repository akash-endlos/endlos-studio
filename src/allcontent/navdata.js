

export const menuItems = [
  {
    main: "Home",
    link: "/"
  },
  {
    main: "Services",
    link: "",
    children: [
      {
        childmenu: "Virtual production",
        link: "/services/virtual-production",
      },
      {
        childmenu: "Pre Visualization",
        link: "/services/pre-visualization",
      },
      // {
      //   childmenu: "Game Development",
      //   link: "",
      // },
      {
        childmenu: "Archviz",
        link: "",
        subchildren: [
          {
            subchild: "Walkthrough",
            link: "/services/architectural-visualization/walkthrough",
          },
          {
            subchild: "AR & VR application",
            link: "/services/architectural-visualization/ar-vr",
          },
        ]
      },
    ]
  },
  // {
  //   main: "Portfolio",
  //   link: "",
  //   children: [
  //     {
  //       childmenu: "Archviz",
  //       link: "",
  //       id: "",
  //       subchildren: [
  //         {
  //           subchild: "About Archviz",
  //           link: "/portfolio/archviz",
  //           id: "archviz"
  //         },
  //         {
  //           subchild: "Interactive Archviz",
  //           link: "/portfolio/archviz",
  //           id: "archvizinteractive"
  //         },
  //       ],
  //     },
  //     {
  //       childmenu: "Pre Visualization",
  //       link: "/portfolio/pre-visualization",
  //       id: "",
  //     },
  //     {
  //       childmenu: "Virtual production",
  //       link: "",
  //       id: "",
  //       subchildren: [
  //         {
  //           subchild: "Enviorment Design",
  //           link: "/portfolio/virtual-production",
  //           id: "environment"
  //         },
  //         {
  //           subchild: "AR & VR",
  //           link: "/portfolio/virtual-production",
  //           id: "arvr"
  //         },
  //       ],
  //     },
  //     {
  //       childmenu: "Game Development",
  //       link: "/portfolio/game-development",
  //       id: "",
  //     },
  //   ],
  // },
  {
    main: "Blog",
    link: "/blog",
    id: "",
  },
  {
    main: "Company",
    link: "",
    id: "",
    children: [
      {
        childmenu: "About Us",
        link: "/company/about-us",
        id: "",
      },
      // {
      //   childmenu: "Careers",
      //   link: "/company/careers",
      //   id: "",
      // },
      // {
      //   childmenu: "Services",
      //   link: "",
      //   id: "",
      //   subchildren: [
      //     {
      //       subchild: "Pre Visualization",
      //       link: "/company/services",
      //       id: "servicespv"
      //     },
      //     {
      //       subchild: "Virtual production",
      //       link: "/company/services",
      //       id: "servicesvp"
      //     },
      //     {
      //       subchild: "Game Development",
      //       link: "/company/services",
      //       id: "servicesgamedevelopment",
      //     },
      //     {
      //       subchild: "Archviz",
      //       link: "",
      //       id: "",
      //       subgrandchildren: [
      //         {
      //           subchild: "Walkthrough",
      //           link: "/company/services",
      //           id: "serviceswalktrough",
      //         },
      //         {
      //           subchild: "AR & VR application",
      //           link: "/company/services",
      //           id: "servicesarchviz",
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        childmenu: "Our Vision",
        link: "/company/our-vision",
        id: "",
      },
      {
        childmenu: "FAQ",
        link: "/company/faq",
        id: "",
      },
    ],
  },
  {
    main: "Contact Us",
    link: "",
    id: "",
    children: [
      {
        childmenu: "Write to us",
        link: "/contact-us/write-to-us",
        id: "",
      },
    ],
  },
];






// export const menuItems = [
//   {
//     main: "Portfolio",
//     link:"",
//     children: [
//       {
//         childmenu: "Archviz",
//         link:"",
//         id:"",
//         subchildren: [
//           {
//             subchild: "Walkthrough",
//             link:"/portfolio/archviz",
//             id:"archvizwalkthrough"
//           },
//           {
//             subchild: "Interactive Archviz",
//             link:"/portfolio/archviz",
//             id:"archvizinteractive"
//           },
//         ],
//       },
//       {
//         childmenu: "Pre Visualization",
//         link:"/portfolio/pre-visualization",
//         id:"",
//       },
//       {
//         childmenu: "Virtual production",
//         link:"",
//         id:"",
//         subchildren: [
//           {
//             subchild: "Enviorment Design",
//             link:"/portfolio/virtual-production",
//             id:"environment"
//           },
//           {
//             subchild: "AR & VR",
//             link:"/portfolio/virtual-production",
//             id:"arvr"
//           },
//         ],
//       },
//       {
//         childmenu: "Game Development",
//         link:"/portfolio/game-development",
//         id:"",
//       },
//     ],
//   },
//   {
//     main: "Blog",
//     link:"/blog",
//     id:"",
//   },
//   {
//     main: "Company",
//     link:"",
//     id:"",
//     children: [
//       {
//         childmenu: "About Us",
//         link:"/company/about-us",
//         id:"",
//       },
//       {
//         childmenu: "Careers",
//         link:"/company/careers",
//         id:"",
//       },
//       {
//         childmenu: "Services",
//         link:"",
//         id:"",
//         subchildren: [
//           {
//             subchild: "Pre Visualization",
//             link:"/company/services",
//             id:"servicespv"
//           },
//           {
//             subchild: "Virtual production",
//             link:"/company/services",
//             id:"servicesvp"
//           },
//           {
//             subchild: "Game Development",
//             link:"/company/services",
//             id:"servicesgamedevelopment",
//           },
//           {
//             subchild: "Archviz",
//             link:"",
//             id:"",
//             subgrandchildren: [
//               {
//                 subchild: "Walkthrough",
//                 link:"/company/services",
//                 id:"serviceswalktrough",
//               },
//               {
//                 subchild: "AR & VR application",
//                 link:"/company/services",
//                 id:"servicesarchviz",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         childmenu: "Our Vision",
//         link:"/company/our-vision",
//         id:"",
//       },
//       {
//         childmenu: "FAQ",
//         link:"/company/faq",
//         id:"",
//       },
//     ],
//   },
//   {
//     main: "Contact Us",
//     link:"",
//     id:"",
//     children: [
//       {
//         childmenu: "Write to us",
//         link:"/contact-us/write-to-us",
//         id:"",
//       },
//     ],
//   },
// ];