import Dashboard  from "containers/dashboard";
import AdminUser  from "containers/admin/user";
import AdminRole  from "containers/admin/role";
import AdminMenu  from "containers/admin/menu";
import AdminAPI   from "containers/admin/API";

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/admin-user', component: AdminUser },
  { path: '/admin-role', component: AdminRole },
  { path: '/admin-menu', component: AdminMenu },
  { path: '/admin-api', component: AdminAPI },
];

export default routes;
