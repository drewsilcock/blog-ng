import React from "react";
import { Helmet } from "react-helmet";

import { css } from "@emotion/core";

import { Footer } from "../components/Footer";
import SiteNav from "../components/header/SiteNav";
import { PostFullContent } from "../components/PostContent";
import { Wrapper } from "../components/Wrapper";
import IndexLayout from "../layouts";
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from "../styles/shared";
import {
  NoImage,
  PostFull,
  PostFullHeader,
  PostFullTitle,
} from "../templates/post";
import { colors } from "../styles/colors";

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const Tags: React.FC = () => (
  <IndexLayout>
    <Helmet defer={false}>
      <title>Tags</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header
        className="site-archive-header no-image"
        css={[SiteHeader, SiteArchiveHeader]}
      >
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Tags</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Tags;
