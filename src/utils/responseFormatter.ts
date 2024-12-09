

export const formatResponse = (response: string, callback: (word: string) => void) => {
    const responseArray = response.split("**");
    let formattedResponse = responseArray
      .map((part, index) => (index % 2 === 1 ? `<b>${part}</b>` : part))
      .join(" ");
    const responseWithLineBreaks = formattedResponse.split("*").join("<br>");
    writeWithDelay(responseWithLineBreaks, callback);
  };

  const writeWithDelay = (text: string, callback: (word: string) => void) => {
    text.split(" ").forEach((word, index) => {
      setTimeout(() => callback(word + " "), 10 * index);
    });
  }  