import * as React from "react";
import Image from "./Image";
import { graphql } from 'relay-runtime';
import { useFragment } from 'react-relay';
import type {PosterBylineFragment$key} from './__generated__/PosterBylineFragment.graphql';
import Hovercard from './Hovercard';
import PosterDetailsHovercardContents from './PosterDetailsHovercardContents';
import { useRef } from 'react';
export type Props = {
  poster: PosterBylineFragment$key;
};
const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
      name
      profilePicture {
        ...ImageFragment @arguments(width: 60, height: 60)
      }
  }
`;



export default function PosterByline({ poster }: Props): React.ReactElement {
  // console.log("poster: ",poster);
  if (poster == null) {
    return null;
  }
  const data = useFragment(
    PosterBylineFragment,
    poster,
  );
  const hoverRef = useRef(null);
  // console.log("data in postByline: ",data);

  return (
    <div className="byline"  >
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
       
      />
     <div className="byline__name" ref={hoverRef}>{data.name}</div>
     <Hovercard targetRef={hoverRef}>
        <PosterDetailsHovercardContents />
      </Hovercard>
    </div>
  );
}
