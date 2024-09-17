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
              Formerly an engineering student, I enrolled at FAST NUCES to pursue my BSc in Computer Science, back when the missing semicolons in my code were no match for my aspirations about technology and innovation.
              I dove head-first into coding, mastering fundamentals though hands-on projects in C, C++, Data Structures, and Assembly Language.
              Beyond the classroom, I participated in coding competitions, taught myself Flutter and Python, and attended tech seminars where I discovered my true calling in Data Analysis.
            </p>
              <p>
              An exciting chapter unfolded when I was awarded a scholarship from DataCamp. Fast forward to now, I’m a certified data analyst who has worked with Creds, leveraging SQL, Tableau and Power BI to drive strategic investment decisions. Data has continually inspired me with its power to tell stories, predict the future, and solve the world’s biggest problems. Currently, I balance my time between university and running my start-up.
              I’m especially interested in applying my skills to drive environmental protection, health innovation and educational empowerment.
              </p>
              <p>
              When I’m not coding or innovating, you can find me competing in badminton tournaments, 
              volunteering for Al-Khidmat Foundation, and counseling aspiring young tech enthusiasts. I am eager to learn from both seasoned professionals and emerging talents, leave no stone unturned in the world of Data Science and Artificial Intelligence, 
              and contribute to a more resilient, sustainable, and thriving planet.
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
