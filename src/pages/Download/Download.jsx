import './Download.css';
const  Download = () => {
    return (
        <div className='download-page'>
            <h1>Let's Make It Official!</h1>
            <p>To download the app, click the following links below depending on your device.</p>
            <p>Dowloading the app just takes a few steps.</p>
            <ul>
                <li><a href='#desktop'>Desktop instructions</a></li>
                <li><a href='#mobile'>Mobile instructions</a></li>
            </ul>

            <div id='desktop' className='desktop-container'>
                <h2>Desktop App</h2>
                <h3>Download the desktop app by following the instructions below.</h3>
                <p>1. Look at the search bar and locate the computer icon that is circled in the image below.</p>
                <img src='../../images/desktopInfo.png' alt='image shows the search bar with a computer icon circled in red.'></img>
                <p>2. Click on the computer icon and you will be prompted to click the "Install" button.</p>
                <img src='../../images/desktopInstall.png' alt='image shows the install prompt popped up with the options install or cancel.'></img>
            </div>

            <div id='mobile' className='mobile-container'>
                <h2>Mobile App</h2>
                <h3>Download the mobile app by following the instructions below.</h3>
                <p>1. Open the site on your device. You will then click on the link in the search bar and press the share option.</p>
                <img src='../../images/share.jpeg' alt='image shows the share option when highlighting a link in the search bar.'></img>
                <p>2. Click on add to home screen.</p>
                <img src='../../images/addToHome.jpeg' alt='image shows the add to home screen option and is highlighted in a red rectangle'></img>
                <p>3. Click on the "Add" button.</p>
                <img src='../../images/finalStep.jpeg' alt='image show the "add" button on the top right of the mobile screen.'></img>
            </div>
        </div>
    )
}

export default Download;