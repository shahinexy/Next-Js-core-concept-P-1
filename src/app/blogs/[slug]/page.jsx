import React from 'react';

const DetailsPage = ({params}) => {
    const blog = blogs.find(blog => blog.slug === params.slug)
    return (
        <div>
            this is view details page
            <p>{blog.title}</p>
        </div>
    );
};

const blogs = [
    {
      slug: "exploring-ancient-ruins",
      title: "Exploring Ancient Ruins: A Journey Through Time",
      description:
        "Discover the mysteries of ancient civilizations as we explore the most fascinating ruins around the world.",
    },
    {
      slug: "modern-art-movements",
      title: "Modern Art Movements You Need to Know",
      description:
        "Dive into the world of modern art with an in-depth look at the movements that have shaped contemporary creativity.",
    },
    {
      slug: "vegan-recipes-for-beginners",
      title: "Easy and Delicious Vegan Recipes for Beginners",
      description:
        "Start your vegan journey with these simple and tasty recipes that are perfect for beginners.",
    },
    {
      slug: "tech-trends-2024",
      title: "Top Tech Trends to Watch in 2024",
      description:
        "Stay ahead of the curve with our comprehensive guide to the technology trends set to shape the future in 2024.",
    },
    {
      slug: "mindfulness-meditation-guide",
      title: "The Ultimate Guide to Mindfulness and Meditation",
      description:
        "Learn the benefits of mindfulness and meditation with practical tips and techniques to enhance your daily life.",
    },
    {
      slug: "solo-travel-tips",
      title: "Essential Tips for Solo Travelers",
      description:
        "Embark on your solo travel adventure with confidence using our expert tips and advice.",
    },
    {
      slug: "home-gardening-basics",
      title: "Home Gardening Basics: Grow Your Own Greens",
      description:
        "Get started with home gardening with our beginner-friendly guide to growing your own vegetables and herbs.",
    },
    {
      slug: "digital-marketing-strategies",
      title: "Effective Digital Marketing Strategies for Small Businesses",
      description:
        "Boost your small business's online presence with these proven digital marketing strategies.",
    },
    {
      slug: "space-exploration-milestones",
      title: "Key Milestones in Space Exploration",
      description:
        "Explore the major milestones in space exploration history and what's next for humanity's journey to the stars.",
    },
    {
      slug: "healthy-living-tips",
      title: "Top Tips for a Healthy and Balanced Life",
      description:
        "Achieve a healthier lifestyle with our top tips for balanced nutrition, exercise, and mental well-being.",
    },
  ];


export default DetailsPage;