import React from 'react'
import { useRouter } from 'next/router'
import {
  TrainingIcon,
  FailIcon,
  EvaluationIcon,
  SuccessIcon,
  ExamIcon,
  SaveIcon,
  EditIcon
} from './styles'

export interface Props {
  url?: string
  type: string
}

const Button: React.FC<Props> = ({ url, type }) => {
  const router = useRouter()

  const buttonType = (buttonType: string) => {
    switch (buttonType) {
      case 'training':
        return (
          <>
            <TrainingIcon />
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
          </>
        )
      case 'fail':
        return (
          <>
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
            <FailIcon />
          </>
        )
      case 'evaluation':
        return (
          <>
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
            <EvaluationIcon />
          </>
        )
      case 'success':
        return (
          <>
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
            <SuccessIcon />
          </>
        )
      case 'exam':
        return (
          <>
            <ExamIcon />
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
          </>
        )
      case 'save':
        return (
          <>
            <SaveIcon />
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
          </>
        )
      case 'edit':
        return (
          <>
            <EditIcon />
            <span>{type.charAt(0).toUpperCase() + type.substr(1)}</span>
          </>
        )
      default:
        return <></>
    }
  }

  return (
    <button
      onClick={() => {
        if (url) router.push(url)
      }}
    >
      {buttonType(type)}
    </button>
  )
}

export default Button
