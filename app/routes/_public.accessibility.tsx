import Box from '@mui/material/Box';

export default function Accessibility() {
  return (
    <Box margin="0 auto" maxWidth="68ex">
      <h2>Accessibility Statement</h2>
      <p>
        This is an accessibility statement from{' '}
        <span className="basic-information organization-name">
          opentownmeeting.org
        </span>
        .
      </p>
      <h3>Conformance status</h3>
      <p>
        The{' '}
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
          Web Content Accessibility Guidelines (WCAG)
        </a>{' '}
        defines requirements for designers and developers to improve
        accessibility for people with disabilities. It defines three levels of{' '}
        conformance: Level A, Level AA, and Level AAA.{' '}
        <span className="basic-information website-name">
          opentownmeeting.org
        </span>{' '}
        is
        <span
          className="basic-information conformance-status"
          data-printfilter="lowercase"
        >
          {' '}
          fully conformant
        </span>{' '}
        with{' '}
        <span className="basic-information conformance-standard">
          <span data-negate="">WCAG 2.1 level AA</span>.
        </span>{' '}
        <span>
          <span className="basic-information conformance-status">
            Fully conformant
          </span>{' '}
          means that{' '}
          <span className="basic-information conformance-meaning">
            the content fully conforms to the accessibility standard without any
            exceptions
          </span>
          .
        </span>
      </p>
      <h3>Feedback</h3>
      <p>
        We welcome your feedback on the accessibility of{' '}
        <span className="basic-information website-name">
          opentownmeeting.org
        </span>
        . Please let us know if you encounter accessibility barriers on{' '}
        <span className="basic-information website-name">
          opentownmeeting.org
        </span>
        :
      </p>
      <ul className="basic-information feedback h-card">
        <li>
          E-mail:{' '}
          <a
            className="email u-email"
            href="mailto:accessibility@opentownmeeting.org"
          >
            accessibility@opentownmeeting.org
          </a>
        </li>
      </ul>
      <h3>Technical specifications</h3>
      <p>
        Accessibility of{' '}
        <span className="basic-information website-name">
          opentownmeeting.org
        </span>{' '}
        relies on the following technologies to work with the particular
        combination of web browser and any assistive technologies or plugins
        installed on your computer:
      </p>
      <ul className="technical-information technologies-used">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p>
        These technologies are relied upon for conformance with the
        accessibility standards used.
      </p>
      <h3>Assessment approach</h3>
      <p>
        <span className="basic-information organization-name">
          opentownmeeting.org
        </span>{' '}
        assessed the accessibility of{' '}
        <span className="basic-information website-name">
          opentownmeeting.org
        </span>{' '}
        by the following approaches:
      </p>
      <ul className="technical-information assessment-approaches">
        <li>Self-evaluation</li>
      </ul>
      <hr />
      <h3>Date</h3>
      <p>
        This statement was created on{' '}
        <span className="basic-information statement-created-date">
          11 February 2024
        </span>{' '}
        using the{' '}
        <a href="https://www.w3.org/WAI/planning/statements/">
          W3C Accessibility Statement Generator Tool
        </a>
        .
      </p>
    </Box>
  );
}
