<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>PHP Website via CapRover</title>

  <!-- Bootstrap Core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom Fonts -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet"
    type="text/css">
  <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

  <!-- Custom CSS -->
  <link href="css/test.css" rel="stylesheet">

</head>

<body id="page-top">

<div id="window" class="window">
    <div class="icon-computer text-center" id="icon-computer" ondblclick="opencom()">
        <img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505053/thumb_14339670430This_PC_fo5lbo.png" class="img-responsive">
        <p>This PC</p>
    </div>
    <section class="option-box">
        <div class="color-box">
            <h4>All about Windows 10 Design</h4>
            <!--<video class="center-block" width="360" height="" controls>
                        <source src="img/myExplain_2.mp4" type="video/mp4">
                        <source src="img/myExplain_2.ogg" type="video/ogg">
                        Your browser does not support the video tag.
                </video>-->
            <div style="position:relative;height:0;padding-bottom:56.25%;width: 400px;"><iframe src="https://www.youtube.com/embed/VUPtvK28fhY?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>
            <a class="btn btn-primary center-block text-center" onclick="openabout()">About Me</a>
        </div>
        <i class="fa fa-gear fa-3x gear-check"></i>
    </section>
    <div class="overlay-computer" id="overlay-computer">
        <div class="fluid-container">
            <div class="first-row-win" id="first-row-win">
                <div class="left">
                    <i class="fa fa-hdd-o"></i>
                    <i class="fa fa-file-o"></i>
                    <i class="fa fa-folder"></i>
                    <span>Front End</span>
                </div>
                <div class="right">
                    <i class="fa fa-window-minimize" onclick="closeopencom()"></i>
                    <i class="fa fa-window-restore" onclick="returncom()" id="returncam" style="display:none;"></i>
                    <i class="fa fa-window-maximize" onclick="upercom()" id="upercam"></i>
                    <i class="fa fa-times" onclick="closecom()"></i>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="second-row-win">
                <div>
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a class="home-a" href="#home" aria-controls="home" role="tab" data-toggle="tab">File</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Home</a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Share</a></li>
                        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">View</a></li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="home">
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-envelope-open fa-2x"></i>
                                <p>Mail</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-file-code-o  fa-2x"></i>
                                <p>Code</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-sticky-note-o fa-2x"></i>
                                <p>Note</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="profile">
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-user-circle fa-2x"></i>
                                <p>User</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-battery-4  fa-2x"></i>
                                <p>battery</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-book fa-2x"></i>
                                <p>Book</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="messages">
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-car fa-2x"></i>
                                <p>Car</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-camera-retro  fa-2x"></i>
                                <p>cam</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-building fa-2x"></i>
                                <p>build</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="settings">
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-cubes fa-2x"></i>
                                <p>cubes</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-coffee fa-2x"></i>
                                <p>coffee</p>
                            </div>
                            <div class="col-xs-1 text-center">
                                <i class="fa fa-film fa-2x"></i>
                                <p>film</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="third-row-win">
                <div class="col-xs-2">
                    <i class="fa fa-long-arrow-left"></i>
                    <i class="fa fa-long-arrow-right"></i>
                    <i class="fa fa-chevron-down"></i>
                    <i class="fa fa-arrow-up"></i>
                </div>
                <div class="col-xs-7">
                    <div class="path-input">
                        <span class="path-icon-input">This pc</span>
                        <span class="path-icon-input">Mohamed Yahya (E:)</span>
                        <span class="path-icon-input">programming</span>
                        <span class="path-icon-input">Front End</span>
                    </div>
                    <i class="fa fa-hdd-o path-icon"></i>
                    <i class="fa fa-repeat path-icon-1"></i>
                    <i class="path-icon-2">|</i>
                </div>
                <div class="col-xs-3">
                    <input class="search-input" type="text" placeholder="Search">
                    <i class="fa fa-search path-icon-1"></i>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="fourd-row-win">
                <div class="col-xs-3" style="border-right: 1px solid #808080;">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="fa fa-star">Quick access</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <p><span class="fa fa-desktop">Desktop</span></p>
                                    <p><span class="fa fa-download">Downloads</span></p>
                                    <p><span class="fa fa-file-text">documents</span></p>
                                    <p><span class="fa fa-picture-o ">Picture</span></p>
                                    <p><span class="fa fa-folder ">Folder</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span class="fa fa-folder-open">Creative Cloud</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <p><span class="fa fa-desktop">Desktop</span></p>
                                    <p><span class="fa fa-download">Downloads</span></p>
                                    <p><span class="fa fa-file-text">documents</span></p>
                                    <p><span class="fa fa-picture-o ">Picture</span></p>
                                    <p><span class="fa fa-folder ">Folder</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span class="fa fa-desktop">This PC</span>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <p><span class="fa fa-desktop">Desktop</span></p>
                                    <p><span class="fa fa-download">Downloads</span></p>
                                    <p><span class="fa fa-file-text">documents</span></p>
                                    <p><span class="fa fa-picture-o ">Picture</span></p>
                                    <p><span class="fa fa-folder ">Folder</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-9 ">
                    <div class="row main-folders">
                        <div class="col-xs-2 folders text-center" ondblclick="openimg()">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503391/admin-3_yilprt.jpg" class="img-responsive  center-block" alt=""></p>
                            <span>Photo</span>
                        </div>
                        <div class="col-xs-2 folders text-center" ondblclick="openvid()">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505068/myposter_vlaggb.png" class="img-responsive  center-block" alt=""></p>
                            <span>Video</span>
                        </div>
                        <div class="col-xs-2 folders text-center" ondblclick="opennote()">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500505134/if_sticky-note_299111_px7waa.png" class="img-responsive  center-block" alt=""></p>
                            <span>Note</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="col-xs-2 folders text-center">
                            <p class="contain"><img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500502735/if_folder-blue_285658_f5jeko.svg" class="img-responsive  center-block" style="height: 64px;" alt=""></p>
                            <span>Folder</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="fived-row-win"></div>
        </div>
        <div class="resizer"></div>
    </div>
    <div class="clearfix"></div>
    <div class="image-overlay" id="image-overlay">
        <div class="fluid-container">
            <div class="first-row-img">
                <span class="center-text head-over">My Image</span>
                <div class="right">
                    <i class="fa fa-times" onclick="closeimg()"></i>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="second-row-img">
                <img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503391/admin-3_yilprt.jpg" class="center-block img-responsive" style="height:80vh" alt="">
            </div>
        </div>
    </div>

    <div class="video-overlay" id="video-overlay">
        <div class="fluid-container">
            <div class="first-row-vid">
                <span class="center-text head-over">My Video</span>
                <div class="right">
                    <i class="fa fa-times" onclick="closevid()"></i>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="second-row-vid">
                <!--<video class="center-block" width="" height="" controls>
                            <source src="img/myExplain_2.mp4" type="video/mp4">
                            <source src="img/myExplain_2.ogg" type="video/ogg">
                            Your browser does not support the video tag.
                    </video>-->
                <div style="position:relative;height:0;padding-bottom:56.25%;"><iframe src="https://www.youtube.com/embed/VUPtvK28fhY?ecver=2" style="position:absolute;width: 50%;height: 50vh;left: 25%;" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>
            </div>
        </div>
    </div>

    <div class="note-overlay" id="note-overlay">
        <div class="fluid-container">
            <div class="first-row-note">
                <span class="center-text head-over">My Note</span>
                <div class="right">
                    <i class="fa fa-times" onclick="closenote()"></i>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="second-row-note">
                <textarea></textarea>
            </div>
        </div>
    </div>


    <div class="about-overlay" id="about-overlay">
        <div class="fluid-container">
            <div class="first-row-img">
                <span class="center-text head-over">Info about me</span>
                <div class="right">
                    <i class="fa fa-times" onclick="closeabout()"></i>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="second-row-abo">
                <div>
                    <img src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503802/admin-2_qxjnab.jpg" class="img-responsive" alt="">
                    <p>
                        Hi, My name is Mohamed Yahya From Egypt :( . <br> I'am 17 Years old. <br> I'am a Programmer web (Front End). <br> My Number: 20+ <mark>01061578345</mark>. <br> And you can Call Me From <a href="https://goo.gl/B56o1U">Here</a> <br>                        I love computer, technology and programming <br> I was learning programming languages. <br> The best language for me is JavaScript. <br> I use Javascript instead of jQuery. <br> That's why I'm strong in Javascript.
                        <br> The most loved thing in programming is often the challenge. <br> I am capable of Html, Html 5, Css, Css3, Javascript <br> Thanks for your time <br>
                    </p>
                </div>
            </div>
        </div>
    </div>


    <div class="start-window-fade hidden-start" id="start-window-fade"></div>
    <div class="start-window hidden-start" id="start-window">
        <div class="fluid-container" id="container-start">
            <div class="row">
                <div class="col-xs-1 first-column">
                    <div class="icon-bottom" id="power" onclick="powerOff()">
                        <i class="fa fa-power-off fa-1x"></i>
                    </div>
                    <div class="icon-bottom">
                        <i class="fa fa-cog fa-1x"></i>
                    </div>
                    <div class="icon-bottom">
                        <i class="fa fa-folder-open-o fa-1x"></i>
                    </div>
                    <div class="icon-bottom">
                        <i class="fa fa-user fa-1x"></i>
                    </div>
                    <div class="icon-bottom open-icon-list">
                        <i class="fa fa-bars fa-1x"></i>
                    </div>
                </div>
                <div class="col-xs-3 second-column">
                    <div class="wrap-scroll">
                        <div class="head-med">
                            <small>What I'am Used</small>
                        </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503397/HTML_Logo_jkkttu.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Html, Html 5</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503385/8b61de4c84033266e15317a6eb9fda2d-css3_cmaqgi.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Css, Css 3</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503920/Javascript-shield_grysg1.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Pure JavaScript</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503388/bootstrap-4_qmy2lh.svg" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Bootstrap</small>
                        </div>
                    </div>
                    <div class="head-med mouse-prient">
                        <small>Expand <i class="fa fa-chevron-down fa-1x"></i></small>
                    </div>
                    <div class="head-med">
                        <small>Tools used</small>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504015/winicon_mj7eiz.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Windows 10</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504055/Firefox_ivwjwz.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Firefox</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503390/chrome1600_okfqm6.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">chrome</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504144/favicon_mmggme.ico" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Visual Studio Code</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504181/Photoshop_CC_icon_gyvgzg.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Photoshop cc 2017</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504215/illustrator_qgskie.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">illustrator cc 2017</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503401/github-desktop-icon_zzzpbq.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">github</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504321/codepen1600_rd1mh7.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Codepen</small>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503387/BeSJ3aet_400x400_hg4g6p.png" width="35" height="35" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <small class="media-heading">Upwork</small>
                        </div>
                    </div>



                    </div>
                </div>
                <div class="col-xs-4 third-column">
                    <div class="head-box">
                        <small>Life at a glance</small>
                    </div>
                    <div class="row">
                        <div class="col-xs-8 col-xs-push-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-envelope fa-2x"></i>
                                </div>
                                <div>
                                    Mail
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-xs-pull-8 box">
                            <div class="box-style text-center">
                                <div class="mycontainer">
                                    <div id="day">day</div>
                                    <div id="number-day">number</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-8 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-internet-explorer fa-2x"></i>
                                </div>
                                <div>
                                    Microsoft Edge
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-picture-o fa-2x"></i>
                                </div>
                                <div>
                                    Picture
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-sun-o fa-2x"></i>
                                </div>
                                <div>
                                    Weather
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-laptop fa-2x"></i>
                                </div>
                                <div>
                                    User
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503397/admin_uo6a4w.jpg');background-size: cover;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div>
                                    twitter <i class="fa fa-twitter" style="float: right;line-height: 21px;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-shopping-bag  fa-2x"></i>
                                </div>
                                <div>
                                    store
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-skype  fa-2x"></i>
                                </div>
                                <div>
                                    skype
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style text-center" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504440/king-care_ccxidf.jpg');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size: 10px;">
                                    Candy Crush
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="head-box">
                        <small>Play And Explore</small>
                    </div>
                    <div class="row">
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504485/logo_jgngah.png');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size: 10px;">
                                    Xbox
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-music fa-2x"></i>
                                </div>
                                <div style="font-size: 10px;">
                                    Music
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-film fa-2x"></i>
                                </div>
                                <div style="font-size: 10px;">
                                    Film
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504540/microsoft-solitaire-collection-02-535x535_bactpx.png');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size: 10px;">

                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504576/1200x630bb_juslti.jpg');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size: 10px;">
                                    minecraft
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504589/shortcut-icon-180-393c2144_lifwjy.png');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size: 10px;">

                                </div>
                            </div>
                        </div>
                        <div class="col-xs-8 col-xs-push-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503395/bank_cf8dgr.jpg');background-size: 130%;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div>
                                    News
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-xs-pull-8 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504662/maxresdefault_live_bwb3qd.jpg');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div>
                                    Money
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504684/unnamed_is6kxn.png');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size: 10px;">

                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500503787/onenote-amazon-app-store-100361701-large_m6lbsu.jpg');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size:12px;">
                                    OneNote
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 box">
                            <div class="box-style" style="background:url('http://res.cloudinary.com/dr5ei3rt1/image/upload/v1500504701/office2016logo_uw8zcd.png');background-size: cover;background-position: center;">
                                <div class="icon-bottom text-center" style="margin: 20px;">
                                    <i class="fa fa-twitter fa-2x" style="color: rgba(0,0,0,0);"></i>
                                </div>
                                <div style="font-size:10px;">
                                    Office
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="nav navbar-inverse navbar-fixed-bottom footer text-center">
        <div class="fluid-container">
            <div class="row">
                <div class="left">
                    <div class="col-xs-1-me">
                        <div class="icon-bottom strat-win" id="strat-win">
                            <i class="fa fa-windows fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me">
                        <div class="icon-bottom">
                            <i class="fa fa-search fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me">
                        <div class="icon-bottom">
                            <i class="fa fa-envelope fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me" id="a1">
                        <div class="icon-bottom">
                            <i class="fa fa-folder fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me" id="a2">
                        <div class="icon-bottom">
                            <i class="fa fa-picture-o fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me" id="a3">
                        <div class="icon-bottom">
                            <i class="fa fa-film fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me" id="a4">
                        <div class="icon-bottom">
                            <i class="fa fa-file-text-o fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me" id="a5">
                        <div class="icon-bottom">
                            <i class="fa fa-id-card fa-2x"></i>
                        </div>
                    </div>
                    <span class=".clearfix"></span>
                </div>
                <div class="right">
                    <div class="col-xs-1-me" id="close-all">
                    </div>
                    <div class="col-xs-1-me">
                        <div class="icon-bottom">
                            <i class="fa fa-bell fa-2x"></i>
                        </div>
                    </div>
                    <div class="date col-xs-1-me">
                        <span id="time">00:00</span>
                        <span id="history">00/00/0000</span>
                    </div>
                    <div class="col-xs-1-me">
                        <div class="icon-bottom">
                            <i class="fa fa-volume-up  fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-xs-1-me">
                        <div class="icon-bottom">
                            <i class="fa fa-chevron-up fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for this template -->
 
  <script src="js/test.js"></script>
</body>

</html>