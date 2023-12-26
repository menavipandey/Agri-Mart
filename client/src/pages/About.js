import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3> WE ARE AGRIMART</h3>
          <p className="text-justify mt-2">
         
AgriMart represents a visionary endeavor led by a group of third-year engineering undergraduates. Its primary mission is to revolutionize the agricultural sector by harnessing the power of cutting-edge technology. This initiative is driven by a steadfast commitment to narrowing the divide between farmers and consumers, making it more than just a marketplace – it's a transformative bridge connecting the agricultural ecosystem with modern technological tools.

This website caters to the needs of consumers as well as the farmers where they can see latest news and articles on farming,shop for farm equipments and fertilizers and also set a price for the items they sell.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
