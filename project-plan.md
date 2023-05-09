# Project Plan
This is my planning page for the Sign-up Form project from the Intermediate HTML and CSS Course at [The Odin Project](https://theodinproject.com/).

### Project Requirements

#### Step 1: Set up and planning
Set up your HTML and CSS files with some simple dummy content, just to make sure you have everything linked correctly.
Set up your git repository (refer to past projects if you need a refresher).
Download a full-resolution copy of the design file, and get a general idea for how you’re going to need to lay things out in your HTML document.

#### Step 2: Gather Assets
The design has a large background-image, so go find and download an image you want to use for that section. The one in the design can be found on unsplash.com, but feel free to select your own. Be sure to credit the creator of your image!
Pick an external font for the ‘logo’ section. We’ve used Norse Bold, but you can use any font you like.
For the image-sidebar, we’ve used this Odin logo. Again, feel free to replace it.

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/sign-up-form.png">
<strong>Provided design file</strong>


#### Step 3: Some Tips!
How you attack this project is mostly up to you, but it is wise to begin by scaffolding out the structure of the page, and then tackle the various sections one by one.

The area behind the “ODIN” logo is a div that has a dark, but semi-transparent background color. This enhances the readability of the text against the busy background image.

The color we’ve chosen for the ‘Create Account’ button is similar to tones found in the background image. Specifically, it is #596D48.
The inputs, by default have a very light border (#E5E7EB), but we’ve included 2 variations. For starters, the password inputs should be given an error class.

The other variation is the selected input, which should have a blue border and subtle box-shadow. This can be done with the :focus pseudo-class you’ve learned about in an earlier lesson.
Do not worry about making your project look nice on mobile, but DO resize your browser a little bit to make sure that it’s not completely broken at different desktop resolutions.
Checking that the password fields match each other requires javascript. Try to implement this if you feel confident, otherwise just validate each field separately.


## Plan

#### Features to implement
* password checking/confirmation match
* password strength checker?
* input boxes increase in size/zoom on mouse hover to encourage input

##### Name ideas
* LinguaLink / LenguaLink
* LingoConnect
* Linguafy
* Idiomatica
* MetaLingua


### HTML
Elements:
* main form div that sits in the body
* <strong>left side hero image</strong>
    * logo/business name
    * text describing service (?)
    * photo attribution
* <strong>right side form</strong>
    * sign-up header
    * sign up with google or facebook (?) 
    * first name
    * last name
    * email
    * phone number
    * <strong>create password</strong>
        * <em>rules for password appear on click</em>
        * confirm password
    * submit/create account
    * terms and conditions
    * already a member? log in


### CSS and design
* main form should have rounded corners
* <strong>colour palette</strong>