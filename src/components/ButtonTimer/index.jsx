import { Container } from "./styles"

export function ButtonTimer({ icon: Icon, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {Icon && <Icon/>}
    </Container>
  )
}