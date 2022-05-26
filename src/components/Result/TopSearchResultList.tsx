import useSWR from "swr";
import { fetcher } from "src/util/fetcher";
import { List } from "@mantine/core";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const useFetchList = () => {
  const { data, error } = useSWR(API_URL, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export const TopSearchResultList = () => {
  const { data, error, isLoading } = useFetchList();
  console.log("レンダリング");
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <List>
      {data.map((user: any) => {
        return <List.Item key={user.id}>{user.name}</List.Item>;
      })}
    </List>
  );
};
