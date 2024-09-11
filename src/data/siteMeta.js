
import logoAmazon from '@/images/logos/aws.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'
 
const siteMeta = {
    title: "Abdul Haseeb",
    description: "Abdul Haseeb is a developer advocate, keynote speaker, author, and open source practitioner.",
    copyright: "Abdul Haseeb",
    author: {
        name: "Abdul Haseeb",
        email: "me@brian.dev",
        twitter: "https://twitter.com/bketelsen",
        mastodon: "https://tty0.social/@bketelsen",
        instagram: "https://instagram.com/bketelsen",
        github: "https://github.com/bketelsen",
        linkedin: "https://linkedin.com/in/brianketelsen",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://brian.dev"
}
 export const resume = [
    {
      company: 'Amazon',
      title: 'Principal Developer Advocate',
      logo: logoAmazon,
      start: '2022',
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
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
]


export default siteMeta;