import { useCallback, useEffect, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles: any = {
  position: 'absolute',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 1000,
}

export default function Realistic({
  primary,
  secondary,
  onFinish,
}: {
  primary?: string
  secondary?: string
  onFinish: any
}) {
  const refAnimationInstance: any = useRef(null)
  const color1 = primary || '#000000'
  const color2 = secondary || '#e6bddc'
  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.5 },
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      colors: [color1, color2],
      spread: 26,
      startVelocity: 55,
    })

    makeShot(0.2, {
      colors: [color1, color2],
      spread: 60,
    })

    makeShot(0.35, {
      colors: [color1, color2],
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    makeShot(0.1, {
      colors: [color1, color2],
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    makeShot(0.1, {
      colors: [color1, color2],
      spread: 120,
      startVelocity: 45,
    })
  }, [makeShot])

  useEffect(() => {
    fire()
  }, [])

  return (
    <>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={canvasStyles}
        onDecay={() => {
          onFinish()
        }}
      />
    </>
  )
}
