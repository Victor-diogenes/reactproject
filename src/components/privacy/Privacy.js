import React from 'react'
import './privacy.css'
import { Nav } from 'react-bootstrap'
const Privacy = () => {
  return (

      <>
          
          <div className='privacy-content'>
              <h1 className='head1'>Privacy Statement</h1>
          <p>Victor Momanyi Diogenes, the founder and CEO of Codingclasses LLC, owns and operates this website, <a href='/'  className='link1'>www.victormomanyidiogenes.com</a>. Our commitment at <a href='/'  className='link1'>Victormomanyidiogenes.com</a> is to protect your privacy as you browse our website. This privacy statement describes what information we collect from you and what information you share with us when you visit our website. Keep in mind that this privacy policy is subject to change, so please review it from time to time. Before sharing any information with us, you must agree to have read our privacy policy as a user of <a href='/'  className='link1'>www.victormomanyidiogenes.com</a>. This Privacy Policy is part of and subject to the Terms of Service.</p>
              <h1 className='head2'>Information we collet</h1>
              <p>As a visitor, you are free to browse the website without creating an account because our website does not support user account creation.When you visit, we collect certain types of information about your device, such as information about your web browser, IP address, time zone, some of the cookies that are installed on your device, individual web pages or products that you view, and how you interact with our website. </p>
              <p> The technlogy we use to collect such information include;</p>
              <p className='list'>Cookies: "Cookies" are data files that are stored on your device or computer and frequently contain an anonymous unique identifier.</p>
          <p className='list'>Log Files: "Log files" track site activity and collect information such as your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p>
          <p className='list'>Web beacons, tags, and pixels are electronic files that record information about how you interact with the Site.</p>
             <p>We may seek additional feedback and opinions in the form of testimonials for inclusion on our website or social media channels.If you do not want us to use your testimonials or receive additional information about our products or services, please contact us at victormomanyi009@gmail.com.</p>
             
             
              <h1 className='head2'>Information you chose to give us</h1>
              <p>You can use the services without telling us who you are or revealing any information that would allow someone to identify you as a specific, identifiable individual. Despite the fact that we refer to such information as "personal data" in this privacy policy.If you contact us using any of the methods listed on our contact page, we may need to collect additional information from you, such as your location, real name, phone number, email, Facebook name or page name, Instagram details, and so on. This information is used to verify your identity, giving us (my team) the confidence to conduct any type of business or sponsorship deals. We will assume you are a bot or a scammer if you do not disclose your search information.</p>
              <p>If you make a donation to the website, we must collect information about your payment methods, such as your credit card number and the security code associated with it. Keep in mind that any donations made to the website are non-refundable.</p>
              
              <h1 className='head2'>How we use your information</h1>
              <p>We do not share or sell your personal information to anyone. Your personally identifiable information will never be disclosed to a third party if you contact us through our website. We use this personally identifiable information to establish trust between us.</p>
             <p>We use website information collected from you, such as your usage patterns, cookies, IP address, log files, and how you access and use our products and services, to help us screen for potential risk and fraud and, more broadly, to improve and optimize our site</p>
             
             
              
              
              <h1 className='head2'>Advertisement</h1>
              <p>We make money by showing advertisements while you browse our site. These advertisements are typically managed by a partner who specializes in providing advertisements for multiple sites. These partners invariably collect anonymous data about the websites you visit in order to personalize the advertisements to you, ensure that you don't see the same advertisements too frequently, and ultimately report to advertisers on which advertisements are working. Our site's monetization technologies are provided by a third party.</p>
              <h1 className='head2'>Change of control </h1>
              <p>In the event of a change in control of our business due to a merger, bankruptcy, or a change in ownership, which occurs when any person or company, directly or indirectly, purchases the majority of our shares, the personal information you provided will most likely be transferred. However, if we declare bankruptcy, your personal information will remain in our possession.</p>
         <h1 className='head2'>Links</h1>
         <p>The website victormomanyidiogenes.com contains links to other websites. We are not liable for the privacy practices or content of third-party websites. This privacy statement only applies to victormomanyidiogenes.com.</p>
         <h1 className='head2'>International users</h1>
         <p>This site is situated in Kenya. For international users with data gathering or use laws that vary from Kenyan law, please be aware that you are transferring your private data to Kenya, which does not have the same data protection act as Kenya. By providing your private info, you agree to the above-mentioned uses of your personal information in accordance with this privacy policy.</p>
         
              <h1 className='head2'>Children's privacy</h1>
              <p>We are committed to safeguarding children's online privacy. This website is only for people over the age of 13. We do not collect information from children deliberately. Before sending us information on the web, children under the age of 13 should obtain permission from a responsible adult, custodian, or teaching assistant.</p>
              <h1 className='head2'>Contact information</h1>
              <p>If you have any questions about this privacy statement, please feel free to contact us at victormomanyi009@gmail.com</p>
          </div>
          <footer>
          <section><Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav></section>
          <section><Nav defaultActiveKey="/home" className="flex-column">
            
      <Nav.Link href="/home">Contact</Nav.Link>
      <Nav.Link href='/'>Terms</Nav.Link>
            <Nav.Link href='/'>Privacy</Nav.Link>
            
     
    </Nav></section>
          <section><Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav></section>
</footer>
      </>

  )
}

export default Privacy