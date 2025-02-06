import { Poppins } from "next/font/google";
import "./globals.css";
import InitialView from "@/components/InitialView";
import Footer from "@/components/Footer";
import ContentCookingCourses from "@/components/ContentCookingCourses";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  title: "Clases de Cocina Gratis en el Magniversario 2024 | Casa Magna",
  description:
    "¿Quieres añadir nuevas recetas a tu menú? Participa en las clases de cocina gratis en el Magniversario 2024, del 29 de mayo al 1 de junio. ¡Inscríbete ya!",
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/es-CO",
    },
  },
  openGraph: {
    title: "Clases de Cocina Gratis en el Magniversario 2024 | Casa Magna",
    description:
      "¿Quieres añadir nuevas recetas a tu menú? Participa en las clases de cocina gratis en el Magniversario 2024, del 29 de mayo al 1 de junio. ¡Inscríbete ya!",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_API_URL}`,
    locale: "es_CO",
    images: "/images/logo-magniversario.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y58GEHTTW7"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-Y58GEHTTW7');`}
        </Script>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '335718532628920');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=335718532628920&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`w-full flex flex-col ${poppins.className}`}>
        <picture>
          <source
            srcSet="/images/background-page-mobile.webp"
            type="image/webp"
            media="(max-width: 640px)"
          />
          <img
            src="/images/background-page.webp"
            alt="background"
            className="-z-10 absolute top-0 left-0 w-full lg:w-[50%] xl:w-[48%] lg:max-h-screen"
          />
        </picture>
        <picture>
          <img
            src="/images/chef_background.webp"
            alt="chef-background"
            className="z-[1] hidden lg:w-full lg:block lg:absolute lg:top-0"
          />
        </picture>
        <main className="w-full flex flex-col lg:justify-start lg:flex-row lg:min-h-[56vh] xl:min-h-[80vh] lg:relative">
          <InitialView />
          {children}
        </main>
        <ContentCookingCourses styleVisibility="hidden lg:flex" />
        <Footer />
      </body>
    </html>
  );
}
