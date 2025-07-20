import React from "react";

function About() {
  return (
    <div className="about-container p-10">
      <header className="about-header mb-8">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </header>
      <section className="about-content">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-base leading-relaxed">
            Welcome to Book Haven, your premier destination for a diverse range of books. Established in [2024], our bookstore is a labor of love founded by [Himanshu Chaudhary] with a passion for literature and a commitment to fostering a vibrant reading community. Our shelves are stocked with everything from timeless classics to the latest bestsellers, catering to every reading preference and age group.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base leading-relaxed">
            At Book Haven, our mission is to cultivate a love for reading by providing a welcoming environment where book enthusiasts can discover new stories, engage in literary discussions, and connect with like-minded individuals. We strive to offer exceptional customer service and create memorable experiences for every visitor who walks through our doors or visits our online store.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <p className="text-base leading-relaxed">
            Our team is composed of passionate readers and knowledgeable staff who are dedicated to helping you find your next great read. From book recommendations to hosting community events, we are here to ensure that your experience at Book Haven is nothing short of excellent. Feel free to reach out to us if you have any questions or need assistance!
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base leading-relaxed">
            Have questions or suggestions? We’d love to hear from you! You can contact us at <a href="himanshurchaudhary499@gmail.com" className="text-blue-600 hover:underline">himanshurchaudhary499@gmail.com</a> or visit us at our store located at [Madhubani station ,Bihar].
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
