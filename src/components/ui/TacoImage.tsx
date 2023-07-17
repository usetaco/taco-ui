import * as React from 'react'
import { ReactElement } from 'react'
import { FC } from 'react'
import { Icon, Image } from '@chakra-ui/react'

interface TacoImageProps {
  src: any | string
  rest: any
}

const TacoImage: FC<TacoImageProps & any> = ({ src, ...rest }) => {
  if (typeof src === 'string') {
    return (
      <Image
        src={src}
        width="20px"
        height="20px"
        _hover={{ filter: `grayscale(100%)` }}
        {...rest}
      />
    )
  } else {
    return (
      <Icon
        as={src}
        {...rest}
      />
    )
  }
}

export default TacoImage
