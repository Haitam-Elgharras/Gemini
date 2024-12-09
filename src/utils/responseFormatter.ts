export const formatResponse = (
  response: string,
  callback: (word: string) => void
) => {
  // Step 1: Handle headings (#, ##, ###) and lists (numbered or bulleted)
  let formattedResponse = response
    .split("\n") // Split response into lines
    .map((line) => {
      if (line.startsWith("### ")) {
        console.log("line", line);
        return `<h3>${line.slice(4)}</h3>`;
      } else if (line.startsWith("## ")) {
        return `<h2>${line.slice(3)}</h2>`;
      } else if (line.startsWith("# ")) {
        console.log("heading 1", line);
        return `<h1>${line.slice(2)}</h1>`;
      } else if (/^\d+\.\s/.test(line)) {
        // Matches numbered list items (e.g., "1. ", "2. ")
        return `<li>${line.replace(/^\d+\.\s/, "")}</li>`;
      } else if (line.startsWith("* ")) {
        // Matches bulleted list items
        return `<li>${line.slice(2)}</li>`;
      } else {
        return line;
      }
    })
    .join(""); // Join lines back together

  // Step 2: Wrap detected lists in <ul> or <ol> tags
  formattedResponse = formattedResponse.replace(/(<li>.*?<\/li>)+/g, (match) => {
    if (/^\d+\.\s/.test(match)) {
      return `<ol>${match}</ol>`;
    } else {
      return `<ul>${match}</ul>`;
    }
  });

  // Step 3: Handle bold formatting (**word**) inline
  formattedResponse = formattedResponse
    .split("**")
    .map((part, index) => (index % 2 === 1 ? `<b>${part}</b>` : part))
    .join("");

  // Step 4: Replace * with line breaks (handled last to avoid interfering with ** processing)
  formattedResponse = formattedResponse.split("*").join("<br>");

  // Display the formatted response with a delay
  writeWithDelay(formattedResponse, callback);
};

const writeWithDelay = (text: string, callback: (word: string) => void) => {
  text.split(" ").forEach((word, index) => {
    setTimeout(() => callback(word + " "), 10 * index);
  });
};
