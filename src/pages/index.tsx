import { GetStaticProps } from "next"
import CoinList from "../components/CoinList"
import crypto from "../services/crypto"

export default function Home({ cryptocoins }) {
  return (
    <CoinList coins={cryptocoins} />
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