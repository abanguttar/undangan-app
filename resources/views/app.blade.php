<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('Wedding Uttar dan Erlinda') }}</title>
    <link rel="icon" type="image/x-icon" href="/cache/icon.ico">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
    </style>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: start;
            background-image: url("/cache/background-file.jpg");
            background-size: cover;
            background-position: center;
            /* background-repeat: no-repeat; */
            min-height: 100vh;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0
        }

        .playball-regular {
            font-family: "Playball", cursive;
            font-weight: 400;
            font-style: normal;
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


        #couple,
        #calendar,
        .calendar,
        #maps,
        .maps,
        #gallery,
        #story,
        .story,
        #comment,
        .comment,
        #gift,
        .gift {
            background-image: url("/cache/ayat.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center,
        }

        /* #story,
        .story {
            background-image: url("/cache/background-file.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center,

        } */


        #music-icon {
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

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        */
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
