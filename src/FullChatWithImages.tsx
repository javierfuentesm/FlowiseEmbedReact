import { useCallback, useEffect, useRef, useState } from 'react'
import type { BubbleProps } from 'flowise-embed'

type Props = BubbleProps

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'flowise-fullchatbot-with-images': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

type FullChatWithImagesElement = HTMLElement & Props

export const FullChatWithImages = (props: Props) => {
  const ref = useRef<FullChatWithImagesElement | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    ;(async () => {
      await import('flowise-embed/dist/web.js')
      setIsInitialized(true)
    })()
    return () => {
      ref.current?.remove()
    }
  }, [])

  const attachFullChatToDom = useCallback((props: Props) => {
    const fullChatElement = document.createElement(
      'flowise-fullchatbot-with-images'
    ) as FullChatWithImagesElement
    ref.current = fullChatElement
    injectPropsToElement(ref.current, props)
    document.body.append(ref.current)
  }, [])

  useEffect(() => {
    if (!isInitialized) return
    if (!ref.current) attachFullChatToDom(props)
    injectPropsToElement(ref.current as FullChatWithImagesElement, props)
  }, [attachFullChatToDom, isInitialized, props])

  const injectPropsToElement = (element: FullChatWithImagesElement, props: Props) => {
    Object.assign(element, props)
  }

  return null
} 