import { Community } from "@/atoms/communitiesAtom";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "@firebase/firestore";
import { GetServerSidePropsContext } from "next";
import safeJsonStringify from "safe-json-stringify";
import NotFound from "@/components/Community/NotFound";
import Header from "@/components/Community/Header";
import PageContent from "@/components/Layout/PageContent";
import CreatePostLink from "@/components/Community/CreatePostLink";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage = ({ communityData }: CommunityPageProps) => {
  // console.log(commnutyData.creatorId)
  if (!communityData) return <NotFound />;
  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
        </>
        <>
          <div>Right side</div>
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log(`SSR on Community page: ${error}`);
  }
}

export default CommunityPage;
