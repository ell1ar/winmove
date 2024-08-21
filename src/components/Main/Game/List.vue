<script setup>
import pinkFigure from "./assets/pink-figure.svg";
import yellowFigure from "./assets/yellow-figure.svg";
import blueFigure from "./assets/blue-figure.svg";
import pattern1 from "./assets/pattern1.svg";
import pattern2 from "./assets/pattern2.svg";
</script>

<template>
    <div class="grid grid-cols-11 w-full gap-5">
        <MainGameCard title="Crush" color="pink" :pattern="pattern1" :figure="pinkFigure" figureClass="-right-0" class="col-span-7" />
        <MainGameCard title="Mines" color="yellow" :pattern="pattern2" :figure="yellowFigure" figureClass="-right-[30%]" :isClosed="true" class="col-span-4" />
        <MainGameCard title="Mines" color="blue" :pattern="pattern2" :figure="blueFigure" figureClass="-right-[30%]" :isClosed="true" class="col-span-4" />
        <MainGameCard title="Crush" color="pink" :pattern="pattern1" :figure="pinkFigure" figureClass="-right-0" :isClosed="true" class="col-span-7" />
    </div>
</template>
