

export const hammenuItems = [
  {
    main: "Home",
    link:"/",
  },
  {
    main: "Services",
    link:"",
    expand:"portfolio",
    children: [
      {
        childmenu: "Virtual production",
        link:"/services/virtual-production",
        id:"",
      },
      {
        childmenu: "Pre Visualization",
        link:"/services/pre-visualization",
        id:"",
      },
      {
        childmenu: "Archviz",
        link:"",
        id:"",
        expand:"parchviz",
        subchildren: [
          {
            subchild: "Walkthrough",
            link:"/services/archviz/walkthrough",
            id:"archvizinteractive"
          },
          {
            subchild: "Interactive Archviz",
            link:"/services/archviz/ar-vr",
            id:"archvizinteractive"
          },
        ],
      },
     
      // {
      //   childmenu: "Game Development",
      //   link:"/portfolio/game-development",
      //   id:"",
      // },
    ],
  },
  {
    main: "Blog",
    link:"/blog",
    id:"",
  },
  {
    main: "Company",
    link:"",
    id:"",
    expand:"company",
    children: [
      {
        childmenu: "About Us",
        link:"/company/about-us",
        id:"",
      },
      // {
      //   childmenu: "Careers",
      //   link:"/company/careers",
      //   id:"",
      // },
      {
        childmenu: "Services",
        link:"",
        id:"",
  
        expand:"cs",
        subchildren: [
          {
            subchild: "Pre Visualization",
            link:"/company/services",
            id:"servicespv"
          },
          {
            subchild: "Virtual production",
            link:"/company/services",
            id:"servicesvp"
          },
          {
            subchild: "Game Development",
            link:"/company/services",
            id:"servicesgamedevelopment",
          },
          {
            subchild: "Archviz",
            link:"",
            id:"",
      
            expand:"aarchviz",
            subgrandchildren: [
              {
                subchild: "Walkthrough",
                link:"/company/services",
                id:"serviceswalktrough",
              },
              {
                subchild: "AR & VR application",
                link:"/company/services",
                id:"servicesarchviz",
              },
            ],
          },
        ],
      },
      {
        childmenu: "Our Vision",
        link:"/company/our-vision",
        id:"",
      },
      {
        childmenu: "FAQ",
        link:"/company/faq",
        id:"",
      },
    ],
  },
  {
    main: "Contact Us",
    link:"",
    id:"",
    expand:"contact",
    children: [
      {
        childmenu: "Write to us",
        link:"/contact-us/write-to-us",
        id:"",
      },
    ],
  },
];