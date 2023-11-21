import { NavLink } from "@mantine/core";
import { IconBuildingStore, IconBuildingWarehouse, IconHome2 } from "@tabler/icons-react";
import { Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink label="Home" leftSection={<IconHome2 size="1rem" stroke={1.5} />} component={Link} to={'/'}/>
      <NavLink label="POS" leftSection={<IconBuildingStore size="1rem" stroke={1.5} />} component={Link} to={'/inventory'}/>
      <NavLink label="Inventory" leftSection={<IconBuildingWarehouse size="1rem" stroke={1.5} />} component={Link} to={'/inventory'}/>
    </>
  )
}

export default NavBar
