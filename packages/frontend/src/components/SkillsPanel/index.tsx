import React from 'react'
import HashtagItem from './SkillItem'
import Panel from '../Panel'
import { Container } from './styles'
import { competenceInterface } from '../Interface'

export interface Props {
  tags: competenceInterface[]
}

const SkillsPanel: React.FC<Props> = ({ tags }: Props) => (
  <Container>
    <Panel>
      <span className='title'>Skills</span>
      {tags.map((item, index) => (
        <HashtagItem key={index} tag={item.title} />
      ))}
    </Panel>
  </Container>
)

export default SkillsPanel
