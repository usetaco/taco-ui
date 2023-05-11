import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const pageVariants = {
  enter: (direction: number) => {
    return {
      zIndex: 1,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const WidgetPanel = ({
  smallHeader = true,
  keyName,
  direction,
  scrollRef,
  children,
  screenSize,
}: {
  smallHeader?: boolean
  keyName: any
  direction: any
  scrollRef: any
  screenSize: string | undefined
  children: ReactNode
}) => {
  return (
    <motion.div
      key={`${keyName}-panel`}
      style={{
        padding: '15px',
        paddingBottom: screenSize === 'mobile' ? '110px' : '35px',
        paddingTop: smallHeader ? '65px ' : '70px',
        marginTop: smallHeader ? '0px ' : '35px',
        position: 'absolute',
        width: '100%',
        minHeight: screenSize === 'mobile' ? '100vh' : '585px',
        overflowY: 'scroll',
        boxSizing: 'border-box',
        zIndex: 5,
      }}
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
      ref={scrollRef}
    >
      {children}
    </motion.div>
  )
}
export default WidgetPanel
