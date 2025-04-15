import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create 5 users with unique details
  const users = [];
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: {
        id: `user${i}`,
        email: `user${i}@example.com`,
        username: `user${i}`,
        displayName: `User ${i}`,
        bio: `Hi I'm user${i}. Welcome to my profile!`,
        location: `USA`,
        job: `Developer`,
        website: `https://google.com`,
      },
    });
    users.push(user);
  }
  console.log(`${users.length} users created.`);

  // Create 5 posts for each user
  const posts = [];
  for (const user of users) {
    for (let j = 1; j <= 5; j++) {
      const post = await prisma.post.create({
        data: {
          desc: `Post ${j} by ${user.username}`,
          userId: user.id,
        },
      });
      posts.push(post);
    }
  }
  console.log("Posts created.");

  // Create some follows
  await prisma.follow.createMany({
    data: [
      { followerId: users[0].id, followingId: users[1].id },
      { followerId: users[0].id, followingId: users[2].id },
      { followerId: users[1].id, followingId: users[3].id },
      { followerId: users[2].id, followingId: users[4].id },
      { followerId: users[3].id, followingId: users[0].id },
    ],
  });
  console.log("Follows created.");

  // Create some likes
  await prisma.like.createMany({
    data: [
      { userId: users[0].id, postId: posts[0].id },
      { userId: users[1].id, postId: posts[1].id },
      { userId: users[2].id, postId: posts[2].id },
      { userId: users[3].id, postId: posts[3].id },
      { userId: users[4].id, postId: posts[4].id },
    ],
  });
  console.log("Likes created.");

  // Create comments (posts linked to parentPostId)
  const comments = [];
  for (let i = 0; i < posts.length; i++) {
    const comment = await prisma.post.create({
      data: {
        desc: `Comment on Post ${posts[i].id} by ${
          users[(i + 1) % 5].username
        }`,
        userId: users[(i + 1) % 5].id,
        parentPostId: posts[i].id,
      },
    });
    comments.push(comment);
  }
  console.log("Comments created.");

  // Create reposts
  const reposts = [];
  for (let i = 0; i < posts.length; i++) {
    const repost = await prisma.post.create({
      data: {
        desc: `Repost of Post ${posts[i].id} by ${users[(i + 2) % 5].username}`,
        userId: users[(i + 2) % 5].id,
        rePostId: posts[i].id,
      },
    });
    reposts.push(repost);
  }
  console.log("Reposts created.");

  // Create saved posts
  await prisma.savedPosts.createMany({
    data: [
      { userId: users[0].id, postId: posts[1].id },
      { userId: users[1].id, postId: posts[2].id },
      { userId: users[2].id, postId: posts[3].id },
      { userId: users[3].id, postId: posts[4].id },
      { userId: users[4].id, postId: posts[0].id },
    ],
  });
  console.log("Saved posts created.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
