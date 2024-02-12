import { Link } from '@remix-run/react';
import Box from '@mui/material/Box';

export default function Privacy() {
  const data = {
    title: 'Privacy Policy',
    lastUpdated: 'February 11, 2024',
    companyName: 'opentownmeeting.org',
    websiteUrl: (
      <a href="https://www.opentownmeeting.org">
        https://www.opentownmeeting.org
      </a>
    ),
    email: (
      <a href="mailto:privacy@opentownmeeting.org">
        privacy@opentownmeeting.org
      </a>
    ),
    cookieNoticeUrl: (
      <Link to="/cookie-policy">
        https://www.opentownmeeting.org/cookie-policy
      </Link>
    ),
  };

  return (
    <Box margin="0 auto" maxWidth="68ex">
      <h1>{data.title}</h1>
      <p>
        <strong>
          Last updated <span className="color8351f9">{data.lastUpdated}</span>
        </strong>
      </p>
      <p>
        This privacy notice for{' '}
        <span className="color8351f9">{data.companyName}</span> (“
        <strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>“),
        owned and operated by Elizabeth Schafer, describes how and why we might
        collect, store, use, and/or share (“<strong>process</strong>“) your
        information when you use our services (“<strong>Services</strong>“),
        such as when you:
      </p>
      <ul>
        <li>
          Visit our website at{' '}
          <span className="color8351f9">{data.websiteUrl}</span>, or any website
          of ours that links to this privacy notice
        </li>
        <li>
          Engage with us in other related ways ― including any sales, marketing,
          or events
        </li>
      </ul>
      <p>
        <strong>Questions or concerns?</strong> Reading this privacy notice will
        help you understand your privacy rights and choices. If you do not agree
        with our policies and practices, please do not use our Services. If you
        still have any questions or concerns, please contact us at{' '}
        <span className="color8351f9">{data.email}</span>.
      </p>
      <p>
        This privacy policy was created by Termly’s{' '}
        <a
          href="https://termly.io/products/privacy-policy-generator/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy Generator
        </a>
        .
      </p>
      <h2>SUMMARY OF KEY POINTS</h2>
      <p>
        <strong>
          <em>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by using our
            table of contents below to find the section you are looking for.
          </em>
        </strong>
      </p>
      <p>
        <strong>What personal information do we process?</strong> When you
        visit, use, or navigate our Services, we may process personal
        information depending on how you interact with{' '}
        <span className="color8351f9">{data.companyName}</span> and the
        Services, the choices you make, and the products and features you use.
      </p>
      <p>
        <strong>Do we process any sensitive personal information?</strong>{' '}
        <span className="color8351f9">
          We do not process sensitive personal information.
        </span>
      </p>
      <p>
        <strong>Do you receive any information from third parties?</strong> We
        may receive information from public databases, marketing partners,
        social media platforms, and other outside sources.
      </p>
      <p>
        <strong>How do you process my information?</strong> We process your
        information to provide, improve, and administer our Services,
        communicate with you, for security and fraud prevention, and to comply
        with law. We may also process your information for other purposes with
        your consent. We process your information only when we have a valid
        legal reason to do so.
      </p>
      <p>
        <strong>
          In what situations and with which types of parties do we share
          personal information?
        </strong>{' '}
        We may share information in specific situations and with specific
        categories of third parties.
      </p>
      <p>
        <strong>How do we keep your information safe?</strong> We have
        organizational and technical processes and procedures in place to
        protect your personal information. However, no electronic transmission
        over the internet or information storage technology can be guaranteed to
        be 100% secure, so we cannot promise or guarantee that hackers,
        cybercriminals, or other unauthorized third parties will not be able to
        defeat our security and improperly collect, access, steal, or modify
        your information.
      </p>
      <p>
        <strong>What are your rights?</strong> Depending on where you are
        located geographically, the applicable privacy law may mean you have
        certain rights regarding your personal information.
      </p>
      <p>
        <strong>How do I exercise my rights?</strong> The easiest way to
        exercise your rights is by contacting us. We will consider and act upon
        any request in accordance with applicable data protection laws.
      </p>
      <p>
        Want to learn more about what{' '}
        <span className="color8351f9">{data.companyName}</span> does with any
        information we collect? Review the notice in full below.
      </p>
      <h2>TABLE OF CONTENTS</h2>
      <p>
        1. WHAT INFORMATION DO WE COLLECT?
        <br />
        2. HOW DO WE PROCESS YOUR INFORMATION?
        <br />
        3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        <br />
        4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
        <br />
        5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        <br />
        6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        <br />
        7. HOW LONG DO WE KEEP YOUR INFORMATION?
        <br />
        8. HOW DO WE KEEP YOUR INFORMATION SAFE?
        <br />
        9. DO WE COLLECT INFORMATION FROM MINORS?
        <br />
        10. WHAT ARE YOUR PRIVACY RIGHTS?
        <br />
        11. CONTROLS FOR DO-NOT-TRACK FEATURES
        <br />
        12. DO WE MAKE UPDATES TO THIS NOTICE?
        <br />
        13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        <br />
        14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </p>
      <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
      <p>
        <strong>Personal information you disclose to us</strong>
      </p>
      <p>
        <em>
          <strong>In Short:</strong> We collect personal information that you
          provide to us.
        </em>
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when
        you <span className="color8351f9">register on the Services,</span>{' '}
        express an interest in obtaining information about us or our products
        and Services, when you participate in activities on the Services, or
        otherwise when you contact us.
      </p>
      <p>
        <strong>Personal Information Provided by You.</strong> The personal
        information that we collect depends on the context of your interactions
        with us and the Services, the choices you make, and the products and
        features you use. The personal information we collect may include the
        following:
      </p>
      <ul>
        <li>
          <span className="color8351f9">names</span>
        </li>
        <li>
          <span className="color8351f9">email addresses</span>
        </li>
        <li>
          <span className="color8351f9">mailing addresses</span>
        </li>
        <li>
          <span className="color8351f9">contact preferences</span>
        </li>
        <li>
          <span className="color8351f9">contact or authentication data</span>
        </li>
      </ul>
      <p>
        <strong>Sensitive Information.</strong>{' '}
        <span className="color8351f9">
          We do not process sensitive information.
        </span>
      </p>
      <p>
        <strong>Social Media Login Data.</strong> We may provide you with the
        option to register with us using your existing social media account
        details, like your Facebook, Twitter, or other social media account. If
        you choose to register in this way, we will collect the information
        described in the section called “
        <em>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</em>” below.
      </p>
      <p>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
      <p>
        <strong>Information automatically collected</strong>
      </p>
      <p>
        <em>
          <strong>In Short:</strong> Some information — such as your Internet
          Protocol (IP) address and/or browser and device characteristics — is
          collected automatically when you visit our Services.
        </em>
      </p>
      <p>
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </p>
      <p>
        Like many businesses, we also collect information through cookies and
        similar technologies. You can find out more about this in our Cookie
        Notice: {data.cookieNoticeUrl}.
      </p>
      <p>The information we collect includes:</p>
      <ul>
        <li>
          <em>Log and Usage Data.</em> Log and usage data is service-related,
          diagnostic, usage, and performance information our servers
          automatically collect when you access or use our Services and which we
          record in log files. Depending on how you interact with us, this log
          data may include your IP address, device information, browser type,
          and settings and information about your activity in the Services (such
          as the date/time stamps associated with your usage, pages and files
          viewed, searches, and other actions you take such as which features
          you use), device event information (such as system activity, error
          reports (sometimes called “crash dumps”), and hardware settings).
        </li>
        <li>
          <em>Device Data.</em> We collect device data such as information about
          your computer, phone, tablet, or other device you use to access the
          Services. Depending on the device used, this device data may include
          information such as your IP address (or proxy server), device and
          application identification numbers, location, browser type, hardware
          model, Internet service provider and/or mobile carrier, operating
          system, and system configuration information.
        </li>
        <li>
          <em>Location Data.</em> We collect location data such as information
          about your device’s location, which can be either precise or
          imprecise. How much information we collect depends on the type and
          settings of the device you use to access the Services. For example, we
          may use GPS and other technologies to collect geolocation data that
          tells us your current location (based on your IP address). You can opt
          out of allowing us to collect this information either by refusing
          access to the information or by disabling your Location setting on
          your device. However, if you choose to opt out, you may not be able to
          use certain aspects of the Services.
        </li>
      </ul>
      <p>
        <strong>Information collected from other sources</strong>
      </p>
      <p>
        <em>
          <strong>In Short:</strong> We may collect limited data from public
          databases, marketing partners, social media platforms, and other
          outside sources.
        </em>
      </p>
      <p>
        In order to enhance our ability to provide relevant marketing, offers,
        and services to you and update our records, we may obtain information
        about you from other sources, such as public databases, joint marketing
        partners, affiliate programs, data providers, social media platforms,
        and from other third parties. This information includes mailing
        addresses, job titles, email addresses, phone numbers, intent data (or
        user behavior data), Internet Protocol (IP) addresses, social media
        profiles, social media URLs, and custom profiles, for purposes of
        targeted advertising and event promotion. If you interact with us on a
        social media platform using your social media account (e.g., Facebook or
        Twitter), we receive personal information about you such as your name,
        email address, and gender. Any personal information that we collect from
        your social media account depends on your social media account’s privacy
        settings.
      </p>
      <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We process your information to provide,
          improve, and administer our Services, communicate with you, for
          security and fraud prevention, and to comply with law. We may also
          process your information for other purposes with your consent.
        </em>
      </p>
      <p>
        <strong>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </strong>
      </p>
      <ul>
        <li>
          <strong>
            To facilitate account creation and authentication and otherwise
            manage user accounts.
          </strong>{' '}
          We may process your information so you can create and log in to your
          account, as well as keep your account in working order.
        </li>
        <li>
          <strong>
            To deliver and facilitate delivery of services to the user.
          </strong>{' '}
          We may process your information to provide you with the requested
          service.
        </li>
        <li>
          <strong>To respond to user inquiries/offer support to users.</strong>{' '}
          We may process your information to respond to your inquiries and solve
          any potential issues you might have with the requested service.
        </li>
        <li>
          <strong>To send administrative information to you.</strong> We may
          process your information to send you details about our products and
          services, changes to our terms and policies, and other similar
          information.
        </li>
        <li>
          <strong>To fulfill and manage your orders.</strong> We may process
          your information to fulfill and manage your orders, payments, returns,
          and exchanges made through the Services.
        </li>
        <li>
          <strong>To enable user-to-user communications.</strong> We may process
          your information if you choose to use any of our offerings that allow
          for communication with another user.
        </li>
        <li>
          <strong>To request feedback.</strong> We may process your information
          when necessary to request feedback and to contact you about your use
          of our Services.
        </li>
        <li>
          <strong>To send you marketing and promotional communications.</strong>{' '}
          We may process the personal information you send to us for our
          marketing purposes, if this is in accordance with your marketing
          preferences. You can opt out of our marketing emails at any time. For
          more information, see “<em>WHAT ARE YOUR PRIVACY RIGHTS?</em>” below).
        </li>
        <li>
          <strong>To deliver targeted advertising to you.</strong> We may
          process your information to develop and display personalized content
          and advertising tailored to your interests, location, and more. For
          more information see our Cookie Policy:{' '}
          <span className="color8351f9">{data.cookieNoticeUrl}</span>.
        </li>
        <li>
          <strong>To protect our Services.</strong> We may process your
          information as part of our efforts to keep our Services safe and
          secure, including fraud monitoring and prevention.
        </li>
        <li>
          <strong>To identify usage trends.</strong> We may process information
          about how you use our Services to better understand how they are being
          used so we can improve them.
        </li>
        <li>
          <strong>
            To determine the effectiveness of our marketing and promotional
            campaigns.
          </strong>{' '}
          We may process your information to better understand how to provide
          marketing and promotional campaigns that are most relevant to you.
        </li>
        <li>
          <strong>To save or protect an individual’s vital interest.</strong> We
          may process your information when necessary to save or protect an
          individual’s vital interest, such as to prevent harm.
        </li>
      </ul>
      <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We may share information in specific
          situations described in this section and/or with the following
          categories of third parties.
        </em>
      </p>
      <p>
        <strong>
          Vendors, Consultants, and Other Third-Party Service Providers.
        </strong>{' '}
        We may share your data with third-party vendors, service providers,
        contractors, or agents (“<strong>third parties</strong>”) who perform
        services for us or on our behalf and require access to such information
        to do that work. We have contracts in place with our third parties,
        which are designed to help safeguard your personal information. This
        means that they cannot do anything with your personal information unless
        we have instructed them to do it. They will also not share your personal
        information with any organization apart from us. They also commit to
        protect the data they hold on our behalf and to retain it for the period
        we instruct. The categories of third parties we may share personal
        information with are as follows:
      </p>
      <ul>
        <li>Cloud Computing Services</li>
        <li>Communication &amp; Collaboration Tools</li>
        <li>Data Analytics Services</li>
        <li>Data Storage Service Providers</li>
        <li>Performance Monitoring Tools</li>
        <li>Product Engineering &amp; Design Tools</li>
        <li>Social Networks</li>
        <li>Testing Tools</li>
        <li>User Account Registration &amp; Authentication Services</li>
        <li>Website Hosting Service Providers</li>
      </ul>
      <p>
        We also may need to share your personal information in the following
        situations:
      </p>
      <ul>
        <li>
          <strong>Business Transfers.</strong> We may share or transfer your
          information in connection with, or during negotiations of, any merger,
          sale of company assets, financing, or acquisition of all or a portion
          of our business to another company.
        </li>
      </ul>
      <h2>4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We are not responsible for the safety of
          any information that you share with third parties that we may link to
          or who advertise on our Services, but are not affiliated with, our
          Services.
        </em>
      </p>
      <p>
        The Services may link to third-party websites, online services, or
        mobile applications and/or contain advertisements from third parties
        that are not affiliated with us and which may link to other websites,
        services, or applications. Accordingly, we do not make any guarantee
        regarding any such third parties, and we will not be liable for any loss
        or damage caused by the use of such third-party websites, services, or
        applications. The inclusion of a link towards a third-party website,
        service, or application does not imply an endorsement by us. We cannot
        guarantee the safety and privacy of data you provide to any third
        parties. Any data collected by third parties is not covered by this
        privacy notice. We are not responsible for the content or privacy and
        security practices and policies of any third parties, including other
        websites, services, or applications that may be linked to or from the
        Services. You should review the policies of such third parties and
        contact them directly to respond to your questions.
      </p>
      <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We may use cookies and other tracking
          technologies to collect and store your information.
        </em>
      </p>
      <p>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Policy:{' '}
        <span className="color8351f9">{data.cookieNoticeUrl}</span>.
      </p>
      <h2>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
      <p>
        <em>
          <strong>In Short:</strong> If you choose to register or log in to our
          services using a social media account, we may have access to certain
          information about you.
        </em>
      </p>
      <p>
        Our Services offer you the ability to register and log in using your
        third-party social media account details (like your Facebook or Twitter
        logins). Where you choose to do this, we will receive certain profile
        information about you from your social media provider. The profile
        information we receive may vary depending on the social media provider
        concerned, but will often include your name, email address, friends
        list, and profile picture, as well as other information you choose to
        make public on such a social media platform. If you log in using
        Facebook, we may also request access to other permissions related to
        your account, such as your friends, check-ins, and likes, and you may
        choose to grant or deny us access to each individual permission.
      </p>
      <p>
        We will use the information we receive only for the purposes that are
        described in this privacy notice or that are otherwise made clear to you
        on the relevant Services. Please note that we do not control, and are
        not responsible for, other uses of your personal information by your
        third-party social media provider. We recommend that you review their
        privacy notice to understand how they collect, use and share your
        personal information, and how you can set your privacy preferences on
        their sites and apps.
      </p>
      <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We keep your information for as long as
          necessary to fulfill the purposes outlined in this privacy notice
          unless otherwise required by law.
        </em>
      </p>
      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than{' '}
        <span className="color8351f9">
          the period of time in which users have an account with us
        </span>
        .
      </p>
      <p>
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </p>
      <h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We aim to protect your personal information
          through a system of organizational and technical security measures.
        </em>
      </p>
      <p>
        We have implemented appropriate and reasonable technical and
        organizational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cybercriminals,
        or other unauthorized third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </p>
      <h2>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
      <p>
        <em>
          <strong>In Short:</strong> We do not knowingly collect data from or
          market to children under 18 years of age.
        </em>
      </p>
      <p>
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent’s use of the Services. If we learn that personal
        information from users less than 18 years of age has been collected, we
        will deactivate the account and take reasonable measures to promptly
        delete such data from our records. If you become aware of any data we
        may have collected from children under age 18, please contact us at{' '}
        <span className="color8351f9">{data.email}</span>.
      </p>
      <h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
      <p>
        <em>
          <strong>In Short:</strong> In some regions, such as the European
          Economic Area (EEA), United Kingdom (UK), and Canada, you have rights
          that allow you greater access to and control over your personal
          information. You may review, change, or terminate your account at any
          time.
        </em>
      </p>
      <p>
        In some regions (like the EEA, UK, and Canada), you have certain rights
        under applicable data protection laws. These may include the right (i)
        to request access and obtain a copy of your personal information, (ii)
        to request rectification or erasure; (iii) to restrict the processing of
        your personal information; and (iv) if applicable, to data portability.
        In certain circumstances, you may also have the right to object to the
        processing of your personal information. You can make such a request by
        contacting us by using the contact details provided in the section “
        <em>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</em>” below.
      </p>
      <p>
        We will consider and act upon any request in accordance with applicable
        data protection laws.
      </p>
      <p>
        If you are located in the EEA or UK and you believe we are unlawfully
        processing your personal information, you also have the right to
        complain to your local data protection supervisory authority. You can
        find their contact details here:{' '}
        <a
          href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
          target="_blank"
          rel="noreferrer"
        >
          https://edpb.europa.eu/about-edpb/about-edpb/members_en
        </a>
        .
      </p>
      <p>
        If you are located in Switzerland, the contact details for the data
        protection authorities are available here:{' '}
        <a
          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
          target="_blank"
          rel="noreferrer"
        >
          https://www.edoeb.admin.ch/edoeb/en/home.html
        </a>
        .
      </p>
      <p>
        <strong>
          <u>Withdrawing your consent:</u>
        </strong>{' '}
        If we are relying on your consent to process your personal information,
        which may be express and/or implied consent depending on the applicable
        law, you have the right to withdraw your consent at any time. You can
        withdraw your consent at any time by contacting us by using the contact
        details provided in the section “
        <em>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</em>” below or updating
        your preferences.
      </p>
      <p>
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal, nor when applicable law allows, will
        it affect the processing of your personal information conducted in
        reliance on lawful processing grounds other than consent.
      </p>
      <p>
        <strong>Account Information</strong>
      </p>
      <p>
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </p>
      <ul>
        <li>Log in to your account settings and update your user account.</li>
        <li>Contact us using the contact information provided.</li>
      </ul>
      <p>
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our legal
        terms and/or comply with applicable legal requirements.
      </p>
      <p>
        <strong>
          <u>Cookies and similar technologies:</u>
        </strong>{' '}
        Most Web browsers are set to accept cookies by default. If you prefer,
        you can usually choose to set your browser to remove cookies and to
        reject cookies. If you choose to remove cookies or reject cookies, this
        could affect certain features or services of our Services. For further
        information, please see our Cookie Policy:{' '}
        <span className="color8351f9">{data.cookieNoticeUrl}</span>.
      </p>
      <p>
        If you have questions or comments about your privacy rights, you may
        email us at <span className="color8351f9">{data.email}</span>.
      </p>
      <h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
      <p>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (“DNT”) feature or setting you can
        activate to signal your privacy preference not to have data about your
        online browsing activities monitored and collected. At this stage no
        uniform technology standard for recognizing and implementing DNT signals
        has been finalized. As such, we do not currently respond to DNT browser
        signals or any other mechanism that automatically communicates your
        choice not to be tracked online. If a standard for online tracking is
        adopted that we must follow in the future, we will inform you about that
        practice in a revised version of this privacy notice.
      </p>
      <h2>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
      <p>
        <em>
          <strong>In Short:</strong> Yes, we will update this notice as
          necessary to stay compliant with relevant laws.
        </em>
      </p>
      <p>
        We may update this privacy notice from time to time. The updated version
        will be indicated by an updated “Revised” date and the updated version
        will be effective as soon as it is accessible. If we make material
        changes to this privacy notice, we may notify you either by prominently
        posting a notice of such changes or by directly sending you a
        notification. We encourage you to review this privacy notice frequently
        to be informed of how we are protecting your information.
      </p>
      <h2>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
      <p>
        If you have questions or comments about this notice, you may send an
        email to <span className="color8351f9">{data.email}</span>
      </p>
      <h2>
        14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </h2>
      <p>
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it in some circumstances. To request to
        review, update, or delete your personal information, please send an
        email to <span className="color8351f9">{data.email}</span>.
      </p>
    </Box>
  );
}
