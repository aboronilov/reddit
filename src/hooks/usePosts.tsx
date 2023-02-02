import { postState } from "@/atoms/postsAtom";
import { useRecoilState } from "recoil";

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {}

  const onSelectPost = () => {}

  const onDeletePost = async () => {}

  return {
    postStateValue,
    setPostStateValue
  };
};

export default usePosts;
