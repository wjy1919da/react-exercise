import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import StorySummary from "./StorySummary";
import Image from "./Image";
import Timestamp from './Timestamp';
import { graphql } from 'relay-runtime';
import { useFragment } from 'react-relay';
import PosterByline, { type Props as PosterBylineProps } from "./PosterByline";
import type {StoryFragment$key} from './__generated__/StoryFragment.graphql';
type Props = {
  story: StoryFragment$key;
};


const StoryFragment = graphql`
  fragment StoryFragment on Story {
    title
    summary
    createdAt
    poster {
      ...PosterBylineFragment
    }
    thumbnail {
      ...ImageFragment @arguments(width: 400)
    }
  }
`;

export default function Story({story}: Props) {
  // const storyRef = 
  // console.log("story:  ",story);
  const data = useFragment(
    StoryFragment,
    story,
  );
  // console.log("data in story: ",data);
  return (
    <Card>
      <Heading>{data.title}</Heading>
      <PosterByline poster={data.poster} />
      <Timestamp time={data.createdAt} />
      <Image image={data.thumbnail} width={400} height={400} />
      <StorySummary summary={data.summary} />
    </Card>
  );
}
