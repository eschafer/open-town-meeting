export default function CookiePolicy() {
  const data = {
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
  };

  return (
    <>
      <h1 style={{ marginTop: '0.2em!important' }}>Cookie Policy</h1>
      <p>
        <strong>Last updated</strong>
        <span className="color8351f9">
          <strong> {data.lastUpdated}</strong>
        </span>
      </p>
      <p>
        This Cookie Policy explains how{' '}
        <span className="color8351f9">{data.companyName} </span>
        <span style={{ color: '#0e101a' }}>(” “</span>
        <span style={{ color: '#0e101a' }}>
          <strong>we</strong>
        </span>
        <span style={{ color: '#0e101a' }}>,” “</span>
        <span style={{ color: '#0e101a' }}>
          <strong>us</strong>
        </span>
        <span style={{ color: '#0e101a' }}>,” or “</span>
        <span style={{ color: '#0e101a' }}>
          <strong>our</strong>
        </span>
        <span style={{ color: '#0e101a' }}>”)</span> uses cookies and similar
        technologies to recognize you when you visit our websites at{' '}
        <span className="color8351f9">{data.websiteUrl}</span> (“
        <strong>Websites</strong>“). It explains what these technologies are and
        why we use them, as well as your rights to control our use of them.
      </p>
      <p>
        In some cases we may use cookies to collect personal information, or
        that becomes personal information if we combine it with other
        information.
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          This cookie policy was created by Termly’s solution for{' '}
          <a href="https://termly.io/products/cookie-consent-manager/">
            cookie consent
          </a>
          .
        </span>
      </p>
      <h2>What are cookies?</h2>
      <p>
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website
        owners in order to make their websites work, or to work more
        efficiently, as well as to provide reporting information.
      </p>
      <p>
        Cookies set by the website owner (in this case,{' '}
        <span className="color8351f9">{data.companyName}</span>) are called
        “first-party cookies.” Cookies set by parties other than the website
        owner are called “third-party cookies.” Third-party cookies enable
        third-party features or functionality to be provided on or through the
        website (e.g., interactive content and analytics). The parties that set
        these third-party cookies can recognize your computer both when it
        visits the website in question and also when it visits certain other
        websites.
      </p>
      <h2>Why do we use cookies?</h2>
      <p>
        We use first- and third-party cookies for several reasons. Some cookies
        are required for technical reasons in order for our Websites to operate,
        and we refer to these as “essential” or “strictly necessary” cookies.
        Other cookies also enable us to track and target the interests of our
        users to enhance the experience on our Online Properties. Third parties
        serve cookies through our Websites for analytics and other purposes.
        This is described in more detail below.
      </p>
      <h2>How can I control cookies?</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You
        can exercise your cookie rights by setting your preferences in the
        Cookie Consent Manager. The Cookie Consent Manager allows you to select
        which categories of cookies you accept or reject. Essential cookies
        cannot be rejected as they are strictly necessary to provide you with
        services.
      </p>
      <p>
        The Cookie Consent Manager can be found in the notification banner and
        on our website. If you choose to reject cookies, you may still use our
        website though your access to some functionality and areas of our
        website may be restricted. You may also set or amend your web browser
        controls to accept or refuse cookies.
      </p>
      {/*<p>
        The specific types of first- and third-party cookies served through our
        Websites and the purposes they perform are described in the table below
        (please note that the specific cookies served may vary depending on the
        specific Online Properties you visit):
      </p>
      <p>
        <span style={{ textDecoration: 'underline' }}>
          <strong>Essential website cookies:</strong>
        </span>
      </p>
      <p>
        These cookies are strictly necessary to provide you with services
        available through our Webs
        <span style={{ color: '#0e101a' }}>
          ites and to use some of its features, such as access to secure areas.
        </span>
      </p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Name:</span>
              </td>
              <td>
                <span className="color8351f9">[Cookie Name]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Purpose:</span>
              </td>
              <td>
                <span className="color8351f9">[Purpose]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Provider:</span>
              </td>
              <td>
                <span className="color8351f9">[Domain]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Service:</span>
              </td>
              <td>
                <span className="color8351f9">
                  [Service] [Service’s Privacy Policy URL]
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Country:</span>
              </td>
              <td>
                <span className="color8351f9">[Country]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Type:</span>
              </td>
              <td>
                <span className="color8351f9">[Tracker Type]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Expires in:</span>
              </td>
              <td>
                <span className="color8351f9">[Expiry]</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span style={{ textDecoration: 'underline' }}>
          <strong>Performance and functionality cookies:</strong>
        </span>
      </p>
      <p>
        These cookies are used to enhance the performance and functionality of
        our Websites but are non-essential to their use. However, without these
        cookies, certain functionality (like videos) may become unavailable.
      </p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Name:</span>
              </td>
              <td>
                <span className="color8351f9">[Cookie Name]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Purpose:</span>
              </td>
              <td>
                <span className="color8351f9">[Purpose]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Provider:</span>
              </td>
              <td>
                <span className="color8351f9">[Domain]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Service:</span>
              </td>
              <td>
                <span className="color8351f9">
                  [Service] [Service’s Privacy Policy URL]
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Country:</span>
              </td>
              <td>
                <span className="color8351f9">[Country]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Type:</span>
              </td>
              <td>
                <span className="color8351f9">[Tracker Type]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Expires in:</span>
              </td>
              <td>
                <span className="color8351f9">[Expiry]</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span style={{ textDecoration: 'underline' }}>
          <strong>Analytics and customization cookies:</strong>
        </span>
      </p>
      <p>
        These cookies collect information that is used either in aggregate form
        to help us understand how our Websites are being used or how effective
        our marketing campaigns are, or to help us customize our Websites for
        you.
      </p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Name:</span>
              </td>
              <td>
                <span className="color8351f9">[Cookie Name]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Purpose:</span>
              </td>
              <td>
                <span className="color8351f9">[Purpose]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Provider:</span>
              </td>
              <td>
                <span className="color8351f9">[Domain]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Service:</span>
              </td>
              <td>
                <span className="color8351f9">
                  [Service] [Service’s Privacy Policy URL]
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Country:</span>
              </td>
              <td>
                <span className="color8351f9">[Country]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Type:</span>
              </td>
              <td>
                <span className="color8351f9">[Tracker Type]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Expires in:</span>
              </td>
              <td>
                <span className="color8351f9">[Expiry]</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span style={{ textDecoration: 'underline' }}>
          <strong>Unclassified cookies:</strong>
        </span>
      </p>
      <p>
        These are cookies that have not yet been categorized. We are in the
        process of classifying these cookies with the help of their providers.
      </p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Name:</span>
              </td>
              <td>
                <span className="color8351f9">[Cookie Name]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Purpose:</span>
              </td>
              <td>
                <span className="color8351f9">[Purpose]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Provider:</span>
              </td>
              <td>
                <span className="color8351f9">[Domain]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Service:</span>
              </td>
              <td>
                <span className="color8351f9">
                  [Service] [Service’s Privacy Policy URL]
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Country:</span>
              </td>
              <td>
                <span className="color8351f9">[Country]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Type:</span>
              </td>
              <td>
                <span className="color8351f9">[Tracker Type]</span>
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ color: '#0e101a' }}>Expires in:</span>
              </td>
              <td>
                <span className="color8351f9">[Expiry]</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>*/}
      <h2>How can I control cookies on my browser?</h2>
      <p>
        As the means by which you can refuse cookies through your web browser
        controls vary from browser to browser, you should visit your browser’s
        help menu for more information. The following is information about how
        to manage cookies on the most popular browsers:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
            target="_blank"
            rel="noreferrer"
          >
            Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            target="_blank"
            rel="noreferrer"
          >
            Internet Explorer
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&amp;redirectlocale=en-US"
            target="_blank"
            rel="noreferrer"
          >
            Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
            target="_blank"
            rel="noreferrer"
          >
            Edge
          </a>
        </li>
        <li>
          <a
            href="https://help.opera.com/en/latest/web-preferences/"
            target="_blank"
            rel="noreferrer"
          >
            Opera
          </a>
        </li>
      </ul>
      <h2>What about other tracking technologies, like web beacons?</h2>
      <p>
        Cookies are not the only way to recognize or track visitors to a
        website. We may use other, similar technologies from time to time, like
        web beacons (sometimes called “tracking pixels” or “clear gifs”). These
        are tiny graphics files that contain a unique identifier that enables us
        to recognize when someone has visited our Websites or opened an email
        including them. This allows us, for example, to monitor the traffic
        patterns of users from one page within a website to another, to deliver
        or communicate with cookies, to understand whether you have come to the
        website from an online advertisement displayed on a third-party website,
        to improve site performance, and to measure the success of email
        marketing campaigns. In many instances, these technologies are reliant
        on cookies to function properly, and so declining cookies will impair
        their functioning.
      </p>
      <h2>Do you use Flash cookies or Local Shared Objects?</h2>
      <p>
        Websites may also use so-called “Flash Cookies” (also known as Local
        Shared Objects or “LSOs”) to, among other things, collect and store
        information about your use of our services, fraud prevention, and for
        other site operations.
      </p>
      <p>
        If you do not want Flash Cookies stored on your computer, you can adjust
        the settings of your Flash player to block Flash Cookies storage using
        the tools contained in the{' '}
        <a
          href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
          target="_blank"
          rel="noreferrer"
        >
          Website Storage Settings Panel
        </a>
        . You can also control Flash Cookies by going to the{' '}
        <a
          href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
          target="_blank"
          rel="noreferrer"
        >
          Global Storage Settings Panel
        </a>{' '}
        and following the instructions (which may include instructions that
        explain, for example, how to delete existing Flash Cookies (referred to
        “information” on the Macromedia site), how to prevent Flash LSOs from
        being placed on your computer without your being asked, and (for Flash
        Player 8 and later) how to block Flash Cookies that are not being
        delivered by the operator of the page you are on at the time).
      </p>
      <p>
        Please note that setting the Flash Player to restrict or limit
        acceptance of Flash Cookies may reduce or impede the functionality of
        some Flash applications, including, potentially, Flash applications used
        in connection with our services or online content.
      </p>
      <h2>How often will you update this Cookie Policy?</h2>
      <p>
        We may update this Cookie Policy from time to time in order to reflect,
        for example, changes to the cookies we use or for other operational,
        legal, or regulatory reasons. Please therefore revisit this Cookie
        Policy regularly to stay informed about our use of cookies and related
        technologies.
      </p>
      <p>
        The date at the top of this Cookie Policy indicates when it was last
        updated.
      </p>
      <h2>Where can I get further information?</h2>
      <p>
        If you have any questions about our use of cookies or other
        technologies, please email us at{' '}
        <span className="color8351f9">{data.email}</span>.
      </p>
    </>
  );
}
