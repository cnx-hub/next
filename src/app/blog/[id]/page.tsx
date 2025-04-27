import { Card } from "antd";
import { data } from "@/data";

const Page = ({ params }: { params: { id: string } }) => {
  const item = data.find((item) => item.id === +params.id)!;

  return (
    <Card title={item.title}>
      <p>{item.body}</p>
    </Card>
  );
};

export default Page;
