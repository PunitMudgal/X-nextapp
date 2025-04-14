import React from "react";
// import prisma from "@/lib/prisma";

const Feed = async ({ userProfileId }: { userProfileId?: string }) => {
  // const { userId } = await auth();

  const userId = "user_2viYJybZm2GqAeeTLGrbGqphK20";
  // if (!userId) return null;

  // const whereCondition = userProfileId
  //   ? { parentPostId: null, userId: userProfileId } // parentPostId: null, means it will only fetch original post (not replies or comments)
  //   : {
  //       parentPostId: null,
  //       userId: {
  //         in: [
  //           userId,
  //           ...(
  //             await prisma.follow.findMany({
  //               where: { followerId: userId },
  //               select: { followingId: true },
  //             })
  //           ).map((follow) => follow.followingId),
  //         ],
  //       },
  //     };
  // console.log("wherecondition", whereCondition);

  // const postIncludeQuery = {
  //   user: { select: { displayName: true, username: true, img: true } },
  //   _count: { select: { likes: true, rePosts: true, comments: true } },
  //   likes: { where: { userId: userId }, select: { id: true } },
  //   rePosts: { where: { userId: userId }, select: { id: true } },
  //   saves: { where: { userId: userId }, select: { id: true } },
  // };

  // const posts = await prisma.post.findMany({
  //   where: whereCondition,
  //   include: {
  //     rePost: {
  //       include: postIncludeQuery,
  //     },
  //     ...postIncludeQuery,
  //   },
  //   take: 4,
  //   skip: 0,
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });
  // console.log("posts", posts);

  return (
    <div>
      {/* {posts.map((post) => (
        <div key={post.id}> <Post type={post} /></div>
      ))} */}
    </div>
  );
};

export default Feed;
