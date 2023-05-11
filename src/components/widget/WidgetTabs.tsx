import { Box, Flex, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { pageVariants } from './WidgetPanel'
import useOrgStyles from '../../hooks/org-theme'

const WidgetTabs = ({
  hideTabs = false,
  isRounded = true,
  tabs,
  footer = <></>,
  widgetBranding,
}: {
  hideTabs?: boolean
  isRounded?: boolean
  tabs: any[]
  footer?: any
  widgetBranding: any
}) => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const { colors } = useOrgStyles(widgetBranding)

  return (
    <Flex
      direction="column"
      gap="15px"
    >
      {!hideTabs && (
        <Flex
          align="center"
          justify="end"
        >
          <Flex
            borderRadius={isRounded ? '24px' : '0'}
            border="1px solid #CACACA"
            position="relative"
            width={`${Math.max(
              tabs.reduce((prevValue: any, currValue: any) => {
                return prevValue + currValue.label.length
              }, 0) *
                8 +
                5,
              100,
            )}px`}
            height="26px"
          >
            {tabs.map((t: any, idx: number) => {
              return (
                <Box
                  _hover={{ cursor: 'pointer' }}
                  style={{
                    position: 'absolute',
                    left: idx === 0 ? 0 : 'auto',
                    right: idx === 1 ? 0 : 'auto',
                    backgroundColor: 'transparent',
                    borderRadius: isRounded ? '24px' : '0',
                    padding: '3px 8px',
                  }}
                  key={`tab-toggle-${idx}`}
                  onClick={() => {
                    setTabIndex(idx)
                  }}
                  zIndex={99}
                >
                  <Text
                    variant="main-body"
                    color={idx === tabIndex ? colors.secondary : '#000'}
                  >
                    {t.label}
                  </Text>
                </Box>
              )
            })}
            <motion.div
              style={{
                position: 'absolute',
                width: Math.max(tabs[tabIndex].label.length * 8, 50),
                backgroundColor: colors.primary,
                borderRadius: isRounded ? '24px' : '0',
                height: '24px',
                zIndex: 98,
              }}
              animate={{ left: tabIndex === 0 ? 0 : 'auto', right: tabIndex === 1 ? 0 : 'auto' }}
            ></motion.div>
          </Flex>
        </Flex>
      )}
      {tabs && (
        <Box
          position="relative"
          width="100%"
        >
          <AnimatePresence initial={false}>
            {tabIndex === 0 && (
              <motion.div
                key={`tab-${tabIndex}`}
                style={{ position: 'absolute', width: '100%' }}
                variants={pageVariants}
                initial="enter"
                animate="center"
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              >
                {tabs[0].body}
                {footer}
              </motion.div>
            )}
            {tabIndex === 1 && (
              <motion.div
                key={`tab-${tabIndex}`}
                variants={pageVariants}
                initial="enter"
                animate="center"
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              >
                {tabs[1].body}
                {footer}
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      )}
    </Flex>
  )
}

export default WidgetTabs
