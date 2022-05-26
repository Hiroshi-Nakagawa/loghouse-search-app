import { Input } from "@mantine/core";
import React from "react";
import { searchWordType } from "src/pages/type";
import { SearchWordListPropsType } from "./type";

export const SearchWordList: React.FC<SearchWordListPropsType> = (props) => {
  const handleAddSearchWord: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    props.form.setFieldValue(
      "word",
      props.form.values.word + " " + (e.target as HTMLInputElement).value
    );
  };
  return (
    <div>
      {props.wordListObject.map((searchWord: searchWordType) => (
        <Input
          onClick={handleAddSearchWord}
          key={searchWord.id}
          value={searchWord.word}
          component="button"
          m={40}
          radius="sm"
          size="sm"
          className="inline-block"
        >
          {searchWord.word}
        </Input>
      ))}
    </div>
  );
};
