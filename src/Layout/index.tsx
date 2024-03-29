import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import Head from "next/head";
import React, { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="ログハウスの情報検索をサポートするサイト"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Text>アバウト</Text>
            <Text>ギャラリー</Text>
            <Text>作り方</Text>
            <Text>価格</Text>
            <Text>自作</Text>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>北海道</Text>
              <Text>青森</Text>
              <Text>岩手</Text>
              <Text>秋田</Text>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Created by rosshi96
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text
                size="xl"
                variant="link"
                component="a"
                href="/"
                color="gray"
              >
                ログサポート
              </Text>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
