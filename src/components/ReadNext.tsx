import { lighten } from "polished";
import React from "react";

import styled from "@emotion/styled";

import { colors } from "../styles/colors";
import { inner, outer } from "../styles/shared";
import { PageContext } from "../templates/post";
import { PostCard } from "./PostCard";
import { ReadNextCard } from "./ReadNextCard";

interface ReadNextProps {
  tags: string[];
  relatedPosts: {
    totalCount: number;
    edges: Array<{
      node: {
        timeToRead: number;
        frontmatter: {
          date: string;
          title: string;
        };
        fields: {
          slug: string;
        };
      };
    }>;
  };
  pageContext: {
    prev: PageContext;
    next: PageContext;
  };
}

export const ReadNext: React.FC<ReadNextProps> = props => {
  const showRelatedPosts = props.relatedPosts.totalCount > 1;

  return (
    <ReadNextAside className="read-next" css={outer}>
      <div css={inner}>
        <ReadNextFeed className="read-next-feed">
          {showRelatedPosts && (
            <ReadNextCard tags={props.tags} relatedPosts={props.relatedPosts} />
          )}

          {props.pageContext.prev && <PostCard post={props.pageContext.prev} />}
          {props.pageContext.next && <PostCard post={props.pageContext.next} />}
        </ReadNextFeed>
      </div>
    </ReadNextAside>
  );
};

const ReadNextAside = styled.aside`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* background: color(var(--darkgrey) l(-5%)); */
  background: ${lighten("-0.05", colors.darkgrey)};

  .post-card {
    padding-bottom: 0;
    border-bottom: none;
  }
  .post-card:after {
    display: none;
  }
  .post-card-primary-tag {
    color: #fff;
    opacity: 0.6;
  }
  .post-card-title {
    color: #fff;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
  .post-card:hover .post-card-image {
    opacity: 1;
  }
  .post-card-excerpt {
    color: rgba(255, 255, 255, 0.6);
  }
  .static-avatar {
    border-color: #000;
  }
  .post-card-byline-content {
    color: rgba(255, 255, 255, 0.6);
  }
  .post-card-byline-content a {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 650px) {
    .post-card {
      flex: 1 1 auto;
      margin: 25px;
      padding: 25px 0 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const ReadNextFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -25px;
  padding: 60px 0 0 0;
`;
