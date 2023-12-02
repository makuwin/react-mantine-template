import { NavLink } from "@mantine/core";
import { IconBuildingStore, IconBuildingWarehouse, IconCategory, IconFileInvoice, IconHome2 } from "@tabler/icons-react";
import { Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink label="Home" leftSection={<IconHome2 size="1rem" stroke={1.5} />} component={Link} to={'/'}/>
      <NavLink label="POS" leftSection={<IconBuildingStore size="1rem" stroke={1.5} />} component={Link} to={'/pos'}/>
      <NavLink label="Inventory" leftSection={<IconBuildingWarehouse size="1rem" stroke={1.5} />} component={Link} to={'/inventory'}/>
      <NavLink label="Catalog" leftSection={<IconCategory size="1rem" stroke={1.5} />} component={Link} to={'/catalog'}/>
      <NavLink label="Invoice" leftSection={<IconFileInvoice size="1rem" stroke={1.5} />} component={Link} to={'/invoice'}/>
    </>
  )
}

export default NavBar
