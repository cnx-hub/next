import BlogList from "../components/blogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客列表",
};

function Page() {
  return <BlogList />;
}

export default Page;
