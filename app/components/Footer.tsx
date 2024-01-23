const socialLinks = [
  {
    link: "https://github.com/suhaasvijay",
    imagePath: "/social/github.svg"
  },
  {
    link: "https://mail.google.com/mail/u/0/?fs=1&to=suhaasvijay7@gmail.com&tf=cm",
    imagePath: "/social/gmail.svg"
  },
  {
    link: "https://www.linkedin.com/in/suhaasv7/",
    imagePath: "/social/linkedin.svg"
  }
]

export default function Footer() {
  return (
    <div className="mt-44 mb-16 flex flex-col sm:flex-row gap-y-4 justify-between">
      <p className="text-xl md:text-2xl">Designed and Developed by Suhaas V</p>
      <div className="flex gap-6">
        {socialLinks.map(({ link, imagePath }) => (
          <a href={link} target="_blank">
            <img key={link} src={imagePath} width={35} height={35} />
          </a>
        ))}
      </div>
    </div>
  )
}
