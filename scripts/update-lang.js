const fs = require("fs");

const EXTRACTED_PATH = "src/lang/extracted";

const engMessages = JSON.parse(
  fs.readFileSync(`${EXTRACTED_PATH}/en-US.json`, "utf-8")
);

const files = fs.readdirSync(EXTRACTED_PATH, "utf-8");

files
  .filter((file) => file.endsWith(".json") && file !== "en-US.json")
  .forEach((file) => {
    const content = fs.readFileSync(`${EXTRACTED_PATH}/${file}`, "utf-8");
    const messages = JSON.parse(content);
    // Use trick to push English messages to the beginning
    const ret = Object.assign({}, engMessages);
    for (const k in messages) {
      if (k !== messages[k]) {
        delete ret[k];
        ret[k] = messages[k];
      }
    }
    fs.writeFileSync(
      `${EXTRACTED_PATH}/${file}`,
      JSON.stringify(ret, null, 2) + "\n"
    );
  });
