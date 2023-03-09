import { Grid, Switch } from '@nextui-org/react'
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'
import { useColorMode } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Grid.Container gap={2}>
      <Grid>
        <Switch
          onClick={{ toggleColorMode }}
          color="secondary"
          shadow
          checked={true}
          size="xl"
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
        />
      </Grid>
    </Grid.Container>
  )
}
