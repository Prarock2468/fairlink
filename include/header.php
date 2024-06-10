<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fair Link</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css" rel="stylesheet">
    <link href="./css/style.css" rel="stylesheet">
    <link href="./css/header.css" rel="stylesheet">
    <link href="./css/global.css" rel="stylesheet">
    <link href="./css/popup.css" rel="stylesheet">
    <link href="./css/counter.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/animate.css">
    <link rel="stylesheet" type="text/css" href="./icofont/icofont.min.css">
</head>

<body>




    <header class="header" id="nav_header">
        <section class="top_header">
            <div class="scrn_container">
                <div class="header_d_flex">
                    <div class="header_visit">
                        <div class="contact_list">
                            <a href="tel:+91 991 164 6656" class="contact_text number">+91 991 164 6656</a>
                            <span>|</span>
                            <a href="mailto:Booking@fairlink hotels.com" class="contact_text">Booking@fairlink
                                hotels.com</a>
                        </div>
                    </div>
                    <div class="logo_top_wrapper">
                        <a href="/" class="top_wrapper">
                            <img src="./image/logo.png" class="top_logo" alt="brand icon" />
                        </a>
                    </div>
                    <div class="header_visit header_visit_right">
                        <?php include 'header/social.php'; ?>
                    </div>
                </div>
            </div>
        </section>

        <nav class="nav_header">
            <div class="scrn_container">
                <div class="header_d_flex nav_wrapper">
                    <div class="header_logoMenu">
                        <div class="logo_hide brand_wrapper">
                            <a href="/" class="brand">
                                <img src="./image/logo.png" class="logo_link" alt="logo" />
                            </a>
                        </div>
                        <?php include 'header/menu.php'; ?>
                    </div>
                    <div class="fairlink_auth_wrapper">
                        <?php include 'header/dropdown.php'; ?>
                        <span class="open_mobile_menu">
                            <span></span>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </header>


    <?php include 'header/auth.php'; ?>