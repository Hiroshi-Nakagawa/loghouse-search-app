import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { searchWordType } from "src/pages/type";

export type SearchWordListPropsType = {
  wordListObject: searchWordType[];
  form: UseFormReturnType<{
    word: string;
  }>;
};
export type SearchFormProps = {
  form: UseFormReturnType<{
    word: string;
  }>;
};
