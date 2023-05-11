import { useEffect, useState } from 'react'
import { getThemeColorsForOrg } from '../utils/theme'

const useOrgStyles = (widgetSettings: any) => {
  const [orgColors, setOrgColors] = useState<any>(null)
  const [isRounded, setIsRounded] = useState<any>(null)
  useEffect(() => {
    let newColors = getThemeColorsForOrg(widgetSettings)
    setOrgColors(newColors)
    setIsRounded(widgetSettings.isRounded)
  }, [widgetSettings])

  return { colors: orgColors, isRounded }
}

export default useOrgStyles
