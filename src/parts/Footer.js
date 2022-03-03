import './Footer.css';

const footerInfor = ['Terms',
 ' Privacy policy',
 ' Cookie settings',
 ' Sitemap',
 ' Accessibility statement',]

function Footer() {
  return (
    <div className="footer">
        <div className="footer__child footer__image">
        <a href="/About" >
            <img src='./img/day2/Kevin.png'/>
        </a>
        </div>

        <div className='footer__child footer__contact1'>
        {footerInfor.map(e => (
            <p key={e}>{e}</p>
        ))}
        </div>

        <div className='footer__child footer__contact2'>
        {footerInfor.map(e => (
            <p key={`${e}${Math.random()}`}>{e}</p>
        ))}
        </div>

    </div>
  );
}

export default Footer;
