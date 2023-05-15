import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from "countup.js";
import Typed from 'typed.js';

export function initializeAnimationEffects() {
  // Initialize AOS
  AOS.init();

  // Create count-up animations for elements with the data-countup attribute
  const countUpElements = document.querySelectorAll('[data-countup]');
  countUpElements.forEach(element => {
    const endValue = parseInt(element.dataset.countup, 100);
    new CountUp(element, 0, endValue).start();
  });

  // Start a typing effect on an element with the class typed
  const typedElement = document.querySelector('.typed');
  const typedOptions = {
    strings: ['Scraphub: Bridging the Gap Between Scrap Sellers and Buyers on a Digital Platform',
    "Revolutionizing the Scrap Industry with Scraphub's Online Sales and Purchase Platform",
    'Scraphub: The Future of Scrap Trading Made Easy',
    "Join the Scraphub Movement: A Seamless Online Marketplace for Scrap Sales and Purchases"],
    typeSpeed: 250,
    backSpeed: 200,
    loop: true,
    cursorChar: '_',
  };
  new Typed(typedElement, typedOptions);
}
