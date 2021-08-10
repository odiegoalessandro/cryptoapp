import { Tr, Td } from "@chakra-ui/react";
import Image from 'next/image'

export default function Coin({ coin }){
  return(
    <Tr>
      <Td textAlign="center">{coin.market_cap_rank}</Td>
      <Td textAlign="center"><Image width="30" height="30" src={coin.image} /></Td>
      <Td textAlign="center">{coin.symbol}</Td>
      <Td textAlign="center">{coin.name}</Td>
      <Td textAlign="center">{Number(coin.current_price).toFixed(2)}</Td>
      <Td textAlign="center">{Number(coin.high_24h).toFixed(2)}</Td>
      <Td textAlign="center">{Number(coin.low_24h).toFixed(2)}</Td>
      <Td textAlign="center">{Number(coin.ath).toFixed(2)}</Td>
      <Td textAlign="center">{Number(coin.atl).toFixed(2)}</Td>
    </Tr>
  )
}