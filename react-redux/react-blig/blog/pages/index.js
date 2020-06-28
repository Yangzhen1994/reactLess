import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../components/MyHeader'
import { Button } from 'antd'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyHeader></MyHeader>
    </div>
  )
}
