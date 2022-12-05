import React from 'react'
import { Button } from 'semantic-ui-react'

const MyButton = (props) => {
  return (
    <Button {...props}>{props.children}</Button>
  )
}

export default MyButton