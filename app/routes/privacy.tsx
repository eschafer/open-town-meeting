import { Link } from '@remix-run/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Privacy() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Privacy Policy</Typography>
      <Typography variant="caption">Last updated February 10, 2024</Typography>
      <Typography variant="body2">
        This privacy notice for <b>opentownmeeting.org</b> (&quot;<b>we</b>
        &quot;, &quot;<b>us</b>&quot;, or &quot;<b>our</b>&quot;), describes how
        and why we might collect, store, use, and/or share (&quot;<b>process</b>
        &quot;) your information when you use our services (&quot;
        <b>Services</b>
        &quot;), such as when you:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          Visit our website at{' '}
          <Link to="/">https://www.opentownmeeting.org</Link>, or any website of
          ours that links to this privacy notice
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          Engage with us in other related ways, including any sales, marketing,
          or events
        </Typography>
      </ul>
      <Typography variant="body2">
        <b>Questions or concerns?</b> Reading this privacy notice will help you
        understand your privacy rights and choices. If you do not agree with our
        policies and practices, please do not use our Services. If you still
        have any questions or concerns, please contact us at
        privacy@opentownmeeting.org.
      </Typography>
      <Typography variant="body2">
        This privacy policy was created by Termly&apos;s{' '}
        <a href="https://termly.io/products/privacy-policy-generator/">
          Privacy Policy Generator
        </a>
        .
      </Typography>
      <Typography variant="h2">SUMMARY OF KEY POINTS</Typography>
      <Typography variant="body2">
        <b>
          <i>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{' '}
            <a href="#toc">table of contents </a>
            below to find the section you are looking for.
          </i>
        </b>
      </Typography>
      <Typography variant="body2">
        <b>What personal information do we process?</b> When you visit, use, or
        navigate our Services, we may process personal information depending on
        how you interact with us and the Services, the choices you make, and the
        products and features you use. Learn more about{' '}
        <a href="#personalinfo">personal information you disclose to us </a>.
      </Typography>
      <Typography variant="body2">
        <b>Do we process any sensitive personal information?</b> We do not
        process sensitive personal information.
      </Typography>
      <Typography variant="body2">
        <b>Do we receive any information from third parties?</b> We may receive
        information from public databases, marketing partners, social media
        platforms, and other outside sources. Learn more about{' '}
        <a href="#othersources">information collected from other sources </a>.
      </Typography>
      <Typography variant="body2">
        <b>How do we process your information?</b> We process your information
        to provide, improve, and administer our Services, communicate with you,
        for security and fraud prevention, and to comply with law. We may also
        process your information for other purposes with your consent. We
        process your information only when we have a valid legal reason to do
        so. Learn more about{' '}
        <a href="#infouse">how we process your information </a>.
      </Typography>
      <Typography variant="body2">
        <b>
          In what situations and with which types of parties do we share
          personal information?
        </b>{' '}
        We may share information in specific situations and with specific
        categories of third parties. Learn more about{' '}
        <a href="#whoshare">
          when and with whom we share your personal information
        </a>
        .
      </Typography>
      <Typography variant="body2">
        <b>How do we keep your information safe?</b> We have organizational and
        technical processes and procedures in place to protect your personal
        information. However, no electronic transmission over the internet or
        information storage technology can be guaranteed to be 100% secure, so
        we cannot promise or guarantee that hackers, cybercriminals, or other
        unauthorized third parties will not be able to defeat our security and
        improperly collect, access, steal, or modify your information. Learn
        more about <a href="#infosafe">how we keep your information safe </a>.
      </Typography>
      <Typography variant="body2">
        <b>What are your rights?</b> Depending on where you are located
        geographically, the applicable privacy law may mean you have certain
        rights regarding your personal information. Learn more about{' '}
        <a href="#privacyrights">your privacy rights </a>.
      </Typography>
      <Typography variant="body2">
        <b>How do you exercise your rights?</b> The easiest way to exercise your
        rights is by visiting{' '}
        <Link to="data-request">
          https://www.opentownmeeting.org/data-request
        </Link>
        , or by contacting us. We will consider and act upon any request in
        accordance with applicable data protection laws.
      </Typography>
      <Typography variant="body2">
        Want to learn more about what we do with any information we collect?{' '}
        <a href="#toc">Review the privacy notice in full</a>.
      </Typography>
      <Typography variant="h2" id="toc">
        TABLE OF CONTENTS
      </Typography>
      <Typography variant="body2">
        <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#whoshare">
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </a>
      </Typography>
      <Typography variant="body2">
        <a href="#cookies">
          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </a>
      </Typography>
      <Typography variant="body2">
        <a href="#sociallogins">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#infosafe">7. HOW DO WE KEEP YOUR INFORMATION SAFE? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#infominors">8. DO WE COLLECT INFORMATION FROM MINORS? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES </a>
      </Typography>
      <Typography variant="body2">
        <a href="#policyupdates">11. DO WE MAKE UPDATES TO THIS NOTICE? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </a>
      </Typography>
      <Typography variant="body2">
        <a href="#request">
          13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </a>
      </Typography>
      <Typography variant="h2" id="infocollect">
        1. WHAT INFORMATION DO WE COLLECT?
      </Typography>
      <Typography variant="h3" id="personalinfo">
        Personal information you disclose to us
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We collect personal information that you provide to
          us.
        </i>
      </Typography>
      <Typography variant="body2">
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </Typography>
      <Typography variant="body2">
        <b>Personal Information Provided by You.</b> The personal information
        that we collect depends on the context of your interactions with us and
        the Services, the choices you make, and the products and features you
        use. The personal information we collect may include the following:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          names
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          email addresses
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          mailing addresses
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          contact preferences
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          contact or authentication data
        </Typography>
      </ul>
      <Typography variant="body2">
        <b>Sensitive Information.</b> We do not process sensitive information.
      </Typography>
      <Typography variant="body2">
        <b>Social Media Login Data.</b> We may provide you with the option to
        register with us using your existing social media account details, like
        your Facebook, Twitter, or other social media account. If you choose to
        register in this way, we will collect the information described in the
        section called &quot;
        <a href="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>&quot;
        below.
      </Typography>
      <Typography variant="body2">
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </Typography>
      <Typography variant="h3">Information automatically collected</Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> Some information &mdash; such as your Internet
          Protocol (IP) address and/or browser and device characteristics
          &mdash; is collected automatically when you visit our Services.
        </i>
      </Typography>
      <Typography variant="body2">
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </Typography>
      <Typography variant="body2">
        Like many businesses, we also collect information through cookies and
        similar technologies. You can find out more about this in our Cookie
        Notice:{' '}
        <Link to="cookie-policy">
          https://www.opentownmeeting.org/cookie-policy
        </Link>
        .
      </Typography>
      <Typography variant="body2">
        The information we collect includes:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          <i>Log and Usage Data.</i> Log and usage data is service-related,
          diagnostic, usage, and performance information our servers
          automatically collect when you access or use our Services and which we
          record in log files. Depending on how you interact with us, this log
          data may include your IP address, device information, browser type,
          and settings and information about your activity in the Services (such
          as the date/time stamps associated with your usage, pages and files
          viewed, searches, and other actions you take such as which features
          you use), device event information (such as system activity, error
          reports (sometimes called &quot;crash dumps&quot;), and hardware
          settings).
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          <i>Device Data.</i> We collect device data such as information about
          your computer, phone, tablet, or other device you use to access the
          Services. Depending on the device used, this device data may include
          information such as your IP address (or proxy server), device and
          application identification numbers, location, browser type, hardware
          model, Internet service provider and/or mobile carrier, operating
          system, and system configuration information.
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          <i>Location Data.</i> We collect location data such as information
          about your device&apos;s location, which can be either precise or
          imprecise. How much information we collect depends on the type and
          settings of the device you use to access the Services. For example, we
          may use GPS and other technologies to collect geolocation data that
          tells us your current location (based on your IP address). You can opt
          out of allowing us to collect this information either by refusing
          access to the information or by disabling your Location setting on
          your device. However, if you choose to opt out, you may not be able to
          use certain aspects of the Services.
        </Typography>
      </ul>
      <Typography variant="h3" id="othersources">
        Information collected from other sources
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We may collect limited data from public databases,
          marketing partners, social media platforms, and other outside sources.
        </i>
      </Typography>
      <Typography variant="body2">
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
        your social media account depends on your social media account&apos;s
        privacy settings.
      </Typography>
      <Typography variant="h2" id="infouse">
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent.
        </i>
      </Typography>
      <Typography variant="body2">
        <b>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </b>
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          <b>
            To facilitate account creation and authentication and otherwise
            manage user accounts.
          </b>{' '}
          We may process your information so you can create and log in to your
          account, as well as keep your account in working order.
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          <b>To deliver and facilitate delivery of services to the user.</b> We
          may process your information to provide you with the requested
          service.
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          <b>To protect our Services.</b> We may process your information as
          part of our efforts to keep our Services safe and secure, including
          fraud monitoring and prevention.
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          <b>
            To evaluate and improve our Services, products, marketing, and your
            experience.
          </b>{' '}
          We may process your information when we believe it is necessary to
          identify usage trends, determine the effectiveness of our promotional
          campaigns, and to evaluate and improve our Services, products,
          marketing, and your experience.
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          <b>To identify usage trends.</b> We may process information about how
          you use our Services to better understand how they are being used so
          we can improve them.
        </Typography>
      </ul>
      <Typography variant="h2" id="whoshare">
        3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We may share information in specific situations
          described in this section and/or with the following categories of
          third parties.
        </i>
      </Typography>
      <Typography variant="body2">
        <b>Vendors, Consultants, and Other Third-Party Service Providers.</b> We
        may share your data with third-party vendors, service providers,
        contractors, or agents (&quot;<b>third parties</b>&quot;) who perform
        services for us or on our behalf and require access to such information
        to do that work. We have contracts in place with our third parties,
        which are designed to help safeguard your personal information. This
        means that they cannot do anything with your personal information unless
        we have instructed them to do it. They will also not share your personal
        information with any organization apart from us. They also commit to
        protect the data they hold on our behalf and to retain it for the period
        we instruct. The categories of third parties we may share personal
        information with are as follows:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          Cloud Computing Services
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          Data Storage Service Providers
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          User Account Registration &amp; Authentication Services
        </Typography>
      </ul>
      <ul>
        <Typography component="li" variant="body2">
          Website Hosting Service Providers
        </Typography>
      </ul>
      <Typography variant="body2">
        We also may need to share your personal information in the following
        situations:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          <b>Business Transfers.</b> We may share or transfer your information
          in connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </Typography>
      </ul>
      <Typography variant="h2" id="cookies">
        4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We may use cookies and other tracking technologies to
          collect and store your information.
        </i>
      </Typography>
      <Typography variant="body2">
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Notice:{' '}
        <Link to="cookie-policy">
          https://www.opentownmeeting.org/cookie-policy
        </Link>
        .
      </Typography>
      <Typography variant="h2" id="sociallogins">
        5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> If you choose to register or log in to our Services
          using a social media account, we may have access to certain
          information about you.
        </i>
      </Typography>
      <Typography variant="body2">
        Our Services offer you the ability to register and log in using your
        third-party social media account details (like your Facebook or Twitter
        logins). Where you choose to do this, we will receive certain profile
        information about you from your social media provider. The profile
        information we receive may vary depending on the social media provider
        concerned, but will often include your name, email address, friends
        list, and profile picture, as well as other information you choose to
        make public on such a social media platform.
      </Typography>
      <Typography variant="body2">
        We will use the information we receive only for the purposes that are
        described in this privacy notice or that are otherwise made clear to you
        on the relevant Services. Please note that we do not control, and are
        not responsible for, other uses of your personal information by your
        third-party social media provider. We recommend that you review their
        privacy notice to understand how they collect, use, and share your
        personal information, and how you can set your privacy preferences on
        their sites and apps.
      </Typography>
      <Typography variant="h2" id="inforetain">
        6. HOW LONG DO WE KEEP YOUR INFORMATION?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We keep your information for as long as necessary to
          fulfill the purposes outlined in this privacy notice unless otherwise
          required by law.
        </i>
      </Typography>
      <Typography variant="body2">
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than the period
        of time in which users have an account with us.
      </Typography>
      <Typography variant="body2">
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </Typography>
      <Typography variant="h2" id="infosafe">
        7. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We aim to protect your personal information through a
          system of organizational and technical security measures.
        </i>
      </Typography>
      <Typography variant="body2">
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
      </Typography>
      <Typography variant="h2" id="infominors">
        8. DO WE COLLECT INFORMATION FROM MINORS?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We do not knowingly collect data from or market to
          children under 18 years of age.
        </i>
      </Typography>
      <Typography variant="body2">
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent&apos;s use of the Services. If we learn that
        personal information from users less than 18 years of age has been
        collected, we will deactivate the account and take reasonable measures
        to promptly delete such data from our records. If you become aware of
        any data we may have collected from children under age 18, please
        contact us at privacy@opentownmeeting.org.
      </Typography>
      <Typography variant="h2" id="privacyrights">
        9. WHAT ARE YOUR PRIVACY RIGHTS?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> You may review, change, or terminate your account at
          any time.
        </i>
      </Typography>
      <Typography variant="body2">
        <b>
          <u>Withdrawing your consent:</u>
        </b>{' '}
        If we are relying on your consent to process your personal information,
        which may be express and/or implied consent depending on the applicable
        law, you have the right to withdraw your consent at any time. You can
        withdraw your consent at any time by contacting us by using the contact
        details provided in the section &quot;
        <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
        &quot; below.
      </Typography>
      <Typography variant="body2">
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal nor, when applicable law allows, will
        it affect the processing of your personal information conducted in
        reliance on lawful processing grounds other than consent.
      </Typography>
      <Typography variant="h3">Account Information</Typography>
      <Typography variant="body2">
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          Log in to your account settings and update your user account.
        </Typography>
      </ul>
      <Typography variant="body2">
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our legal
        terms and/or comply with applicable legal requirements.
      </Typography>
      <Typography variant="body2">
        <b>
          <u>Cookies and similar technologies:</u>
        </b>{' '}
        Most Web browsers are set to accept cookies by default. If you prefer,
        you can usually choose to set your browser to remove cookies and to
        reject cookies. If you choose to remove cookies or reject cookies, this
        could affect certain features or services of our Services. For further
        information, please see our Cookie Notice:{' '}
        <Link to="cookie-policy">
          https://www.opentownmeeting.org/cookie-policy
        </Link>
        .
      </Typography>
      <Typography variant="body2">
        If you have questions or comments about your privacy rights, you may
        email us at privacy@opentownmeeting.org.
      </Typography>
      <Typography variant="h2" id="DNT">
        10. CONTROLS FOR DO-NOT-TRACK FEATURES
      </Typography>
      <Typography variant="body2">
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting
        you can activate to signal your privacy preference not to have data
        about your online browsing activities monitored and collected. At this
        stage no uniform technology standard for recognizing and implementing
        DNT signals has been finalized. As such, we do not currently respond to
        DNT browser signals or any other mechanism that automatically
        communicates your choice not to be tracked online. If a standard for
        online tracking is adopted that we must follow in the future, we will
        inform you about that practice in a revised version of this privacy
        notice.
      </Typography>
      <Typography variant="h2" id="policyupdates">
        11. DO WE MAKE UPDATES TO THIS NOTICE?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
        </i>
      </Typography>
      <Typography variant="body2">
        We may update this privacy notice from time to time. The updated version
        will be indicated by an updated &quot;Revised&quot; date and the updated
        version will be effective as soon as it is accessible. If we make
        material changes to this privacy notice, we may notify you either by
        prominently posting a notice of such changes or by directly sending you
        a notification. We encourage you to review this privacy notice
        frequently to be informed of how we are protecting your information.
      </Typography>
      <Typography variant="h2" id="contact">
        12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </Typography>
      <Typography variant="body2">
        If you have questions or comments about this notice, you may email us at
        privacy@opentownmeeting.org.
      </Typography>
      <Typography variant="h2" id="request">
        13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </Typography>
      <Typography variant="body2">
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it. To request to review, update, or delete
        your personal information, please visit:{' '}
        <Link to="data-request">
          https://www.opentownmeeting.org/data-request
        </Link>
        .
      </Typography>
    </Stack>
  );
}
