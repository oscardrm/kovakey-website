import { inject, type InjectionKey } from 'vue'
import { es, type Content } from './es'
import { en } from './en'

export type Lang = 'es' | 'en'
export const contents: Record<Lang, Content> = { es, en }
export const contentKey: InjectionKey<Content> = Symbol('content')

export function useContent(): Content {
  const content = inject(contentKey)
  if (!content) throw new Error('Content was not provided')
  return content
}
