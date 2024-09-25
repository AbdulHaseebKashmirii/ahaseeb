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
            <Tool title="X380” Lenovo Yoga ThinkPa 16GB RAM (2023)">
              I don&apos;t know how Lenovo makes the Yoga ThinkPad x380 so compact yet so fast and responsive, no matter what load I put on it
            </Tool>
            <Tool title="x380 Yoga">
              8th Generation i7 with 1024 GB of memory, running Windows 11 for my work as a data analyst, founder, and developer
            </Tool>
            {/* <Tool title="Moonlander Keyboard">
              I had terrible RSI problems until I switched to the Moonlander and the Apple Magic Trackpad.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              It even works on Linux. Who knew?
            </Tool> */}

          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode">
              Yeah I know it&apos;s basic to use VSCode but I don&apos;t really care. I keep my setup pretty minimal and I usually turn off all the distractions in my IDE to keep it as minimal as possible.
            </Tool>
            <Tool title="Power BI">
            As a data analyst, Power BI empowers me to transform raw data into actionable insights through interactive visualizations, seamless data integration, real-time analytics, customizable dashboards, robust data modeling, collaborative features, mobile accessibility, natural language querying, and advanced AI-driven analytics, facilitating informed decision-making across the organization.
            </Tool>
            {/* <Tool title="Moonlander Keyboard">
              I had terrible RSI problems until I switched to the Moonlander and the Apple Magic Trackpad.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              It even works on Linux. Who knew?
            </Tool> */}

          </ToolsSection>          

        </div>
      </SimpleLayout>
    </>
  )
}
