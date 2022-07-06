import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Icon,
  List,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Portal,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoTwitter, IoMail } from 'react-icons/io5'
import { GiBoxingGlove, GiEvilBook, GiGamepadCross } from "react-icons/gi";
import thumbYouTube from '../public/images/links/rankwell_jonathan_mondaut_lead_developer.webp'
import thumbMedium from '../public/images/links/medium-logo.webp'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Welcome to discover my own world!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            Jonathan Mondaut
          </Heading>
          <p>Passionated Lead Developer - Medium Writer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile_jonathan.webp"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h2" variant="section-title">
          Work
        </Heading>
        <SimpleGrid minChildWidth='230px' spacing='10px'>
          <GridItem
            height="150px"
            href="https://www.youtube.com/watch?v=LidL7m-s0Sg"
            title="Lead Developer (French video)"
            thumbnail={thumbYouTube}
          >
          </GridItem>
          <GridItem
            height="150px"
            href="https://medium.com/@jonathanmondaut"
            title="Medium Profile"
            thumbnail={thumbMedium}
          >
          </GridItem>
        </SimpleGrid>
        <Paragraph>
          I am currently a CTO in a Digital Marketing Agency specialized in International Search Engine Optimization.
          Thanks to my daily work, I am well versed in Search Engine Marketing. In consequence, I design and make tools 
          to enable our team to collaborate efficiently and help them achieve complex tasks at light speed!
        </Paragraph>
        <Paragraph>
          What I enjoy in this kind of work? First of all, learning new things by observing other peoples to understand
          their daily problematics. Next, I really love leading a team to work toward a goal. Last, I love to innovate
          trying to create tool which are completely in the field. Shoud I say more? Better look at my LinkedIn profile!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://www.linkedin.com/in/jmondaut/" target="_blank" passHref scroll={false}>
            <Button colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
              LinkedIn Profile
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h2" variant="section-title">
          What do I like?
        </Heading>
        <SimpleGrid columns={{sm: 2, md: 3}} gap={6}>
            <Popover>
            <PopoverTrigger>
              <Button size="lg"><Icon as={GiBoxingGlove} w={26} h={26} /></Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Boxing</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  I spar at least once a week and train twice at{" "}<Link href="https://www.temple-nobleart.com/" rel="nofollow" target="_blank">Temple Noble Art</Link>.
                </PopoverBody>
                <PopoverFooter><Image src="/images/temple-noble-art-porte-maillot.webp" alt="Club de boxe Temple Noble Art Porte Maillot" width="290px" height="160px" /></PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button size="lg"><Icon as={GiEvilBook} w={26} h={26} /></Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Manga</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  I just can&apos;t miss the next Dragon Ball scan each month!
                </PopoverBody>
                <PopoverFooter><Image src="/images/dragon-ball-super-bardock.webp" alt="Dragon Ball Super Bardock" width="290px" height="160px" /></PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button size="lg"><Icon as={GiGamepadCross} w={26} h={26} /></Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Video Games</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                Not much time to play right now, but enjoying {" "}<Link href="https://www.nintendo.fr/Jeux/Nintendo-Switch/Xenoblade-Chronicles-Definitive-Edition-1633054.html" rel="nofollow" target="_blank">Xenoblade Chronicles</Link>.
                </PopoverBody>
                <PopoverFooter><Image src="/images/Xenoblade-Chronicles-Definitive-Edition-Monado.webp" alt="Xenoblade Chronicles Definitive Edition Monado Shulk" width="290px" height="160px" /></PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h2" variant="section-title">
          My content and commucation channels
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:mondautjonathan@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />} 
              >
                mondautjonathan@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/JonathanMONDAUT" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @JonathanMONDAUT
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
