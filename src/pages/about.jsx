import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  // InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  // MastodonIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/brian-head.jpg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Abdul Haseeb"
        description={siteMeta.description}
        canonical="https://ahaseeb.com/about"
        openGraph={{
          url: 'https://ahaseeb.com/about',
          images: [
            {
              url: `https://og.brian.dev/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'ahaseeb.com',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I’m Abdul Haseeb.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
            <p>
             I initially started as an engineering student, but my interest in technology led me to pursue a BSc in Computer Science at FAST NUCES. This marked a significant shift in my career path and was a deliberate choice to follow my passion. During my time at university, I focused extensively on mastering the fundamentals of programming languages such as C, C++, and Assembly Language. These languages helped me build a strong foundation in computer science, especially in areas like Data Structures, which are essential for problem-solving and algorithmic thinking
            </p>
              <p>
             Outside of coursework, I was highly involved in coding competitions. These fast-paced and challenging events reflected my competitive spirit and drive for continuous improvement. Additionally, I took the initiative to teach myself Python, a highly versatile and popular programming language used in data analysis and machine learning. This self-motivation and adaptability to new tools and technologies have been essential in my learning journey.
              </p>
              <p>
              A major turning point for me was receiving a scholarship from DataCamp, a leading platform for data science education. This opportunity allowed me to delve deeper into data analysis and equipped me with specialized skills in tools such as SQL, Tableau, and Power BI—essential for data visualization, database management, and making data-driven business decisions. I am passionate about the power of data, which I see not just as a technical tool but as a way to tell stories, predict future trends, and address some of the world’s most pressing issues, such as environmental protection, health innovation, and educational empowerment. 
              </p>
              <p>
                Overall, my journey reflects a blend of technical expertise, self-driven learning, and a strong sense of purpose. My focus on data analysis, paired with my passion for using technology to solve global challenges, sets me on a path toward making meaningful contributions in fields like environmental sustainability, healthcare, and education.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
