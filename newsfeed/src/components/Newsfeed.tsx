import * as React from "react";
import type {NewsfeedQuery as NewsfeedQueryType} from './__generated__/NewsfeedQuery.graphql';
import { useLazyLoadQuery } from "react-relay";
import { graphql } from 'relay-runtime';
import Story from "./Story";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id
      ...StoryFragment
    }
  }
`;
export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const stories = data.topStories;
  return (
    <div className="newsfeed">
     {stories.map(story => <Story key={story.id} story={story} />)}
    </div>
  );
}