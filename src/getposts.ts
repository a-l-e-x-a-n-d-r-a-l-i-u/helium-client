//why does postlist.push read files in alphabetical order, but in posts.json, order is random af

//file system library
import fs from "fs/promises";
import path from "path";

interface Post {
  id: number;
  title: string;
  author: string;
  date?: string;
  tag?: string;
  content?: string[]
}

// Defining the functions

function parseMetadata({ lines: string[], metadataIndices: number[] }) {
  // if we have a metadata indices array with elements in it, we want to slice the lines array between the two indices with the --- in it
  if (metadataIndices.length > 0) {
    // but ignoring the first line that's just --- and we want to start at title
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
    // console.log("metadata: " + metadata)
    metadata.forEach(line => {
      metadataObject[line.split(": ")[0]] = line.split(": ")[1]
    })
    console.log('metadata object: ', metadataObject)
    return metadataObject
  }
  // because metadataIndices.length is 0 for the blank markdown files, need to return empty object
  return {}
}

function parseContent({ lines: string[], metadataIndices: number[] }) {
  if (metadataIndices.length > 0) {
    //everything after the second --- lime
    lines = lines.slice(metadataIndices[1] + 1, lines.length)
  }
  return lines.join("\n")
}

// Getting posts

const dirPath = path.join(__dirname, "../src/content")
let postlist: Post[] = []

const getPosts = async () => {
  await fs.readdir(dirPath, { encoding: "utf8", withFileTypes: false }, (err: Error, files: string[]) => {
    if (err) {
      return console.log("Failed to list contents of directory:", err)
    }

    files.forEach((file, i) => {
      let post<Post>
      fs.readFile(`${dirPath}/${file}`, "utf8", (err: Error, contents: string) => {
        console.log('There are', files.length, 'files in the content folder')
        let getMetadataIndices = (accumulator: number[], element: string, i: number) => {
          // We want to find --- and test to see if it's there or not. So we pass the element of the array into test method
          if (/^---/.test(element)) {
            // and if --- is there we record the index in the array
            accumulator.push(i)
          }
          // console.log('accumulator: ', accumulator)
          return accumulator
        }

        let lines = contents.split("\n")
        let metadataIndices = lines.reduce(getMetadataIndices, [])
        // console.log("metadataIndices: " + metadataIndices)
        const metadata = parseMetadata({ lines, metadataIndices })
        const content = parseContent({ lines, metadataIndices })

        // then add the post to the postlist array
        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "",
          author: metadata.author ? metadata.author : "",
          date: metadata.date ? metadata.date : "",
          tag: metadata.tag ? metadata.tag : "",
          content: content ? content : ""
        }
        postlist.push(post)

        // remember index starts counting as 0 lol so need to -1 to see if index is same as the number of files in content directory
        // when the file index is same as number of files in folder, that means the forEach looping has finished
        if (i === files.length - 1) {
          // when forEach is finished you can save it all in a json file so that it can be dynamically inserted into landing page on client side
          let data = JSON.stringify(postlist)
          fs.writeFile("src/posts.json", data)
        }
      })
    })
  })
  setTimeout(() => {
    console.log(postlist)
  }, 300)
  // need to set timeout otherwise the array is empty if you console log it because it's a promise/async/await, so the rest of the code hasn't run yet
  // 300ms aka 0.3sec should be enough time
}

getPosts()