import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Wallet Adapter + Glow</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                  Solana Wallet Adapter + Glow
                </h1>

                <div className={styles.walletButtons}>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/luma-team/wallet-adapter-example"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
            </footer>
        </div>
    );
};

export default Home;
