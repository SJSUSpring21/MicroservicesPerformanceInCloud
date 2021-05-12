import TocIcon from '@material-ui/icons/Toc';
import Dashboard from "@material-ui/icons/Dashboard";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Tableau",
    icon: TocIcon,
    component: UserProfile,
    layout: "/admin",
  }
];

export default dashboardRoutes;
