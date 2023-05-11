// export const navData = [
//     {
//         mainNav: 'PortFolio',
//         child: [
//             {
//                 childNav: "Archviz"
//             },
//             {
//                 childNav: "Previsualization"
//             },
//             {
//                 childNav: "Visual Production",
//                 grandChild: [
//                     {
//                         grandChildNav: "2D Animation"
//                     },
//                     {
//                         grandChildNav: "3D Animation"
//                     },
//                     {
//                         grandChildNav: "Motion Graphics"
//                     }
//                 ]
//             },
//             {
//                 childNav: "Game Developement"
//             },
//         ]
//     },
// ];




// export const navData = [
//     {
//         mainNav: 'PortFolio',
//         child: [
//             {
//                 childNav: "Archviz",
//                 grandChild: [
//                     {
//                         grandChildNav: "2D Animation"
//                     },
//                     {
//                         grandChildNav: "3D Animation"
//                     },
//                     {
//                         grandChildNav: "Motion Graphics"
//                     }
//                 ]
//             },
//             {
//                 childNav: "Previsualization"
//             },
//             {
//                 childNav: "Visual Production"
//             },
//             {
//                 childNav: "Game Developement"
//             },
//         ]
//     },
//     {
//         mainNav: 'Blog',
//         child: [
//             {
//                 childNav: "What's New"
//             },
//             {
//                 childNav: "Trending"
//             },
//             {
//                 childNav: "News"
//             },
//             {
//                 childNav: "Customer Reviews"
//             },
//             {
//                 childNav: "Guides"
//             }
//         ]
//     },
//     {
//         mainNav: 'About Us',
//         child: [
//             {
//                 childNav: "Careers"
//             },
//             {
//                 childNav: "Services"

//             },
//             {
//                 childNav: "Previsualization"
//             },
//             {
//                 childNav: "Visual Production"
//             },
//             {
//                 childNav: "Game Developement"
//             },
//             {
//                 childNav: "Our Vision"
//             },
//             {
//                 childNav: "FAQ"
//             }
//         ]
//     },

//     {
//         mainNav: 'Contact Us',
//         child: [
//             {
//                 childNav: "Write to us"
//             },
//             {
//                 childNav: "Book a meeting"
//             },
//             {
//                 childNav: "Product6"
//             }
//         ]
//     }
// ]

export const menuItems = [
    {
      main: "Portfolio",
      link:"",
      children: [
        {
          childmenu: "Archviz",
          link:"",
          subchildren: [
            {
              subchild: "Walkthrough",
              link:"/portfolio/archviz",
              id:"walkthrough"
            },
            {
              subchild: "AR & VR application",
              link:"/portfolio/archviz",
              id:"interactive"
            },
          ],
        },
        {
          childmenu: "Pre Visualization",
          link:"/portfolio/pre-visualization",
          // subchildren: [
          //   {
          //     subchild: "Pre Production",
          //     link:"",
          //     subgrandchildren: [
          //       {
          //         subchild: "Storyboard",
          //         link:"",
          //       },
          //       {
          //         subchild: "Animation",
          //         link:"",
          //       },
          //     ],
          //   },
          // ],
        },
        {
          childmenu: "Virtual production",
          link:"",
          subchildren: [
            {
              subchild: "Enviorment Design",
              link:"/portfolio/virtual-production",
              id:"environment"
            },
            {
              subchild: "AR & VR",
              link:"/portfolio/virtual-production",
              id:"arvr"
            },
            // {
            //   subchild: "Virtual Reality",
            //   link:"",
            // },
          ],
        },
        {
          childmenu: "Game Development",
          link:"/portfolio/game-development",
        },
      ],
    },
    {
      main: "Blog",
      link:"",
      children: [
        {
          childmenu: "What's New",
          link:"",
        },
        {
          childmenu: "Trending",
          link:"",
        },
        {
          childmenu: "News",
          link:"",
        },
        {
          childmenu: "Customer Reviews",
          link:"",
        },
        {
          childmenu: "Guides",
          link:"",
        },
      ],
    },
    {
      main: "Company",
      link:"",
      children: [
        {
          childmenu: "About Us",
          link:"/company/about-us",
        },
        {
          childmenu: "Careers",
          link:"/company/careers",
        },
        {
          childmenu: "Services",
          link:"",
          subchildren: [
            {
              subchild: "Pre Visualization",
              link:"",
              subgrandchildren: [
                {
                  subchild: "Pre Production",
                  link:"",
                  subgrandchildren: [
                    {
                      subchild: "Storyboard",
                      link:"",
                    },
                    {
                      subchild: "Animation",
                      link:"",
                    },
                  ],
                },
              ],
            },
            {
              subchild: "Virtual production",
              link:"",
            },
            {
              subchild: "Game Development",
              link:"",
            },
            {
              subchild: "Archviz",
              link:"",
              subgrandchildren: [
                {
                  subchild: "Walkthrough",
                  link:"",
                },
                {
                  subchild: "AR & VR application",
                  link:"",
                },
              ],
            },
          ],
        },
        {
          childmenu: "Our Vision",
          link:"",
        },
        {
          childmenu: "FAQ",
          link:"/company/faq",
        },
      ],
    },
    {
      main: "Contact Us",
      link:"",
      children: [
        {
          childmenu: "Write to us",
          link:"",
        },
        {
          childmenu: "Book a meeting",
          link:"",
        },
      ],
    },
  ];