// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'

export default function App() {
  return (
    <MantineProvider>
      <ModalsProvider>
        {/* Your app here */}
      </ModalsProvider>
    </MantineProvider>
  )
}