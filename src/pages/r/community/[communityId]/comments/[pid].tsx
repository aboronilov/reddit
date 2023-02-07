import { Post } from "@/atoms/postsAtom";
import PageContent from "@/components/Layout/PageContent";
import PostItem from "@/components/Posts/PostItem";
import { auth, firestore } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import { doc, getDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const PostPage = () => {
  const { postStateValue, setPostStateValue, onVote, onDeletePost } =
    usePosts();
  const [user] = useAuthState(auth);
  const router = useRouter();

  const fetchPost = async (postId: string) => {
    try {
        const postDocRef = doc(firestore, "posts", postId)
        const postDoc = await getDoc(postDocRef)
        setPostStateValue((prev) => ({
            ...prev,
            selectedPost: {id: postDoc.id, ...postDoc.data()} as Post
        }))        
    } catch (error: any) {
        console.log(`fetchPost error: ${error.message}`)
    }
  };

  useEffect(() => {
    const { pid } = router.query;

    if (pid && !postStateValue.selectedPost) {
      fetchPost(pid as string);
    }
  }, [router.query, postStateValue.selectedPost]);

  return (
    <PageContent>
      <>
        {postStateValue.selectedPost && (
          <PostItem
            post={postStateValue.selectedPost}
            onVote={onVote}
            onDeletePost={onDeletePost}
            userVoteValue={
              postStateValue.postVotes.find(
                (item) => item.postId === postStateValue.selectedPost?.id
              )?.voteValue
            }
            userIsCreator={postStateValue.selectedPost?.creatorId === user?.uid}
          />
        )}
        {/* Selected post */}
        {/* Comments */}
      </>
      <>{/* About */}</>
    </PageContent>
  );
};

export default PostPage;
