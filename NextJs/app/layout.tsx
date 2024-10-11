import { inter } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Image Gallery</title>
        <meta name="description" content="Gallery to hold all of your media" />
      </head>
      <body className={inter.className}>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
        {children}
      </body>
    </html>
  );
}
