import React from 'react'
import HashtagItem from './SkillItem'
import Panel from '../Panel'
import { Container } from './styles'

export interface Props {
  tags: string[]
}

const SkillsPanel: React.FC<Props> = ({ tags }) => {
  return (
    <Container>
      <Panel>
        <span className="title">Skills</span>
        {tags.map(item => (
          <HashtagItem tag={item} />
        ))}
      </Panel>
    </Container>
  )
}

export default SkillsPanel
