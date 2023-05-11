import { useEffect, useState } from 'react'
import { getChakraThemeForOrg } from '../utils/theme'

const useOrgTheme = (widgetSettings: any) => {
  const [orgTheme, setOrgTheme] = useState<any>(null)
  useEffect(() => {
    let newTheme = getChakraThemeForOrg(widgetSettings)
    setOrgTheme(newTheme)
  }, [widgetSettings])

  return orgTheme
}

export default useOrgTheme
