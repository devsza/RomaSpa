// retrieve footer section
const footer = document.querySelector("footer");

// insert innerHTML into footer section
footer.innerHTML =
`

    <div class="top-section">

    <!--footer top left : contact info-->
    <div class="left-contact-info">
        <a href="../pages/index.html"><p> <strong> Roma Spa </strong> </p> </a>
        <p>Bahnhofplatz 18</p>
        <p>3920 Zermatt - Switzerland</p>
        <p></p><a href="tel:+41279664500">+41 27 966 45 00</a></p>
        <p></p><a href="mailto:info@romaspa.ch">info@romaspa.ch</a></p>
    </div>

    <!--footer top right : links-->
    <div class="right-links">
        <a href="../pages/contact.html">Contact</a>
        <a href="press.html">Presse</a>
        <a href="careers.html">Carrières</a>
        <a href="team.html">Equipe</a>
    </div>
    </div>

    <!--footer : social networks -->
    <div class="social-networks">

    <a href="https://fr-fr.facebook.com/"><img src="../assets/images/icons/facebook.png" alt="facebook icon" style="width: 38px;"></a>
    <a href="https://www.instagram.com/?hl=fr"><img src="../assets/images/icons/insta.png" alt="instagram icon"></a>
    <a href="https://www.linkedin.com/"><img src="../assets/images/icons/linkedin.png" alt="linkedin icon"></a>
    <a href="https://twitter.com/?lang=fr"><img src="../assets/images/icons/twitter.png" alt="twitter icon" style="width: 37px;"></a>
    <a href="https://www.pinterest.fr/"><img src="../assets/images/icons/pinterest.png" alt="pinterest icon" style="width: 36px;"></a>
        
    </div>

    <!--footer : small print bottom of page -->
    <div class="bottom-of-page">
        <p> <strong>©</strong> RomaSpa, Made by R.A.F.</p>
        <p><a href="pdc.html">Politique de confidentialité</a></p>
        <p><a href="cgv.html">Conditions générales</a></p>
    </div>

`;