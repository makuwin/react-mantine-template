import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Layout } from './components/ui/Layout'
import RouteHandler from './components/ui/RouteHandler'
import { Notifications } from '@mantine/notifications'

export default function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <ModalsProvider>
          <Layout>
            <RouteHandler />
          </Layout>
        </ModalsProvider>
    </MantineProvider>
  )
}