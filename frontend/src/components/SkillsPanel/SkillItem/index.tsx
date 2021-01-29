import React from 'react'
import { HashtagIcon, HashtagIconCertified } from './styles'

export interface Props {
  tag: string
}

const SkillItem: React.FC<Props> = ({ tag }) => {
  return (
    <>
      <span className="tag">
        <span>
          <HashtagIconCertified />
          {tag}
        </span>
        <span className="certified"> Certified</span>
      </span>
    </>
  )
}

export default SkillItem
