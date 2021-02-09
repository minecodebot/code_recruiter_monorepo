import React from 'react'
import { HashtagIconCertified } from './styles'

export interface Props {
  tag: string
}

const SkillItem: React.FC<Props> = ({ tag }: Props) => (
  <>
    <span className='tag'>
      <span>
        <HashtagIconCertified />
        {tag}
      </span>
      <span className='certified'> Certified</span>
    </span>
  </>
)

export default SkillItem
