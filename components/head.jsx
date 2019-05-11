import Head from 'next/head'

const head = () => {
  return (
  <Head>
    <link rel="stylesheet" href="/static/css/reset.css"/>
    <link rel="stylesheet" href="/static/css/normalize.css"/>
    <link rel="stylesheet" href="/static/css/bulma.css"/>
    <link rel="shortcut icon" href="/static/btc_favico" />
  </Head>)
}

export default head;
