import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import useBaseUrl from '@docusarus/useBaseUrl';
import logo from '@site/static/img/pp.jpg';
import Profile from '@site/src/components/Profile';
import Links from '@site/src/components/Links';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'react-bootstrap';

function HomePageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Box sx={{ display: 'flex' }}>
          <Box m="auto">
            <Avatar
              src={logo}
              sx={{ width: 200, height: 200, m: 2 }}
            />
          </Box>
        </Box>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Row>
          <Links />
        </Row>
      </div>
    </header>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Trying`}
      description="Thiru's personal website and blog">
      <HomePageHeader />
      <main>
        <Profile />
      </main>
    </Layout>
  );
}
