import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Abdul Haseeb</title>
        <meta
          name="description"
          content="Get notified when I publish something new."
        />
      </Head>
      <SimpleLayout
        title="Thanks for hopping on board! 🎉"
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
