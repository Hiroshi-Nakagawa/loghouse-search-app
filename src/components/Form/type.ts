import { Dispatch, SetStateAction } from "react";
import { searchWordType } from "src/pages/type";

export type SearchWordListPropsType = {
  wordListObject: searchWordType[];
  setSearchWord: Dispatch<SetStateAction<string>>;
};
