import React from "react";
import DragArea from "../components/DragArea";
import MyHeader from "../components/Myheader";
import Head from "next/head";
import useDrop from "../hooks/useDrop";
import Notasinfo from "../components/Notesinfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BlueDegrade from "../components/blueDegrade";

const index = () => {
  let { file, dropFile } = useDrop();
  const queryclient = new QueryClient();
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryclient}>
        <MyHeader />
        <DragArea file={file} dropFile={dropFile} />
        <Notasinfo file={file} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default index;
