import useSWR from "swr";
import { fetcher } from "src/util/fetcher";
import { List, ThemeIcon } from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";

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
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <CircleCheck size={16} />
        </ThemeIcon>
      }
    >
      {data.map((user: any) => {
        return <List.Item key={user.id}>{user.name}</List.Item>;
      })}
    </List>
  );
};
