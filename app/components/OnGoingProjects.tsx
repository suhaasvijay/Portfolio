const links = [
  {
    title: "Blog",
    link: "/",
    imageUrl: "/onGoingProjects/blog.png"
  }
]

export default function OnGoingProjects() {
  return (
    <div className="pt-10">
      <h1 className='text-[50px] mt-10'>On Going Projects</h1>
      <div className='grid items-center justify-center md:pl-40 pt-14 w-full h-full grid-cols-1 my-10 rounded-md gap-y-10 md:grid-cols-2 2xl:grid-cols-4'>
        {links.map(({ title, link, imageUrl }) => (
          <div
            className=" w-[300px] h-[150px] mx-auto flex justify-left items-end p-3 text-lg text-white"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 59%, rgba(0, 0, 0, 1) 100%), url(${imageUrl})`,
              backgroundSize: "cover",
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}
