import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from "next/link";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = (
    <Banner storageKey="some-key">
        🎉  <Link href="http://pageindex.vectify.ai/" className='text-white underline hover:text-blue-200 transition-colors'>PageIndex Dashboard is now live! Read more →</Link>
    </Banner>
)
const navbar = (
    <Navbar
        logo={<img src="/images/general/pi-logo.png" alt="Logo" style={{height: 45}}/>}
        chatLink="https://discord.gg/VuXuf29EUj"
        projectLink="https://github.com/VectifyAI/PageIndex"
        // ... Your additional navbar options
    />
)
const footer = <Footer>{new Date().getFullYear()} © Vectify AI.</Footer>

export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="/images/general/favicon.ico"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            toc={{title: 'Tree Structure'}}
            banner={banner}
            sidebar={{ toggleButton: false }}
            navbar={navbar}
            pageMap={await getPageMap()}
            // docsRepositoryBase="https://github.com/phucbm/nextra-docs-starter/tree/main"
            footer={footer}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}