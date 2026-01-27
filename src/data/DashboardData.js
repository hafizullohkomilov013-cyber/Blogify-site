import TotalIcon from "../assets/img/TotalIcon.svg"
import CatagoryIcon from "../assets/img/CatagoryIcon.svg"
import ViewsIcon from "../assets/img/TotalViewIcon.svg"
import UsersIcon from "../assets/img/UserIcon.svg"


const stats = [
  {
    id: 1,
    title: "Total Posts",
    value: 24,
    change: "+12%",
    image:TotalIcon,
  },
  {
    id: 2,
    title: "Categories",
    value: 6,
    change: "+2",
    image: CatagoryIcon,
  },
  {
    id: 3,
    title: "Total Views",
    value: "12.5K",
    change: "+23%",
    image: ViewsIcon,
  },
  {
    id: 4,
    title: "Active Users",
    value: "1.2K",
    change: "+8%",
    image: UsersIcon,
  },
];
export default stats;
