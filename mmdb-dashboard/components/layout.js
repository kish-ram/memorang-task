import { Container } from 'react-bootstrap'

const layoutStyle = {
};

const contentStyle = {
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Container className="Content container" style={contentStyle}>
      {props.children}
    </Container>
  </div>
);

export default Layout;