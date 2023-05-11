import { ReactNode, useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import WidgetCard from './WidgetCard'

const WidgetContainer = ({
  screenSize,
  widgetDetails,
  isOpen,
  children,
}: {
  screenSize: any
  widgetDetails: any
  isOpen: boolean
  children: ReactNode
}) => {
  const [spacing, setSpacing] = useState<any>()
  const [widgetPosition, setWidgetPosition] = useState<any>()

  const getSpacingSetting = (
    settingName: string,
    isLauncherLeft: boolean,
    sideSpace: number,
    screenSize: string,
    bottomSpacing?: number,
  ) => {
    if (screenSize === 'mobile') {
      return 0
    } else if (settingName === 'left') {
      if (isLauncherLeft) {
        return sideSpace ? `${sideSpace}px` : 0
      } else {
        return 'auto'
      }
    } else if (settingName === 'right') {
      if (!isLauncherLeft) {
        return sideSpace ? `${sideSpace}px` : 0
      } else {
        return 'auto'
      }
    } else if (settingName === 'bottom') {
      return bottomSpacing ? `${bottomSpacing}px` : 0
    } else {
      return 'auto'
    }
  }

  useEffect(() => {
    if (screenSize?.length > 0 && widgetDetails?.widget) {
      setSpacing({
        left: getSpacingSetting(
          'left',
          widgetDetails.widget.launcherLeftPosition,
          widgetDetails.widget.sideSpace,
          screenSize,
        ),
        right: getSpacingSetting(
          'right',
          widgetDetails.widget.launcherLeftPosition,
          widgetDetails.widget.sideSpace,
          screenSize,
        ),
        bottom: getSpacingSetting(
          'bottom',
          widgetDetails.widget.launcherLeftPosition,
          widgetDetails.widget.sideSpace,
          screenSize,
          widgetDetails.widget.bottonSpace,
        ),
      })
      setWidgetPosition(widgetDetails.widget.launcherLeftPosition ? 'start' : 'end')
    }
  }, [screenSize, widgetDetails])

  return (
    <WidgetCard
      variant="box-flat"
      key="widget-container"
      position={'fixed'}
      direction={'column'}
      justifyContent={screenSize === 'mobile' ? 'end' : 'start'}
      align={widgetPosition || 'start'}
      bottom={spacing ? spacing.bottom : 0}
      top={isOpen && screenSize === 'mobile' ? 0 : 'auto'}
      right={spacing ? spacing.right : 0}
      left={spacing ? spacing.left : 0}
      height={screenSize === 'mobile' && isOpen ? '100vh' : 'auto'}
      width={screenSize === 'mobile' && isOpen ? '100vw' : 'auto'}
      pointerEvents={isOpen ? 'all' : 'none'}
      className="widget-container"
      overflow="visible"
    >
      {children}
    </WidgetCard>
  )
}

export default WidgetContainer
