

export const hammenuItems = [
  {
    main: "Portfolio",
    link:"",
    haschild:false,
    children: [
      {
        childmenu: "Archviz",
        link:"",
        id:"",
        subchildren: [
          {
            subchild: "Interactive Archviz",
            link:"/portfolio/archviz",
            id:"archvizinteractive"
          },
        ],
      },
      {
        childmenu: "Pre Visualization",
        link:"/portfolio/pre-visualization",
        id:"",
      },
      {
        childmenu: "Virtual production",
        link:"",
        id:"",
        haschild:false,
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
        ],
      },
      {
        childmenu: "Game Development",
        link:"/portfolio/game-development",
        id:"",
      },
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
    haschild:false,
    children: [
      {
        childmenu: "About Us",
        link:"/company/about-us",
        id:"",
      },
      {
        childmenu: "Careers",
        link:"/company/careers",
        id:"",
      },
      {
        childmenu: "Services",
        link:"",
        id:"",
        haschild:false,
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
            haschild:false,
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
    haschild:false,
    children: [
      {
        childmenu: "Write to us",
        link:"/contact-us/write-to-us",
        id:"",
      },
    ],
  },
];