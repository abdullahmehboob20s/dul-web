import Accordion from "components/Accordion";
import React from "react";

function FAQ() {
  return (
    <section>
      <div className="section-container">
        <p className="fs-24px text-wodden-purple mb-10 lg:mb-4vw font-helvetica">
          Frequently Asked Questions.
        </p>
        <div className="border-t-1px">
          <Accordion title="What property services does us offer? ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              et reprehenderit aspernatur necessitatibus id totam neque, sit
              vero harum reiciendis eligendi voluptas voluptatibus sapiente
              officiis perspiciatis deleniti optio quos ratione!
            </p>
          </Accordion>
          <Accordion title="What sets us apart from the rest? ">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              vel, mollitia, id alias hic corrupti modi fugit voluptate natus
              dolor praesentium nobis aliquid. Qui, perferendis aliquid
              obcaecati quisquam accusamus ratione.
            </p>
          </Accordion>
          <Accordion title="How can I buy a property with super?">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              vel, mollitia, id alias hic corrupti modi fugit voluptate natus
              dolor praesentium nobis aliquid. Qui, perferendis aliquid
              obcaecati quisquam accusamus ratione.
            </p>
          </Accordion>
          <Accordion title="Are properties a good investment?">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              vel, mollitia, id alias hic corrupti modi fugit voluptate natus
              dolor praesentium nobis aliquid. Qui, perferendis aliquid
              obcaecati quisquam accusamus ratione.
            </p>
          </Accordion>
          <Accordion title="What’s the benefit of buying property with super?">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              vel, mollitia, id alias hic corrupti modi fugit voluptate natus
              dolor praesentium nobis aliquid. Qui, perferendis aliquid
              obcaecati quisquam accusamus ratione.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
