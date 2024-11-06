<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('Wedding Uttar dan Erlinda') }}</title>
    <link rel="icon" type="image/x-icon" href="/makima/icon.ico">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');

        @font-face {
            font-family: "monotype-corsiva";
            src: url('/assets/monotype-corsiva.ttf') format("truetype");
        }


        body {
            display: flex;
            justify-content: center;
            align-items: start;
            font-family: 'Noto Serif', serif !important;
            /* font-weight: 400; */
            /* Sets font weight to 400 */

            /* background-image: url("/cache/bg-sample.png"); */
            /* background-size: cover;
            background-position: center; */
            scroll-behavior: smooth;
            overflow-x: hidden;

            min-height: 100vh;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0
        }

        .playball-regular {
            font-family: "monotype-corsiva", sans-serif;
            /* font-weight: 400; */
            /* font-style: normal; */
        }



        .container-countdown {
            position: relative;
            width: 100%;
            background-size: cover;
            background-position: center;
            height: 40rem;
            transition: background-image 1s ease-in-out
        }

        .flower-1 {
            top: -50px;
            left: -50px;
            position: absolute;
            z-index: 12;
            animation: breathe 3s infinite alternate-reverse;
        }

        .flower-3 {
            top: -50px;
            right: -50px;
            position: absolute;
            z-index: 12;
            transform: scaleX(-1);
            animation: breathe 3s infinite alternate;
        }



        .flower-2 {
            bottom: -50px;
            right: -50px;
            position: absolute;
            z-index: 12;
            transform: scaleX(-1);
            animation: breathe 3s infinite alternate;
        }

        .flower-4 {
            bottom: -50px;
            left: -50px;
            position: absolute;
            z-index: 12;
            transform: scaleX(-1);
            animation: breathe 3s infinite alternate;
        }

        .flower-transition-wrap {
            top: -50px;
            position: absolute;
            z-index: 12;
        }


        .flower-transition-0,
        .flower-transition-4 {
            animation: breathe 3s infinite alternate;
        }

        .flower-transition-1,
        .flower-transition-3 {
            transform: scaleX(-1);
            animation: breathe 3s infinite alternate-reverse;
        }

        .flower-transition-2 {
            animation: breathe 5s infinite alternate-reverse;
        }

        .calendar,
        .maps,
        .gift {
            background-image: url("/cache/ayat.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        #story,
        .story,
        #calendar,
        #maps,
        #gallery,
        /* #comment, */
        #gift,
        #couple {

            background-image: url("/cache/bg-sample.png");
            background-repeat: repeat;
            background-position: center;
        }

        #comment {
            background-image: url("/cache/ayat.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }



        .rotate {
            animation: rotate 3s infinite alternate;
        }

        @keyframes breathe {
            0% {
                transform: scale(1)
            }

            100% {
                transform: scale(1.2)
            }
        }

        @keyframes breatheTransition {
            0% {
                transform: scale(1)
            }

            100% {
                transform: scale(1.1)
            }
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        /* HTML: <div class="loader"></div> */
        .loader {
            width: 50px;
            aspect-ratio: 1;
            display: grid;
            border-radius: 50%;
            background:
                linear-gradient(0deg, rgb(255 255 255/50%) 30%, #ffffff00 0 70%, rgb(255 255 255/100%) 0) 50%/8% 100%,
                linear-gradient(90deg, rgb(255 255 255/25%) 30%, #ffffff00 0 70%, rgb(255 255 255/75%) 0) 50%/100% 8%;
            background-repeat: no-repeat;
            animation: l23 1s infinite steps(12);
        }

        .loader::before,
        .loader::after {
            content: "";
            grid-area: 1/1;
            border-radius: 50%;
            background: inherit;
            opacity: 0.915;
            transform: rotate(30deg);
        }

        .loader::after {
            opacity: 0.83;
            transform: rotate(60deg);
        }

        .covers {
            opacity: 1;
            transition: opacity 2s ease-in-out
        }

        .hidden-cover-hide {
            opacity: 0;
        }

        .splide__arrow {
            background: none !important;
            border: none !important;
            cursor: pointer !important;
            display: none !important;
        }

        @keyframes l23 {
            100% {
                transform: rotate(1turn)
            }
        }
    </style>
</head>

<body class="font-sans antialiased p-0 m-0">
    @inertia
</body>
<script>
    if (global === undefined) {
        var global = window;
    }
</script>

</html>
