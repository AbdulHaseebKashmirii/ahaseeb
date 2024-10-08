
import logoAmazon from '@/images/logos/aws.svg'

 
const siteMeta = {
    title: "Abdul Haseeb",
    description: "Abdul Haseeb is a developer advocate, keynote speaker, author, and open source practitioner.",
    copyright: "Abdul Haseeb",
    author: {
        name: "Abdul Haseeb",
        email: "abdulhaseeb5654@gmail.com",
        twitter: "https://twitter.com/abdulhaseebk158",
        github: "https://github.com/AbdulHaseebKashmirii",
        linkedin: "https://www.linkedin.com/in/abdulhaseebkashmiri",
    },
    siteUrl: "https://ahaseeb.com"
}
 export const resume = [
    {
      company: 'FAST NUCES Karachi',
      title: 'Student Teaching Assistant',
      logo: logoAmazon,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    // {
    //   company: 'Microsoft',
    //   title: 'Principal Cloud Developer Advocate',
    //   logo: logoMicrosoft,
    //   start: '2017',
    //   end: '2022',
    // },
  ]
export const projects = [
  // {
  //   name: 'Fleek',
  //   description:
  //     'Install and manage all the tools you need to be productive.',
  //   link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
  //   logo: logoFleek,
  // },
  // {
  //   name: 'Universal Blue',
  //   description:
  //     'Custom Operating System images based on Fedora.',
  //   link: { href: 'https://ublue.it', label: 'Universal Blue' },
  //   logo: logoUblue,
  // },
]


export default siteMeta;