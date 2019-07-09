const menus = [
  {
    id: 1,
    title: "主页",
    path: "/dashboard",
    icon: "dashboard"
  },
  {
    id: 2,
    title: "后台管理",
    path: "",
    icon: "setting",
    child: [
      {
        id: 3,
        title: "角色",
        path: "/admin-role",
        icon: ""
      },
      {
        id: 4,
        title: "账号",
        path: "/admin-user",
        icon: ""
      },
      {
        id: 5,
        title: "菜单",
        path: "/admin-menu",
        icon: ""
      },
      {
        id: 6,
        title: "API",
        path: "/admin-api",
        icon: ""
      }
    ]
  }
];

export default menus;
