import { Box, Button, Group, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { SearchFormProps } from "./type";

export const SearchForm = (props: SearchFormProps) => {
  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <form onSubmit={props.form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="検索ワード"
          placeholder="検索ワードを入力してください"
          {...props.form.getInputProps("word")}
          value={props.form.values.word}
          onChange={(e) => {
            props.form.setFieldValue("word", e.currentTarget.value);
          }}
        />

        <Group position="right" mt="md">
          <Button type="submit">検索</Button>
        </Group>
      </form>
    </Box>
  );
};
