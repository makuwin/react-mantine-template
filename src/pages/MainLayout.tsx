import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, Navigate } from "react-router-dom"
import NavBar from "../components/ui/Navbar";

const MainLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
          >
            <AppShell.Header>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <div>Logo</div>
            </AppShell.Header>

            <AppShell.Navbar p="md">
              <NavBar />
            </AppShell.Navbar>

            <AppShell.Main>
              <Outlet />
            </AppShell.Main>
          </AppShell>
        </>
      )}
    </>
  )
}

export default MainLayout