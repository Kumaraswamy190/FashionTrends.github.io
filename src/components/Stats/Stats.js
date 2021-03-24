/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import StatsBg from "../../img/anastasiya-gepp.jpg";
import StatsCard from "./StatsCard";

const Stats = () => (
  <section css={styles} className="stats">
    <Container>
      <StatsCard statsNum="10,000" statsText="HAPPY CUSTOMERS" />
      <StatsCard statsNum="243" statsText="BRANCHES" />
      <StatsCard statsNum="8910" statsText="SPONSORS" />
      <StatsCard statsNum="405" statsText="AWARDS" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 108vh;
  background: url('${StatsBg}') no-repeat center/cover;
  display: flex;
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
  }
  @media(max-width: 740px) {
    .container{
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;

export default Stats;
