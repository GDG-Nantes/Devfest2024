import * as fs from "fs";

export const writeFile = (path, data) => {
  return new Promise((res) => fs.writeFile(path, data, res));
};

export const normalize = (s: string): string => {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/gim, "_");
};
