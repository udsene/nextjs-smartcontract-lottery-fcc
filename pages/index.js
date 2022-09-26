import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader.js"
import Header from "../components/Header.js"
import LotteryEntrance from "../components/LotteryEntrance.js"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader />*/}
            <Header />
            {/* Header / Connect Button / Nav Bar */}
            <LotteryEntrance />
            {/*Hello !!!*/}
        </div>
    )
}
