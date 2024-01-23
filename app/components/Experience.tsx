const experience = [
  {
    position: "Associate Software Developer",
    company: "Codosphere",
    timePeriod: "08/2022 - Present",
    description: "Lorem ipsum dolor sit amet consectetur. Vel pretium egestas vitae lectus rutrum nulla tincidunt. Lorem ipsum dolor sit amet consectetur. Vel pretium egestas vitae lectus rutrum nulla tincidunt. Lorem ipsum dolor sit amet consectetur. Vel pretium egestas vitae lectus rutrum nulla tincidunt. "
  },
]

export default function Experience() {
  return (
    <div>
      <h1 className='text-[50px] mt-10'>Experience</h1>
      <div className="flex">
        {experience.map(({ position, company, timePeriod, description }) => (
          <div className="flex flex-wrap flex-col w-[550px] p-8 border border-white my-20 md:ml-40">
            <h3 className="text-[45px]">{position}</h3>
            <div className="flex text-[18px] text-[#7B7B7B" >
              <h3>{company}</h3>
              <h3 className="pl-10">{timePeriod}</h3>
            </div>
            <p className="text-[22px]">{description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}
