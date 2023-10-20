// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Layout } from './components/ui/Layout'
import RouteHandler from './components/ui/RouteHandler'

export default function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <ModalsProvider>
        <Layout>
          <RouteHandler />
        </Layout>
      </ModalsProvider>
    </MantineProvider>
  )
}