import { Community } from "@/atoms/communitiesAtom";
import { firestore } from "@/firebase/clientApp";
import usePosts from "@/hooks/usePosts";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";

type PostProps = {
  communityData: Community;
};

const Posts = ({ communityData }: PostProps) => {
  const [loading, setLoading] = useState(false);
  const {postStateValue, setPostStateValue} = usePosts();

  const getPosts = async () => {
    setLoading(true);
    try {
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postsDoc = await getDocs(postsQuery);
      const posts = postsDoc.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      console.log(`posts: ${posts}`)
    } catch (error: any) {
      console.log(`getPosts: ${error.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  
  return <div>Posts</div>;
};

export default Posts;
