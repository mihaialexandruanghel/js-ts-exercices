import * as fs from "graceful-fs";

async function convertNumbers(data: string) {
  let array = data.split("\r\n");
  let newNumbers: string[] = [];
  array.forEach((element: string) => {
    let array2 = element.split(",");

    if (Number(array2[0]) && Number(array2[1]) && Number(array2[2])) {
      let newNumber = parseInt(array2[0], Number.parseInt(array2[1])).toString(
        Number.parseInt(array2[2])
      );
      newNumbers.push(newNumber);
    }
  });
  return newNumbers;
}

function writeInFile(array: string[]) {
  let file = fs.createWriteStream("./convertedNumbers.csv");
  array.forEach((element) => {
    file.write(element + "\n", (err) => {
      if (err) {
        return console.error(err);
      }
    });
  });
}

async function main() {
  fs.readFile("./ChangeBaseNumbers.csv", "utf8", async (err, data) => {
    if (err) {
      return console.error(err);
    }
    let start = new Date().getTime();
    let newNumbers = await convertNumbers(data);
    let end = new Date().getTime();
    console.log(end - start + " Miliseconds");
    writeInFile(newNumbers);
  });
}

main();
