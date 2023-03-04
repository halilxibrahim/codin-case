import Document, { Html, Head, Main, NextScript } from "next/document";

 class MyDocument extends Document {

   render() {
     return (
       <Html>
         <Head>
           <link rel="icon" href="/assets/favicon-32x32.png" />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
 }

 export default MyDocument;