import Section from "components/Shared/Section";
import theme from "theme";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Section>
      <h1
        style={{ fontFamily: theme.fonts.heading, color: theme.colors.primary }}
      >
        Welcome to the Tweet App!
      </h1>
      <p style={{ color: theme.colors.text }}>
        This is the home page of our app. Here are some things you can do:
      </p>
      <ul>
          <li style={{ color: theme.colors.text }}>View the <Link to="/tweets" style={{ color: theme.colors.primary }}>list of tweets</Link></li>
          <li style={{ color: theme.colors.text }}>Search for tweets by keyword or user</li>
          <li style={{ color: theme.colors.text }}>Create a new tweet</li>
          <li style={{ color: theme.colors.text }}>View your profile</li>
        </ul>
    </Section>
  );
};

export default Home;
