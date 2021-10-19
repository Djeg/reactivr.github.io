import React from 'react'
import Markdown from '../Shared/Markdown'
import getStartedUrl from './GetStarted.md'
import { useMarkdown } from '../Shared/Hooks'

/**
 * The get started page
 */
export default function GetStarted() {
  const content = useMarkdown(getStartedUrl)

  return (
    <div className="text-content">
      <Markdown content={content} />
    </div>
  )
}
