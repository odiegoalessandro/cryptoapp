import { Table, Tbody, Thead, Tr, Th, Center } from "@chakra-ui/react";
import Coin from "./Coin";

export default function CoinList({ coins }){
  return(
    <Center>
      <Table variant="simple" w="10">
        <Thead>
          <Tr>
            <Th textAlign="center">posição</Th>
            <Th textAlign="center">logo</Th>
            <Th textAlign="center">simbolo</Th>
            <Th textAlign="center">nome</Th>
            <Th textAlign="center">preço atual</Th>
            <Th textAlign="center">teto nas ultimas 24h</Th>
            <Th textAlign="center">piso nas ultimas 24h</Th>
            <Th textAlign="center">mudança de preço</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            coins.map((coin) => {
              return(
                <Coin key={coin.id} coin={coin} />
              )
            })
          }
        </Tbody>
      </Table>
    </Center>
  )
}