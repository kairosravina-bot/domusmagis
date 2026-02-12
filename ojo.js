<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>DOMUS MAGI: DADOS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="background: url('BG_PIEDRA.jpg') no-repeat center center fixed; background-size: cover;">
    <div class="pantalla">
        <h1 style="color: gold; text-shadow: 0 0 10px gold;">🎲 ORÁCULO DE DADOS</h1>
        <div class="dados-container">
            <video id="v-dados" class="video-dados" src="https://kairosravina-bot.github.io/domusmagis/Dados.mp4" playsinline muted></video>
            <div id="res-dado" class="layer-valor">?</div>
        </div>
        <div class="grid-dados">
            <button class="btn-master" onclick="lanzar(1)">1 DADO</button>
            <button class="btn-master" onclick="lanzar(2)">2 DADOS</button>
        </div>
        <button class="btn-master" style="margin-top:30px; background:#400;" onclick="location.href='index.html'">VOLVER</button>
    </div>
    <script>
        function lanzar(n) {
            const v = document.getElementById('v-dados');
            const res = document.getElementById('res-dado');
            res.innerText = "...";
            v.currentTime = 0; v.play();
            v.onended = () => {
                let total = 0;
                for(let i=0; i<n; i++) total += Math.floor(Math.random()*6)+1;
                res.innerText = total;
            }
        }
    </script>
</body>
</html>