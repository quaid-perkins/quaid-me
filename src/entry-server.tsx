// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" data-theme="system">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
          {assets}
        </head>
        <body class="bg-zinc-200 font-rubik dark:bg-zinc-900">
          <div id="app" class="min-h-[100dvh]">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
