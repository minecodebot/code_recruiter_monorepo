import React from 'react'
import Panel from '../Panel'
import { Column, Container, Row } from '../../styles/GlobalStyles'
import Button from '../Button'
import { trainingInterface } from '../Interface'

export interface Props {
  title: string
  trainings: trainingInterface[]
}

const TrainingPanel: React.FC<Props> = ({ title, trainings }: Props) => (
  <Container>
    <Panel>
      <span className='title'>{title} Trainings</span>
      <ul>
        {trainings ? (
          trainings.map((item, index) => (
            <li key={index}>
              <Row className='actions'>
                <Column>
                  <h3>{item.title}</h3>
                  {title === 'Completed' ? (
                    <></>
                  ) : (
                    <span className='subtext'>{item.level}</span>
                  )}
                </Column>
                <Column>
                  {title === 'Completed' ? (
                    <span className='subtext'>{item.level}</span>
                  ) : (
                    <Button type='training' url={`/training/code/${item.id}`} />
                  )}
                </Column>
              </Row>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </Panel>
  </Container>
)

export default TrainingPanel
