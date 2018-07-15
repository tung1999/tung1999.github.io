document.addEventListener('DOMContentLoaded', () => {
    let twitter = document.querySelector('ul li a.twitter');
    let github = document.querySelector('ul li a.github');
    let facebook = document.querySelector('ul li a.facebook');
    let bg = document.getElementsByTagName('body')[0];

    twitter.addEventListener('mousemove', changeBgTwitter);
    github.addEventListener('mousemove', changeBgGithub);
    facebook.addEventListener('mousemove', changeBgFacebook);

    function changeBgTwitter() {
            bg.style = 'background-color: #0084b4';
    }

    function changeBgGithub() {
        bg.style = 'background-color: #bd2c00';
    }
    function changeBgFacebook() {
        bg.style = 'background-color: #3b5998';
    }
})
