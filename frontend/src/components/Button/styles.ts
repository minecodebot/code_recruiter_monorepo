import styled, { css } from 'styled-components'
import {
  FcPositiveDynamic,
  FcOk,
  FcHighPriority,
  FcSynchronize,
  FcSignature,
  FcSimCard,
  FcSupport
} from 'react-icons/fc'

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
  margin-left: 4px;
`

export const TrainingIcon = styled(FcPositiveDynamic)`
  ${iconCSS}
`

export const SuccessIcon = styled(FcOk)`
  ${iconCSS}
`

export const FailIcon = styled(FcHighPriority)`
  ${iconCSS}
`

export const EvaluationIcon = styled(FcSynchronize)`
  ${iconCSS}
`
export const ExamIcon = styled(FcSignature)`
  ${iconCSS}
`

export const SaveIcon = styled(FcSimCard)`
  ${iconCSS}
`

export const EditIcon = styled(FcSupport)`
  ${iconCSS}
`
