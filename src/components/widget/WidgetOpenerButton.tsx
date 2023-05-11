import { Button, Flex, Text, Image, Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getFilterFromHex } from '../../utils/colors'

const WidgetOpenerButton = ({
  openerWidth,
  screenSize,
  widgetDetails,
  isOpen,
  cartOrCheckout,
  setIsOpen,
  setOpenerWidth,
}: {
  openerWidth: number
  screenSize: string | undefined
  widgetDetails: any
  isOpen: boolean
  cartOrCheckout: boolean
  setIsOpen: any
  setOpenerWidth: any
}) => {
  const [readyToShow, setReadyToShow] = useState<boolean>(false)
  const [marginSettings, setMarginSettings] = useState<string>('')

  useEffect(() => {
    if (widgetDetails?.widget) {
      let leftMargin = 0,
        rightMargin = 0,
        bottomMargin = 0
      if (widgetDetails.widget.launcherLeftPosition && widgetDetails.widget.sideSpace > 0) {
        leftMargin = widgetDetails.widget.sideSpace
      } else if (!widgetDetails.widget.launcherLeftPosition && widgetDetails.widget.sideSpace > 0) {
        rightMargin = widgetDetails.widget.sideSpace
      }
      if (widgetDetails.widget.bottonSpace > 0) {
        bottomMargin = widgetDetails.widget.bottonSpace
      }

      setMarginSettings(`0px ${rightMargin}px ${bottomMargin}px ${leftMargin}px !important`)
      setReadyToShow(true)
    }
  }, [widgetDetails])

  const widgetOpenerCallback = (el: any) => {
    if (el) {
      setOpenerWidth(el.offsetWidth)
    }
  }

  return (
    <>
      {widgetDetails?.widget?.enableWidget && !cartOrCheckout && (
        <Button
          id="widget-opener-button"
          key="widget-opener-button"
          as={motion.button}
          ref={widgetOpenerCallback}
          height="65px"
          padding={'32px 24px'}
          backgroundColor={widgetDetails?.widget?.backgroundColor || '#363FFD'}
          color={widgetDetails?.widget?.fontColor || '#fff'}
          borderRadius={'100px'}
          opacity={screenSize === 'mobile' && isOpen ? 0 : 1}
          margin={screenSize === 'mobile' ? marginSettings : ''}
          pointerEvents="all"
          onClick={() => {
            setIsOpen()
          }}
          animate={{
            scale: [1.05, 1],
            opacity: readyToShow ? 1 : 0,
            width: isOpen ? '65px' : openerWidth,
            transition: { duration: 0.175 },
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.05 },
          }}
          _hover={{
            backgroundColor: widgetDetails?.widget?.backgroundColor || '#363FFD',
          }}
          _active={{
            backgroundColor: widgetDetails?.widget?.backgroundColor || '#363FFD',
          }}
        >
          {isOpen ? (
            <CloseIcon />
          ) : (
            <Flex
              align="center"
              justify="center"
              height="100%"
              width="100%"
              gap="15px"
            >
              <>
                {widgetDetails?.widget?.enableLauncherIcon && (
                  <Box width="30px">
                    <Image
                      src={
                        widgetDetails?.widget?.openerIcon.includes('http')
                          ? widgetDetails?.widget?.openerIcon
                          : `https://${widgetDetails?.widget?.openerIcon}`
                      }
                      alt=""
                      filter={
                        widgetDetails?.widget?.openerCustomIcon
                          ? 'none'
                          : getFilterFromHex(widgetDetails?.widget?.fontColor || '#fff')
                      }
                      height="auto"
                      width="30px"
                      maxWidth="unset"
                    />
                  </Box>
                )}
                {widgetDetails?.widget?.enableLauncherText && (
                  <Text
                    fontSize="20px"
                    color={widgetDetails?.widget?.fontColor || '#fff'}
                  >
                    {widgetDetails?.widget?.openerText}
                  </Text>
                )}
              </>
            </Flex>
          )}
        </Button>
      )}
    </>
  )
}

export default WidgetOpenerButton
