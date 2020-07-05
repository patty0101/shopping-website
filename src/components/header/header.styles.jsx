//  the css allows us to write a block of CSS that we can pass in and render as CSS inside of any our styled components
// npm install 'styled-components
// to avoid style leak across the application
// the styled keyword allows us to genetart components 
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
padding: 10px 15px;
cursor:pointer;
`

export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`
//  for Link, we can do styled and then call it like a function and pass 
// just like that we've now extended style components into components 
export const LogoContainer = styled(Link)`
    height: 100%;
      width: 70px;
      padding: 25px;
`
export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const OptionLink = styled(Link)`
${OptionContainerStyles}`

// if the only differece between these two styled components is what type of base element it needs to return.
// inside component itself if optionLink optionDiv are same and we just want optionLink as a div, we can change it by using thd as property and then
// pass in the string
// export const OptionDiv = styled.div`
// ${OptionContainerStyles}`
