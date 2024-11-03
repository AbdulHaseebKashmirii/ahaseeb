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
        intro="I’m looking forward to sharing my journey as a data scientist and developer with you. You’ll get exclusive updates whenever I launch a new project, share insightful discoveries, or have exciting news to discuss. And don’t worry—if you decide to part ways, you can unsubscribe anytime, no hard feelings!"
      />
    </>
  )
}
