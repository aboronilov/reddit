import PageContent from "@/components/Layout/PageContent";
import type { NextPage } from "next";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/clientApp";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "@firebase/firestore";
import usePosts from "@/hooks/usePosts";
import { Post } from "@/atoms/postsAtom";
import PostLoader from "@/components/Posts/PostLoader";
import { Stack } from "@chakra-ui/react";
import PostItem from "@/components/Posts/PostItem";
import CreatePostLink from "@/components/Community/CreatePostLink";

const Home: NextPage = () => {
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    setPostStateValue,
    postStateValue,
    onSelectPost,
    onDeletePost,
    onVote,
  } = usePosts();

  const buildUserHomeFeed = () => {};
  const buildNoUserHomeFeed = async () => {
    setLoading(true);
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("voteStatus", "desc"),
        limit(10)
      );

      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log(`buildNoUserHomeFeed error: ${error.message}`);
    }
    setLoading(false);
  };
  const getUserPostVotes = () => {};

  useEffect(() => {
    if (!user && !loadingUser) buildNoUserHomeFeed();
  }, [user, loadingUser]);
  return (
    <PageContent>
      <>
        <CreatePostLink />
        {loading ? (
          <PostLoader />
        ) : (
          <Stack>
            {postStateValue.posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                onSelectPost={onSelectPost}
                onDeletePost={onDeletePost}
                onVote={onVote}
                userVoteValue={postStateValue.postVotes.find(item => item.postId === post.id)?.voteValue}
                userIsCreator={user?.uid === post.creatorId}
                homePage
              />
            ))}
          </Stack>
        )}
      </>
      <>{/* Recommendations */}</>
    </PageContent>
  );
};

export default Home;
