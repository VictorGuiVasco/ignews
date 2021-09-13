import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    router.push('/posts')
  }

  return (
    <button type='button' className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe Now
    </button>
  )
}
