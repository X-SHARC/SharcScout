
<b>SharcScout</b> is a scouting application that can be customized to any team. Teams can create a database in minutes with Firebase and link it to <b>SharcScout</b> to get their websites up and running for competitions. Also, <b>SharcScout</b> offers teams an online strategy board to strategize quickly before matches. Teams can use sites like GitHub, Repl.it, etc. to host <b>SharcScout</b> for free.


<h1>Usage</h1>
 <p><b>SharcScout</b> offers you not only scouting but also a strategy board! On the home page, you are greeted with your team logo, team name, team number and two buttons: <b>Game Plan</b> and <b>Scouting.</b> </p>


 <h3>Game Plan</h3> 
<p>Gameplan page will open a page that has the field as the background. This image will be vertical or horizontal based on the device's screen size. On this page, you can draw simply by touching the screen. Also, you can clear the screen by pressing the “Clear” button located in the left side of the screen. This usually comes in handy when you have to strategize quickly before a match in the pits.</p>

 <h3>Scouting</h3> 
In the scouting page, your scouting team can simply click the “+” button and start scouting right away. This button will open up a form for 2019 FRC season specifically. However, it will be updated for upcoming seasons. Snapshot of the form can be viewed below.


Installation
<ol>
<li>First of all, go to Firebase and create a database. </li>
 <li>Then, clone the repository to the hosting of your choice. (GitHub and Repl.it are great free options!) (Be aware that your database config details are completely visible in the source code. It is recommended not to share this website anyone except your team members for security reasons.) </li>
<li>Thirdly, open the <b>scouting.js </b> file. In this file, go to line 411,192</b> and change the variables starting with "your" with your database config details. You should be replacing the "null" statements. </li>

<li>At this point, the website is fully functional. Let's move on to customizing the design</li>
</ol>

 <h1>Customizing the Design</h1>
	<h3>Adding the Favicon, App Icon and Team Logo</h3>
		<p>In this section, we will be setting up the favicon, app icon and the team logo on the home page. You should have all of these files in the correct formats (.ico, .jpg, etc.) in a folder. After you have your final files, drop them into <b>“res”</b> folder. <br><br>
Now, you should change the href tags on lines 8, 9 and 19 in <b>index.html</b>
<br>
Congratulations, you have set up all your media files!</p>
	<h3>Changing the Field Images</h3>
	<p><b>SharcScout</b> comes with 2019 field images. (The images used are taken from ChiefDelphi. I will give credit as soon as I find that post again!) However, if you want to have custom field images you can simply upload new images to the root of the project and change the names to <b>“field”</b> and </b>“fieldvertical”</b> if your images are JPG.<br><br> If you have other formats, then you should change line 7 on <b>gameplan.css</b> and line 10 in <b>script.js</b> Awesome, you should have your custom images working right now!</p>
	<h3>Other Customizations and Notes</h3>
		<p>You can change other CSS attributes in <b>style.css</b>, <b>scouting.css</b> and <b>scouting.html</b> <br> <br>
You can also go in the HTML files to change the names and placeholders with your teams name and number.
<h4>Notes</h4>
<ul>
<li>It is strongly recommended to shrink your images with an online tool in order to maximize your loading speed. </li>
<li>Make sure you have all the image types for favicon and app icon in the correct format and size.</li>
</ul></p>

