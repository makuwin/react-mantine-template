import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import RouteHandler from './components/ui/RouteHandler'
import { Notifications } from '@mantine/notifications'

export default function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <ModalsProvider>
          <RouteHandler />
        </ModalsProvider>
    </MantineProvider>
  )
}