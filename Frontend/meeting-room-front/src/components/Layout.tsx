import React from "react";

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

function Layout({ children, pageTitle }: Props) {
  return (
    <html>
      <head>
        <meta name="iewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Meeting Room App" />
        <title>{pageTitle}</title>
      </head>
      <body>
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

export default Layout;
