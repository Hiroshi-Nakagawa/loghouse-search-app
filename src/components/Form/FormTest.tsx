import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

export const FormTest = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [displayText, setDisplayText] = useState("非表示");
  const [isDisplay, setIsDisplay] = useState(true); // ここ！
  const toggleDisplay = () => {
    setIsDisplay(!isDisplay); // ここ！
    displayText === "非表示"
      ? setDisplayText("表示")
      : setDisplayText("非表示");
  };
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      {/* ここ！ */}
      <Button onClick={toggleDisplay} mb={100}>
        {displayText}
      </Button>
      {isDisplay ? ( // ここ！
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      ) : null}
    </Box>
  );
};
