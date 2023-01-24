import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import { Partytown } from "@builder.io/partytown/react";
import dataProvider from "@pankod/refine-simple-rest";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";
import { appWithTranslation, useTranslation } from "next-i18next";
import { authProvider } from "src/authProvider";

const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      resources={[
        {
          name: "posts",
          list: HeadlessInferencer,
          edit: HeadlessInferencer,
          show: HeadlessInferencer,
          create: HeadlessInferencer,
          canDelete: true,
        },
      ]}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
    >
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
      </Head>

      <Component {...pageProps} />
    </Refine>
  );
}

export default appWithTranslation(MyApp);
