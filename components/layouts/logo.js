import { Link, Image, Text } from '@nextui-org/react'
import { useColorModeValue } from '@chakra-ui/react'
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

const Logo = () => {
  return (
    <Link block color="secondary" href="#">
      <a>
        <LogoBox>
          <Image src={nicole} width={320} height={180} alt="nicole" />
          <Text></Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
