import { Box, Button, CloseButton, Group, TextInput } from "@mantine/core";
import { SearchFormProps } from "./type";

export const SearchForm = (props: SearchFormProps) => {
  const cancelButton =
    props.form.values.word.length > 0 ? (
      <CloseButton
        title="Close popover"
        size="sm"
        iconSize={20}
        onClick={props.form.reset}
      />
    ) : null;
  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <form onSubmit={props.form.onSubmit((values) => console.log(values))}>
        <TextInput
          type="search"
          required
          label="検索ワード"
          placeholder="検索ワードを入力してください"
          {...props.form.getInputProps("word")}
          value={props.form.values.word}
          onChange={(e) => {
            props.form.setFieldValue("word", e.currentTarget.value);
          }}
          rightSection={cancelButton}
        />
        <Group position="right" mt="md">
          <Button type="submit">検索</Button>
        </Group>
      </form>
    </Box>
  );
};
