import { useEffect, useState } from "react";
import { Text } from "./styles";
import { SearchBar } from "../SearchBar";

export function TextModal({ text, href, onClick }) {
  return (
    <Text href={href} onClick={onClick}>
      <p>{text}</p>
    </Text>
  );
}
