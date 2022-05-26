import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

type SearchFormProps = {
  searchWord: string;
};

export const SearchForm = (props: SearchFormProps) => {
  const form = useForm({
    initialValues: {
      word: "",
    },

    validate: {
      word: (value) => (value.length > 20 ? "検索ワードが長すぎます" : null),
    },
  });
  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="検索ワード"
          placeholder="検索ワードを入力してください"
          {...form.getInputProps("word")}
          value={props.searchWord}
        />

        <Group position="right" mt="md">
          <Button type="submit">検索</Button>
        </Group>
      </form>
    </Box>
  );
};
