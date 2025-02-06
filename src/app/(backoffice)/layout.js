import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`w-full flex flex-col items-center pt-16 ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
