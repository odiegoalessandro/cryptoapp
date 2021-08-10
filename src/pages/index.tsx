import { Center, Input } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import { useState } from "react"
import CoinList from "../components/CoinList"
import crypto from "../services/crypto"

export default function Home({ cryptocoins }) {
  const [search, setSearch] = useState('')
  const handleChange = e => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }
  
  const filtredCoins = cryptocoins.filter(coin => 
    coin.name.toLowerCase().includes(search.trim()) 
    || coin.symbol.toLowerCase().includes(search.trim())
  )

  return (
    <>
      <Center>
        <Input 
          w="20rem"
          my="10"
          value={search}
          onChange={handleChange}
          placeholder="Pesquise(nomes, simbolos)"  
        />
      </Center>

      <CoinList coins={filtredCoins} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await crypto.get("/coins/markets", {
    params: {
      vs_currency: "brl"
    }
  })
  
  return{
    props: {
      cryptocoins: data
    }
  }
}