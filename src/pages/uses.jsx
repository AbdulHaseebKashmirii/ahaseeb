import { NextSeo } from 'next-seo';
import  siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
    <NextSeo
      title="Uses - Abdul Haseeb"
      description={siteMeta.description}
      canonical="https://ahaseeb.com/uses"
      openGraph={{
        url: 'https://ahaseeb.com/uses',
        images: [
          {
            url: `https://og.brian.dev/api/og?title=Uses&desc=Things I use every day to get my work done.`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],

        siteName: 'ahaseeb.com',
      }}
    />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="X380” Lenovo Yoga ThinkPad 16GB RAM (2023)">
              I don&apos;t know how Lenovo makes the Yoga ThinkPad x380 so compact yet so fast and responsive, no matter what load I put on it
            </Tool>
            <Tool title="x380 Yoga">
              8th Generation i7 with 1024 GB of memory, running Windows 11 for my work as a data analyst, founder, and developer
            </Tool>
            {/* <Tool title="Moonlander Keyboard">
              I had terrible RSI problems until I switched to the Moonlander and the Apple Magic Trackpad.
            </Tool> */}
            {/* <Tool title="Apple Magic Trackpad">
              It even works on Linux. Who knew?
            </Tool>  */}

          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode">
             Yeah I know it&apos;s basic to use VSCode but I don&apos;t really care. I keep my setup pretty minimal and I usually turn off all the distractions in my IDE to keep it as minimal as possible.
            </Tool>
            <Tool title="Power BI">
            Power BI enables me to convert raw data into actionable insights with interactive visualizations, customizable dashboards, and real-time analytics for informed decision-making.
            </Tool>
            <Tool title="Chrome">
             Google Chrome is still the most popular web browser so it&apos;s what I use to test my web apps most of the time.
            </Tool>
          </ToolsSection>          

          <ToolsSection title="Productivity">
            <Tool title="Badminton">
            Badminton is a fast-paced sport that boosts fitness, coordination, and social interaction by hitting a shuttlecock over a net, making it a fun way to stay active and relieve stress.
            </Tool>
            <Tool title="Social Fuel">
            Outings with friends recharge me, sparking creativity and enhancing my problem-solving skills to keep me motivated and effective.
            </Tool>
            <Tool title="Photography">
            Photography rejuvenates me, igniting creativity and sharpening my observational skills as I capture nature&apos;s wonders, keeping me inspired and effective in my craft.
            </Tool>
            <Tool title="Notion Calendar">
            I like notion calendar because it syncs with my Google Calendar and it can run in the background to make sure I don&apos;t miss any events.
            </Tool>
           

          </ToolsSection>          

        </div>
      </SimpleLayout>
    </>
  )
}
