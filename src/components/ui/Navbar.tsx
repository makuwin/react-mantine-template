import { NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import { Link} from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <NavLink label="Home" leftSection={<IconHome2 size="1rem" stroke={1.5} />} component={Link} to={'/'}/>
      <NavLink label="Inventory" leftSection={<IconHome2 size="1rem" stroke={1.5} />} component={Link} to={'/inventory'}/>
    </>
  )
}
