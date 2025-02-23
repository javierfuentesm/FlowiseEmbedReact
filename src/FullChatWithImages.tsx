import { useEffect, useRef } from 'react'
import type { BotProps } from 'flowise-embed'

type Props = BotProps & {
  style?: React.CSSProperties
  className?: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'flowise-fullchatbot-with-images': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string }
    }
  }
}

type FullChatWithImagesElement = HTMLElement & Props

export const FullChatWithImages = ({ style, className, ...assignableProps }: Props) => {
  const ref = useRef<FullChatWithImagesElement | null>(null)

  useEffect(() => {
    ;(async () => {
      await import('flowise-embed/dist/web.js')
    })()
  }, [])

  useEffect(() => {
    if (!ref.current) return
    Object.assign(ref.current, assignableProps)
  }, [assignableProps])

  return <flowise-fullchatbot-with-images ref={ref} style={style} class={className} />
} 