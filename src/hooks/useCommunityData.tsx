import { Community, CommunitySnippet, communityState } from "@/atoms/communitiesAtom";
import { auth, firestore } from "@/firebase/clientApp";
import { collection, doc, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const getMySnippets = async () => {
    setLoading(true)
    try {
      const snippetDocs = await getDocs(collection(firestore, `users/${user?.uid}/communitySnippets`))
      const snippets = snippetDocs.docs.map((item) => ({...item.data()}))
      // console.log(`snippets: ${snippets}`)
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnipppets: snippets as CommunitySnippet[]
      }))
    } catch (error) {
      console.log(`getMySnippets: ${error}`);
      // setError(error)
    }
    setLoading(false)
  };

  const joinCommunity = (communityData: Community) => {};

  const leaveCommunity = (communityId: string) => {};

  useEffect(() => {
    if (!user) return;
    getMySnippets()
  }, [user])

  return {
    // data and functions
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading
  };
};

export default useCommunityData;
