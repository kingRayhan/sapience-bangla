module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        siteName: "সেপিয়েন্স - মানুষের ইতিহাস",
        description: "A brief history of humankind",
        siteMetadata: {
          title: "সেপিয়েন্স - মানুষের ইতিহাস",
          description: "A brief history of humankind",
        },
        sidebarCategories: {
          null: ["index", "translator-declaration"],
          "বুদ্ধিভিত্তিক বিপ্লব": ["chapter1/নিতান্ত-সাধারণ-একটি-প্রাণীর-গল্প"],
        },
      },
    },
  ],
};
