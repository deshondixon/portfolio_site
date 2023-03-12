import { Link, Image, Text } from '@nextui-org/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

export default function Logo() {
  return (
    <Link block color="secondary" href="#">
      <LogoBox>
        <Text></Text>
      </LogoBox>
    </Link>
  )
}
