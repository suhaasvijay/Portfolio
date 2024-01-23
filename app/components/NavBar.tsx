import Image from "next/image";

export default function NavBar() {
  return (
    <div className="py-5 pt-12 flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl">Suhaas V</h1>
        <p className="lg:text-2xl text-sm">Designer & Developer</p>
      </div>
      <Image className="rounded-full border border-[#161616]" src="/profile-bg.png" alt="profile" width={100} height={100} />
    </div>
  )
}
