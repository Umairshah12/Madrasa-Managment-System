export default [
  {
    _tag: "CSidebarNavTitle",
    _children: ["STUDENT MENU"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Students",
    route: "/students",
    icon: "cil-user",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Register Student",
        to: "/students",
        icon: "cil-people",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Student",
        to: "/studentlist",
        icon: "cil-list",
      },
    ],
  },
];
