// Components
import Button from 'ui/components/buttons/Button';
import Container from 'ui/components/common/Container';
import Layout from 'ui/layouts/Layout';

const pageInfo = {
  description: 'The page you are looking for cannot be found.',
  stackexchange: [],
  title: 'Page not found',
  twitter: [],
  youtube: [],
  sitecoreCommunity: {},
  fileName: '',
  promoBefore: [],
  promoAfter: [],
};

const NotFoundPage = (): JSX.Element => (
  <Layout title={pageInfo.title} description={pageInfo.description}>
    <Container>
      <Button variant="text" icon={true} href="/" text="Return home" />
    </Container>
  </Layout>
);

export default NotFoundPage;
