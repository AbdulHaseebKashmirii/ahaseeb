import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Abdul Haseeb</title>
        <meta
          name="description"
          content="Let's create something amazing together!."
        />
      </Head>
      <SimpleLayout
        title="Thanks for hopping on board! 🎉"
        intro="I can’t wait to share my adventures as a data scientist, developer, and founder with you. You’ll get the inside scoop whenever I launch a new project, drop some cool insights, or have exciting news to share. And don’t worry, if you ever want to jump ship, you can unsubscribe anytime, no hard feelings!"
      />
    </>
  )
}
