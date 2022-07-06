import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbToolSelect from "../public/images/contents/tool-selection-sky.webp"
import thumbPandasScrap from '../public/images/contents/pandas-scrap.webp'
import thumbScrapyPython from '../public/images/contents/scrapy-data-collection.webp'
import thumbBeautifulSoup from '../public/images/contents/beautiful-soup-table-of-content.webp'
import thumbSeleniumScrap from '../public/images/contents/selenium-scrap-heavy-js-website.webp'
import thumbDropshippingReality from '../public/images/contents/dropshipping-ecommerce-reality.webp'
// import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
// import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Which tool is the best to make a complete dataset?"
            thumbnail={thumbToolSelect}
            href="https://medium.com/@jonathanmondaut/which-tool-is-the-best-to-make-a-complete-dataset-b3ce35df56d2"
          />
          <GridItem
            title="Scrap data with Pandas in Python"
            thumbnail={thumbPandasScrap}
            href="https://medium.com/@jonathanmondaut/scrap-data-with-pandas-in-python-8227acb45222"
          />
          <GridItem
            title="How to make awesome datasets fast with Scrapy in Python"
            thumbnail={thumbScrapyPython}
            href="https://medium.com/@jonathanmondaut/how-to-make-awesome-datasets-fast-with-scrapy-in-python-393bc860374e"
          />
          <GridItem
            title="Make use of Beautiful Soup 4 to build a HTML table of contents automatically"
            thumbnail={thumbBeautifulSoup}
            href="https://medium.com/@jonathanmondaut/make-use-of-beautiful-soup-4-to-build-a-html-table-of-contents-automatically-4f3694eddfca"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Use Python with Selenium to scrap Javascript heavy websites"
            thumbnail={thumbSeleniumScrap}
            href="https://medium.com/@jonathanmondaut/use-python-with-selenium-to-scrap-javascript-heavy-websites-c05082214230"
          />
          <GridItem
            title="The reality behind building a dropshipping e-commerce"
            thumbnail={thumbDropshippingReality}
            href="https://medium.com/@jonathanmondaut/the-reality-behind-building-a-dropshipping-e-commerce-c625d64d868c"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
