import { Container } from "./styles"

export function SoundButton({ icon: Icon, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {Icon && <Icon/>}
    </Container>
  )
}