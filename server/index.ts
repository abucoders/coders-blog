export const Service = {
  getPosts: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600, tags: ["/server"] },
      cache: "force-cache",
    });

    if (response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  },
};
