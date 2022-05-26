import { Box, Button, Input, Text } from "@mantine/core";
import React from "react";
import { searchWordType } from "src/pages/type";
import { SearchWordListPropsType } from "./type";

export const SearchWordList: React.FC<SearchWordListPropsType> = (props) => {
  const handleAddSearchWord: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    props.setSearchWord((prevSearchWord) => {
      e.preventDefault;
      return prevSearchWord + (e.target as HTMLInputElement).value;
    });
  };
  return (
    <div>
      {props.wordListObject.map((searchWord: searchWordType) => (
        <Input
          onClick={handleAddSearchWord}
          key={searchWord.id}
          component="button"
          m={40}
          value={searchWord.word}
        >
          {searchWord.word}
        </Input>
      ))}
    </div>
  );
};
