import React from 'react';


import {
  Container,
  Row,
  Column,
  Panel,
  Gallery,
  Section,
  Description
} from './styles';

import tshirtImage from '../../assets/tshirt.png';
import ProductAction from "../ProductAction";
import Sellerinfo from '../SellerInfo';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction/>
          <Sellerinfo/>

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
      </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
  <a href="#">Saiba mais sobre a garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi nisi, euismod quis mauris et, semper bibendum mauris. Nam quis lectus augue. Nulla scelerisque orci eu tincidunt suscipit. Ut ac neque sit amet metus luctus sagittis ut eu ipsum. Duis mattis augue dui, et placerat orci feugiat in.
      <br />
      <br />
      Items inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />

      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet venenatis quam. Duis nec condimentum lacus. Sed nec metus vel felis egestas convallis. Donec commodo tortor quis accumsan euismod. Nunc ornare orci non sem varius, at ultrices massa scelerisque. Sed eget orci vel elit egestas eleifend quis eget turpis. Ut feugiat dolor in egestas maximus. Vestibulum sollicitudin interdum egestas. Cras ornare suscipit molestie. Phasellus finibus interdum nibh a interdum. Nunc iaculis massa sed vestibulum vehicula. Nunc vulputate, lacus vitae hendrerit porta, nibh ex dictum mi, tempor hendrerit enim neque tempus lectus. Nullam porttitor felis non eros elementum commodo. Aliquam purus lacus, scelerisque ac ante mattis, malesuada fermentum ante.

    </p>
  </Description>
)

export default Product;
