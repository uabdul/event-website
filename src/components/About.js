import sshrclogo from '../assets/sshrc-logo.jpg';
import fcslogo from '../assets/fcs-logo.png';
function About() {
  return (
    <div className="about-container">
      <div className="about">
        <p>
          In his now-canonical 1987 essay, “How to Have Promiscuity in
          an Epidemic,” Douglas Crimp set the stage for a rather frank
          and open discussion about what it meant to sustain a sex
          life, let alone sexuality, during a traumatic contagion.
          There he resolutely stated this: “Our promiscuity taught us
          many things, not only about the pleasures of sex, but about
          the great multiplicity of our pleasures. It is that psychic
          preparation, that experimentation, that conscious work on
          our own sexualities that has allowed many of us to change
          our sexual behaviors […] they insist that our promiscuity
          will destroy us when in fact it is our promiscuity that will
          save us.” As the COVID-19 pandemic unfolded, comparisons to
          the AIDS crisis became commonplace in popular media and
          mainstream news reportage about the current health crisis.
          In the early days of the lockdowns and quarantine measures
          in North America, queer-identified men who lived through the
          AIDS crisis began to share their reflections on the
          resonances and differences between the present pandemic and
          their past lived experiences. It was as though Crimp’s ghost
          was hovering over us, providing us with a much-needed
          haunting.
        </p>
        <p>
          Similarly, in his article, “
          <a
            href="https://www.thebody.com/article/casual-sex-covid-19"
            target="blank"
          >
            We Need a Plan for How to Have Casual Sex Again
          </a>
          ,” writer Mathew Rodriguez suggested, “[in] the absence of
          physical contact, many people have found creative ways to
          express their sexuality…people have used technology to have
          sex in an epidemic in a way that was not available to them,
          especially queer people, during the AIDS epidemic” (2020).
          In this series, we explore both Crimp’s and Rodriguez’s
          suggestions by providing a platform for critical reflection
          and urgent dialogue amongst academic, student, activist,
          artist, and service provider networks. We will examine the
          various themes of queer men’s framings and assessments of
          risk, policing, race, history, memory, art, and aesthetics
          as these pertain to the two health crises.
        </p>
        <p>
          This series brings together scholars from a range of
          disciplinary backgrounds and investments, including
          sociology, media studies, disability studies, queer theory,
          psychoanalysis, and Black studies, to explore how new modes
          of understanding sex and sexualities continue to evolve in
          light of the current pandemic. We will use the AIDS crisis
          as a historical referent – drawing ambivalent comparisons to
          and necessary distinctions from COVID-19 – to map out new
          terrains at the confluence of epidemiology, virology,
          critical sexology, geopolitics, and the various emergent
          technologies that make intimacy possible in the contemporary
          moment. 2021 marks forty years since the first reported
          cases of HIV and the history of sexuality came to be
          reconstituted as such. In a way, this series is a way to
          mark this temporal milestone and consider the future of sex
          by thinking this future alongside its past and present.
        </p>
      </div>
      <div className="acknowledgements">
        <h1>Acknowledgements</h1>
        <p>
          <i>Sex and the Pandemic</i> is supported in part by funding
          from a{' '}
          <a
            href="https://www.sshrc-crsh.gc.ca/home-accueil-eng.aspx"
            target="blank"
          >
            Social Sciences and Humanities Research Council
          </a>{' '}
          Connection Grant, and the Ryerson University{' '}
          <a href="https://www.ryerson.ca/fcs/" target="blank">
            Faculty of Community Services
          </a>
          , and the Ryerson University{' '}
          <a
            href="https://www.ryerson.ca/disability-studies/"
            target="blank"
          >
            School of Disability Studies
          </a>
          .
        </p>
        <div className="logos">
          <img src={sshrclogo} alt="" />
          <img src={fcslogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
