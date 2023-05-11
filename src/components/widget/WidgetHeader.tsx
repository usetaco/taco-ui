import { CloseIcon } from '@chakra-ui/icons'
import { IconButton, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { changeShade } from '../../utils/colors'
import useOrgStyles from '../../hooks/org-theme'

const WidgetHeader = ({
  widgetDetails,
  scrollOffset,
  pageTitle,
  screenSize,
  setIsOpen,
}: {
  widgetDetails: any
  scrollOffset: number
  pageTitle?: string
  screenSize: string | undefined
  setIsOpen: any
}) => {
  const [widgetBranding, setWidgetBranding] = useState<any>()
  const [programName, setProgramName] = useState<any>('')
  const { isRounded } = useOrgStyles(widgetBranding)

  useEffect(() => {
    if (widgetDetails && widgetDetails.widget) {
      setWidgetBranding(widgetDetails.widget)
      if (widgetDetails.widget.programName.length > 0) {
        setProgramName(widgetDetails.widget.programName)
      } else if (widgetDetails.organization && widgetDetails.organization.brandName.length > 0) {
        setProgramName(widgetDetails.organization.brandName)
      }
    }
  }, [widgetDetails])

  const [headerCss, setHeaderCss] = useState<any>({
    top: 0,
    textOpacity: 1,
    zIndex: 999,
    smallTextTop: '-50px',
    height: 126,
  })

  useEffect(() => {
    setHeaderCss({
      top: (scrollOffset < 0 ? -85 : Math.min(scrollOffset - 85, 0)).toString() + 'px',
      smallTextTop: Math.min(30 - (scrollOffset - 40), 95).toString() + 'px',
      textOpacity: Math.min(Math.max(((scrollOffset - 50) * 2) / 100, 0), 1), //(scrollOffset + 15) / 100,
      zIndex: scrollOffset > 55 ? 1 : 9999,
      height: Math.min(Math.max((scrollOffset - 20) * 1.48, 50), 126),
    })
  }, [scrollOffset])

  return (
    <motion.div
      key="widget-header"
      animate={{ height: headerCss.height, zIndex: headerCss.zIndex }}
      transition={{ ease: [0.05, 0.79, 0.99, 1], duration: 0.1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        borderTopRightRadius: screenSize === 'mobile' || !isRounded ? '0px' : '12px',
        borderTopLeftRadius: screenSize === 'mobile' || !isRounded ? '0px' : '12px',
        width: '100%',
        padding: '23px',
        background: `linear-gradient(150deg, ${
          widgetBranding?.backgroundColor ? changeShade(widgetBranding?.backgroundColor, 150) : '#abafff'
        }, 10%, ${widgetBranding?.backgroundColor || '#363FFD'})`,
      }}
    >
      {screenSize === 'mobile' && (
        <IconButton
          sx={{
            position: 'absolute',
            top: '5px',
            right: '8px',
            backgroundColor: 'transparent',
            zIndex: screenSize === 'mobile' ? 999 : -1,
            opacity: screenSize === 'mobile' ? 1 : 0,
          }}
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
          onClick={() => {
            setIsOpen()
          }}
          aria-label="Close"
          icon={<CloseIcon color="#fff" />}
        />
      )}
      <motion.div
        key="widget-header-1"
        animate={{ opacity: 1 - headerCss.textOpacity }}
        transition={{ ease: [0.05, 0.69, 0.99, 1], duration: 0.2 }}
      >
        <Text
          position="absolute"
          top="15px"
          left="20px"
          variant="header-small"
        >
          {pageTitle ? `${programName} - ${pageTitle}` : programName}
        </Text>
      </motion.div>
      <motion.div
        key="widget-header-2"
        animate={{ opacity: headerCss.textOpacity }}
        transition={{ ease: [0.05, 0.69, 0.99, 1], duration: 0.2 }}
      >
        <Text
          color={widgetBranding?.fontColor || '#fff'}
          variant="header-small"
        >
          Welcome to
        </Text>
      </motion.div>
      <motion.div
        key="widget-header-3"
        animate={{ opacity: headerCss.textOpacity }}
        transition={{ ease: [0.05, 0.69, 0.99, 1], duration: 0.2 }}
      >
        <Text
          variant="header-medium"
          fontSize={programName?.length > 15 ? '24px' : '28px'}
          display={headerCss.height === 50 ? 'none' : 'block'}
        >
          {programName}
        </Text>
      </motion.div>
    </motion.div>
  )
}

export default WidgetHeader
