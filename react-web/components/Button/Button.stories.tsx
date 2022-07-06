import { storiesOf } from '@storybook/react'
import { Button } from './Button.component'

const onClickSample = () => {
  console.log('Button clicked')
}

storiesOf('Components/Button', module)
  .add('default: ', () => <Button text={`default`} />)
  .add('outlined button: ', () => (
    <Button text={`outlined button`} isOutline={true} />
  ))
  .add('filled button (active): ', () => (
    <Button text={`filled active`} isActive onClick={onClickSample} />
  ))
  .add('filled button (inactive): ', () => (
    <Button text={`filled inactive`} isActive={false} onClick={onClickSample} />
  ))
