import { Badge, Box, Divider, Fade, Flex, Image, Link, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import IconCard from '../IconCard'
import WidgetButton from './WidgetButton'
import WidgetCard from './WidgetCard'
import _ from 'lodash'
import tacoIcons from '../../utils/images'
import { getFilterFromHex } from '../../utils/colors'
import useOrgStyles from '../../hooks/org-theme'

const getReferralText = (awardTrigger: string) => {
  if (awardTrigger === 'fulfilled') {
    return 'after 1st order'
  } else if (awardTrigger === 'paid') {
    return 'after 1st order'
  } else {
    return 'after they signup'
  }
}

const ReferralCard = ({
  labels,
  referralId = '',
  settings = false,
  signedOut = false,
  referralDetails,
  brandName,
  referrals,
  widgetBranding,
  ...rest
}: {
  labels: any
  referralId?: string
  settings?: boolean
  signedOut?: boolean
  referralDetails?: any
  brandName?: string
  referrals?: any[]
  widgetBranding: any
} & any) => {
  const [referralLink, setReferralLink] = useState<string>('')
  const [linkCopied, setlinkCopied] = useState<boolean>(false)
  const { colors } = useOrgStyles(widgetBranding)

  useEffect(() => {
    if (referralId && referralId.length > 0) {
      setReferralLink(`${window.location.protocol}//${window.location.hostname}?referralId=${referralId}`)
    }
  }, [referralId])

  return (
    <WidgetCard {...rest}>
      <Flex
        direction="column"
        gap="10px"
        align="center"
      >
        {settings ? (
          <>
            {referrals && referrals.length > 0 ? (
              <>
                {referrals.map((r: any, idx: number) => {
                  return (
                    <Flex
                      direction="column"
                      width="100%"
                      key={`referral-${idx}`}
                    >
                      <Flex
                        align="center"
                        width="100%"
                        justify="space-between"
                        padding="8px"
                      >
                        <Flex
                          direction="column"
                          gap="2px"
                        >
                          <Text
                            variant="card-title"
                            fontWeight={500}
                          >
                            {_.capitalize(r.reason)}
                          </Text>
                          <Text variant="card-subtitle">{`${
                            r.amount.toString().includes('-') ? r.amount : '+' + r.amount
                          } ${labels.labelPoints}`}</Text>
                        </Flex>

                        <Text
                          variant="card-subtitle"
                          textTransform="none"
                        >
                          {new Date(r.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </Text>
                      </Flex>
                      {idx !== referrals.length - 1 && <Divider />}
                    </Flex>
                  )
                })}
              </>
            ) : (
              <>
                <Text variant="card-title">{`No ${labels.labelReferrals} yet`}</Text>
                <Text
                  variant="main-body"
                  textAlign="center"
                >
                  Share your link below
                </Text>
              </>
            )}
          </>
        ) : (
          <>
            <Text variant="main-title">{labels.referralSingular}</Text>
            <Text
              variant="main-body"
              textAlign="center"
            >
              {`Share your ${labels.referralSingular} link to give your friends ${labels.labelRewards} and claim yours as well.`}
            </Text>
          </>
        )}

        <Divider style={{ margin: 0 }} />
        {!settings && referralDetails && (
          <>
            <IconCard
              title={`They get on signup`}
              subtitle={`${referralDetails.givePoints} ${labels.labelPoints}`}
              icon={
                <Image
                  maxHeight="50px"
                  maxWidth="50px"
                  src={tacoIcons['EarnIcon']}
                />
              }
              padding="12px"
              gap="20px"
              groupHoverIcon={{ filter: getFilterFromHex(colors.secondary) }}
              groupHoverText={{ color: `${colors.secondary} !important` }}
            />
            <IconCard
              title={`You get ${getReferralText(referralDetails.awardTrigger)}`}
              subtitle={`${referralDetails.getPoints} ${labels.labelPoints}`}
              icon={
                <Image
                  maxHeight="50px"
                  maxWidth="50px"
                  src={tacoIcons['EarnIcon']}
                />
              }
              padding="12px"
              paddingTop="0px"
              gap="20px"
            />
          </>
        )}
        {!signedOut && (
          <Flex
            direction="column"
            width="100%"
          >
            <Flex width="100%">
              <WidgetCard
                variant="box-flat"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  maxHeight: '38px',
                  overflow: 'hidden',
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#F8F8F8',
                }}
              >
                <Text variant="main-body">{_.truncate(referralLink, { length: 23 })}</Text>
              </WidgetCard>
              <WidgetButton
                onClick={() => {
                  navigator.clipboard.writeText(referralLink)
                  setlinkCopied(true)
                }}
                text="Copy"
                width="40%"
              />
            </Flex>
            <Fade in={linkCopied}>
              <Flex
                width="100%"
                justify="center"
              >
                <Badge variant="info-feedback">Link copied!</Badge>
              </Flex>
            </Fade>
            {referralDetails && brandName && (
              <Flex
                padding="10px 0"
                width="100%"
                align="center"
                justify="space-around"
              >
                <FacebookShareButton
                  quote={`Use my link to join ${brandName} ${labels.labelRewards}, you get ${referralDetails.givePoints} ${labels.labelPoints} and I get ${referralDetails.givePoints} ${labels.labelPoints}`}
                  hashtag=""
                  url={referralLink}
                >
                  <Link>
                    <Box
                      width="30px"
                      height="31px"
                    >
                      <Image
                        width="30px"
                        height="31px"
                        src="https://app.taco.xyz/social/facebook.svg"
                      />
                    </Box>
                  </Link>
                </FacebookShareButton>
                <TwitterShareButton
                  title={`Use my link to join ${brandName} ${labels.labelRewards}, you get ${referralDetails.givePoints} ${labels.labelPoints} and I get ${referralDetails.givePoints} ${labels.labelPoints}`}
                  hashtags={['']}
                  url={referralLink}
                >
                  <Link>
                    <Box
                      width="35px"
                      height="30px"
                    >
                      <Image
                        width="35px"
                        height="30px"
                        src="https://app.taco.xyz/social/twitter.svg"
                      />
                    </Box>
                  </Link>
                </TwitterShareButton>
                <Link
                  href={`mailto:?subject=Use my link to join ${brandName} ${labels.labelRewards}&body=You get ${referralDetails.givePoints} ${labels.labelPoints} and I get ${referralDetails.givePoints} ${labels.labelPoints}`}
                >
                  <Box
                    width="35px"
                    height="27px"
                  >
                    <Image
                      width="35px"
                      height="27px"
                      src="https://app.taco.xyz/social/email.svg"
                    />
                  </Box>
                </Link>
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </WidgetCard>
  )
}

export default ReferralCard
