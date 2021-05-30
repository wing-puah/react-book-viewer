import { useEffect } from "react";
import axios from "axios";

import SinglePageSidebar from "src/Sidebar/SinglePageSidebar";

import PdfViewer from "src/PdfViewer";
import books from "src/config";

const SingleBookPage = ({ meta }) => {
  if (!meta) {
    return;
  }

  return (
    <>
      <SinglePageSidebar data={meta} />
      <PdfViewer meta={meta} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const bookIndex = books.findIndex((el) => el.id === id);

  if (bookIndex === -1) {
    return { props: { meta: null } };
  }

  const bookInfo = books[bookIndex];

  return { props: { meta: bookInfo } };
}

export default SingleBookPage;
