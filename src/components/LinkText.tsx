import { Flex, Link, Text } from '@chakra-ui/react'

const LinkText = ({
  text,
  href = '',
  onClick,
  show = true,
  ...rest
}: {
  text: string
  href?: string
  onClick: any
  show?: boolean
} & any) => {
  return (
    <Flex
      width="100%"
      justify="center"
    >
      {show && (
        <>
          {href.length > 0 ? (
            <Link
              href={href}
              {...rest}
            >
              <Text variant="link-text">{text}</Text>
            </Link>
          ) : (
            <Link onClick={onClick}>
              <Text variant="link-text">{text}</Text>
            </Link>
          )}
        </>
      )}
    </Flex>
  )
}

export default LinkText
