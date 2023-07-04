import { Card, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { TacoDataColumn } from '../types/TacoDataColumn';

const BasicCell = ({
  text,
  rightAlign = false,
  ...rest
}: { text: string; rightAlign?: boolean } & any) => {
  return (
    <GridItem borderBottom="1px solid #f2f2f2" py={3} {...rest}>
      <Text variant="body" textAlign={rightAlign ? 'right' : 'left'}>
        {text}
      </Text>
    </GridItem>
  );
};

const BasicTable = ({
  columns = [],
  data = [],
  justify = 'right',
}: {
  columns: TacoDataColumn[];
  data: any[];
  justify?: string;
}) => {
  return (
    <Flex direction="column" gap={2}>
      <Grid templateColumns={'60% 20% 20%'} px={3}>
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
          );
        })}
      </Grid>
      <Grid templateColumns={'60% 20% 20%'} py={3} px={4} as={Card}>
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
            );
          });
        })}
      </Grid>
    </Flex>
  );
};

export default BasicTable;
