import React from "react";
import styles from "./home.module.css";
import Header from "../common/header/index";
import Separator from "../common/separator/index";
import CompanyCard from "./company-card/index";
import { connect } from "react-redux";
function Home(props) {
  const { list, saved } = props;
  console.log(saved);
  return (
    <div className={styles.home}>
      <Header />
      <Separator />
      <div className={styles.intro}>
        <p>
          This is a handpicked list of Indian startups that use ReactJS as their
          frontend framework. This will help you in job hunting, startup
          research etc.
        </p>
        <div className={styles.introRight}>
          Find this useful?
          <a
            href="https://github.com/shuvamk/react-hire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.githubStar}>
              <i className="devicon-github-original colored"></i> Star
            </div>
          </a>
        </div>
      </div>
      {list.map((company) => {
        return <CompanyCard company={company} key={company.id} />;
      })}
    </div>
  );
}
const mapStateToProps = ({ react }) => {
  return {
    list: react.companyList,
    saved: react.saved,
  };
};
export default connect(mapStateToProps)(Home);
