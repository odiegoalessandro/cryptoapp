import { Tr, Td } from "@chakra-ui/react";

export default function Coin({ coin }){
  return(
    <Tr>
      <Td textAlign="center">{coin.market_cap_rank}</Td>
      <Td textAlign="center"><img style={{width: "30px", height: "30px"}} src={coin.image} /></Td>
      <Td textAlign="center">{coin.symbol}</Td>
      <Td textAlign="center">{coin.name}</Td>
      <Td textAlign="center">R${Number(coin.current_price).toFixed(2)}</Td>
      <Td textAlign="center">R${Number(coin.high_24h).toFixed(2)}</Td>
      <Td textAlign="center">R${Number(coin.low_24h).toFixed(2)}</Td>
      <Td textAlign="center">R${Number(coin.ath).toFixed(2)}</Td>
      <Td textAlign="center">R${Number(coin.atl).toFixed(2)}</Td>
    </Tr>
  )
}