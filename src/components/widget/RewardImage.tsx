import { Box, Image } from '@chakra-ui/react'

const RewardImage = ({ reward, ...rest }: { reward: any } & any) => {
  const getImageUrl = () => {
    if (!reward.tierReward || reward.discountType === 'd') {
      return 'https://cdn.taco.xyz/assets/cash.svg'
    }
    if (reward.discountType === 'p') {
      return 'https://cdn.taco.xyz/assets/discount.svg'
    }
    if (reward.discountType === 's') {
      return 'https://cdn.taco.xyz/assets/freeshipping.svg'
    }
  }

  return (
    <Box
      width="35px"
      height="auto"
    >
      <Image
        width="35px"
        height="auto"
        src={getImageUrl()}
        alt=""
        {...rest}
      />
    </Box>
  )
}

export default RewardImage
