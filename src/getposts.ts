//file system library
import fs from "fs/promises";
import path from "path";

interface Post {
  id: number;
  title: string;
  author: string;
  date?: string;
  tag?: string;
  content?: string;
}

// Parsing files
function parseMetadata(lines: string[], indices: number[]) {
  if (indices.length > 0) {
    // if we have a metadataIndices array, we want to slice lines array for lines between the two indices with --- in it
    let metadata: string[] = lines.slice(indices[0] + 1, indices[1]);

    const metadataObject: { [key: string]: string } = metadata.reduce(
      (acc: { [key: string]: string }, curr: string) => {
        const [key, value] = curr.split(": ");
        acc[key] = value;
        return acc;
      },
      {}
    );
    return metadataObject;
  }
  return {};
}

function parseContent(lines: string[], indices: number[]) {
  if (indices.length > 0) {
    //everything after the second --- lime
    lines = lines.slice(indices[1] + 1, lines.length);
  }
  return lines.join("\n");
}

// Initiatlise empty postlist array
let postlist: Post[] = [];

// Getting posts
async function getPosts(dirPath: string) {
  try {
    const files = await fs.readdir(dirPath, {
      encoding: "utf8",
      withFileTypes: false,
    });

    for (let i = 0; i < files.length; i++) {
      // Iterate with a regular for-loop
      const file = files[i];
      let post: Post;

      // Turn file content into a lines array
      const readFile = async (
        filename: string
      ): Promise<{ lines: string[]; metadataIndices: number[] }> => {
        const fileContent = await fs.readFile(
          `${dirPath}/${filename}`,
          "utf-8"
        ); // Await the async operation
        const lines = fileContent.split("\n");
        const metadataIndices = lines
          .map((line, index) => (line === "---" ? index : -1)) // map to index or -1
          .filter((index) => index !== -1); // filter out -1
        return { lines, metadataIndices };
      };

      const { lines, metadataIndices } = await readFile(file); // Await the readFile function
      const metadata = parseMetadata(lines, metadataIndices); // Assuming parseMetadata is defined
      const content = parseContent(lines, metadataIndices); // Assuming parseContent is defined

      // Create a post object
      post = {
        id: i + 1,
        title: metadata.title || "",
        author: metadata.author || "",
        date: metadata.date || "",
        tag: metadata.tag || "",
        content: content || "",
      };

      postlist.push(post); // then add the post object to the postlist array
    }

    // Write the postlist to a JSON file
    const data = JSON.stringify(postlist, null, 2); // Pretty print the JSON
    await fs.writeFile("src/posts.json", data, "utf-8"); // Await the write operation

    console.log(postlist); // Log the postlist after async operations
  } catch (error) {
    console.error("Error reading files:", error);
  }
}

getPosts(path.join(__dirname, "../src/content"));
