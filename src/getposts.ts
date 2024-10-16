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

    const metadataObject: { [key: string]: string } = metadata.reduce((acc: { [key: string]: string }, curr: string) => {
      const [key, value] = curr.split(": ");
      acc[key] = value;
      return acc;
    }, {});
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
  const files = await fs.readdir(dirPath, { encoding: "utf8", withFileTypes: false });
  
  files.forEach((file, i) => {
    let post: Post;
    
    // Turn file content into a lines array
    const readFile = (filename: string) => {
      const fileContent: string = fs.readFile(filename, "utf-8");
      const lines: string[] = fileContent.split("\n");
      const metadataIndices: number[] = lines
      .map((string, index) => (string === "---" ? index : -1)) // map to index or -1
      .filter((index) => index !== -1); // filter out -1
      return metadataIndices
    });

    const metadata = parseMetadata(lines, metadataIndices);
    const content = parseContent(lines, metadataIndices);

    // then add the post to the postlist array
    post = {
      id: i + 1,
      title: metadata.title ? metadata.title : "",
      author: metadata.author ? metadata.author : "",
      date: metadata.date ? metadata.date : "",
      tag: metadata.tag ? metadata.tag : "",
      content: content ? content : "",
    };
    postlist.push(post);

    // When the file index is same as number of files in folder, that means the forEach looping has finished
    if (i === files.length - 1) {
      // when forEach is finished you can save it all in a json file so that it can be dynamically inserted into landing page on client side
      let data = JSON.stringify(postlist);
      fs.writeFile("src/posts.json", data);
    }
  });
  setTimeout(() => {console.log(postlist)}, 300);
  // need to set timeout otherwise the array is empty if you console log it because it's a promise/async/await, so the rest of the code hasn't run yet
  // 300ms aka 0.3sec should be enough time
};

getPosts(path.join(__dirname, "../src/content"));
