import { Container } from "./styles"

import { MdOutlinePlayArrow, MdOutlinePauseCircle } from "react-icons/md"

export function ButtonPlayPause({ isPlaying = false, ...rest }) {
  return(
    <Container type="button" {...rest}>
      {isPlaying ? <MdOutlinePlayArrow/> : <MdOutlinePauseCircle/>}
    </Container>
  )
}