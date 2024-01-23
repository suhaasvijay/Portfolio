import Image from "next/image"

const tools = [
  {
    link: "/",
    imagePath: "/tools/github.svg"
  },
  {
    link: "/",
    imagePath: "/tools/bootstrap.svg"
  },
  {
    link: "/",
    imagePath: "/tools/codeium.svg"
  },
  {
    link: "/",
    imagePath: "/tools/codepen.svg"
  },
  {
    link: "/",
    imagePath: "/tools/codesandbox.svg"
  },
  {
    link: "/",
    imagePath: "/tools/css3.svg"
  },
  {
    link: "/",
    imagePath: "/tools/figma.svg"
  },
  {
    link: "/",
    imagePath: "/tools/git.svg"
  },
  {
    link: "/",
    imagePath: "/tools/html5.svg"
  },
  {
    link: "/",
    imagePath: "/tools/javascript.svg"
  },
  {
    link: "/",
    imagePath: "/tools/linear.svg"
  },
  {
    link: "/",
    imagePath: "/tools/netlify.svg"
  },
  {
    link: "/",
    imagePath: "/tools/nodedotjs.svg"
  },
  {
    link: "/",
    imagePath: "/tools/notion.svg"
  },
  {
    link: "/",
    imagePath: "/tools/openai.svg"
  },
  {
    link: "/",
    imagePath: "/tools/react.svg"
  },
  {
    link: "/",
    imagePath: "/tools/reactrouter.svg"
  },
  {
    link: "/",
    imagePath: "/tools/sanity.svg"
  },
  {
    link: "/",
    imagePath: "/tools/sass.svg"
  },
  {
    link: "/",
    imagePath: "/tools/tailwindcss.svg"
  },
  {
    link: "/",
    imagePath: "/tools/typescript.svg"
  },
  {
    link: "/",
    imagePath: "/tools/vercel.svg"
  },
  {
    link: "/",
    imagePath: "/tools/visualstudiocode.svg"
  },
  {
    link: "/",
    imagePath: "/tools/reactrouter.svg"
  },
]


export default function ToolsAndTechnologies() {
  return (
    <div className="pt-10">
      <h1 className='text-[50px] mt-10'>Tools and Technologies</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-12 md:pl-40 py-20 ">
        {tools.map(({ link, imagePath }) => (
          <img className="p-5 my-4 border border-white" src={imagePath} alt="profile" width={90} height={90} />
        ))}
      </div>
    </div>
  )
}
