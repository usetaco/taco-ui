import { CheckIcon } from '@chakra-ui/icons'
import { Badge, Collapse, Flex, Text } from '@chakra-ui/react'
import WidgetButton from './widget/WidgetButton'
import Cookies from 'js-cookie'
import WidgetCard from './widget/WidgetCard'

const CouponCode = ({
  couponCode,
  couponApplied,
  setCouponApplied,
}: {
  couponCode: string
  couponApplied: boolean
  setCouponApplied: any
}) => {
  return (
    <Flex
      direction="column"
      gap="10px"
      alignItems="center"
    >
      <WidgetCard
        variant="box-highlight"
        py="8px"
      >
        <Text
          variant="main-body"
          textAlign={'center'}
        >
          Coupon Code
        </Text>
        <Text
          variant="main-title"
          textAlign="center"
          color="#000"
        >
          {couponCode}
        </Text>
      </WidgetCard>
      <Flex
        direction="column"
        width="100%"
      >
        <WidgetButton
          text={couponApplied ? <CheckIcon /> : 'Apply'}
          onClick={async () => {
            Cookies.set('discount_code', couponCode)
            setCouponApplied(true)
          }}
        />
        <Collapse in={couponApplied}>
          <Flex
            width="100%"
            justify="center"
          >
            <Badge variant="info-feedback">Coupon applied!</Badge>
          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  )
}

export default CouponCode
