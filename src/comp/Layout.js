import Head from 'next/head'
import React from "react"

export default ({children}) => (
<div>
    <Head>
      <title>Pulse Global</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>

    {children}
    
    <style jsx global>{`
    *{
      padding:0px;
      margin:0px;
      box-sizing: border-box;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    `}</style>
</div>
)