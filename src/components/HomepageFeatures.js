/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const TechniLogoHomepage = [

  {
    title: "",
    Svg: require("../../static/img/logo-techni.svg").default,
    description: (
      <>


      </>
    )
  },
 
];

const FeatureList = [
  {
    title: "Apprendre",
    Svg: require("../../static/img/brainstorm-svgrepo-com.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    )
  },
  {
    title: "Ensemble",
    Svg: require("../../static/img/brainstorm-think-svgrepo-com.svg").default,
    description: (
      <>
        Partager vos idées et vos ressources !
      </>
    )
  },
  {
    title: "Comme un pro !",
    Svg: require("../../static/img/flask-chemistry-svgrepo-com.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="{styles.features}">
       <div className="container-techni">
        <div className="center-techni">
          {TechniLogoHomepage.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
