import * as React from 'react'
import { FC } from 'react'
import { Card, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { TacoDataColumn } from '../types/TacoDataColumn'

interface BasicTableProps {
  columns: TacoDataColumn[]
  data: any[]
  justify?: string
}

const BasicCell = ({ text, rightAlign = false, ...rest }: { text: string; rightAlign?: boolean } & any) => {
  return (
    <GridItem
      borderBottom="1px solid #f2f2f2"
      py={3}
      {...rest}
    >
      <Text
        variant="body"
        textAlign={rightAlign ? 'right' : 'left'}
      >
        {text}
      </Text>
    </GridItem>
  )
}

const BasicTable: FC<BasicTableProps> = ({ columns = [], data = [], justify = 'right' }) => {
  return (
    <Flex
      direction="column"
      gap={2}
    >
      <Grid
        templateColumns={'repeat(auto-fit, minmax(100px, 1fr))'}
        px={3}
      >
        {columns.map((c: TacoDataColumn, cx: number) => {
          return (
            <GridItem key={`header-${cx}`}>
              <Text
                variant="body-light"
                textAlign={justify === 'right' && cx > 0 ? 'right' : 'left'}
              >
                {c.label}
              </Text>
            </GridItem>
          )
        })}
      </Grid>
      <Grid
        templateColumns={'repeat(auto-fit, minmax(250px, 1fr))'}
        py={3}
        px={4}
        as={Card}
      >
        {data.map((d: any, dx: number) => {
          return columns.map((c: TacoDataColumn, cx: number) => {
            return (
              <GridItem key={`header-${cx}`}>
                <BasicCell
                  key={`cell-${dx}`}
                  text={d[c.fieldName]}
                  rightAlign={justify === 'right' && cx > 0}
                />
              </GridItem>
            )
          })
        })}
      </Grid>
    </Flex>
  )
}

export default BasicTable
