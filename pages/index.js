import HomeSidebar from "src/Sidebar/HomeSidebar";

import books from "src/config";
import BookList from "src/BookList";

export default function Home({ list = [] }) {
  return (
    <>
      <HomeSidebar />
      {list.length === 0 ? (
        <div>There is no uploaded books. </div>
      ) : (
        <BookList data={list} />
      )}
    </>
  );
}

export async function getServerSideProps() {
  return { props: { list: books } };
}
