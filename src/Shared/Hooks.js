import { useEffect, useState } from 'react'

/**
 * Use a markdown file
 */
export const useMarkdown = path => {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(path)
      const content = await response.text()

      setContent(content)
    }

    fetchMarkdown()
  }, [path])

  return content
}
