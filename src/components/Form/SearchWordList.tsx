import { Button } from "@mantine/core";
import React from "react";
import { searchWordType } from "src/pages/type";
import { SearchWordListPropsType } from "./type";

export const SearchWordList: React.FC<SearchWordListPropsType> = (props) => {
  return (
    <div>
      {props.wordListObject.map((searchWord: searchWordType) => (
        <Button key={searchWord.id} component="a" m={40}>
          {searchWord.word}
        </Button>
      ))}
    </div>
  );
};
