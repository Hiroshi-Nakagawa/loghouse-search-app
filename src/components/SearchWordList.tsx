import { Button } from "@mantine/core";
import React from "react";

type searchWordType = {
  id: number;
  word: string;
};
type SearchWordListProps = { wordListObject: searchWordType[] };

export const SearchWordList: React.FC<SearchWordListProps> = (props) => {
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
