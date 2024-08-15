<script setup>
import pinkFigure from "./assets/pink-figure.svg";
import yellowFigure from "./assets/yellow-figure.svg";
import blueFigure from "./assets/blue-figure.svg";
</script>

<template>
    <div class="grid grid-cols-11 w-full gap-5 mt-auto">
        <MainGameCard title="Crush" color="pink" :figure="pinkFigure" figureClass="-right-0" class="col-span-7" />
        <MainGameCard title="Mines" color="yellow" :figure="yellowFigure" figureClass="-right-[30%]" :isClosed="true" class="col-span-4" />
        <MainGameCard title="Mines" color="blue" :figure="blueFigure" figureClass="-right-[30%]" :isClosed="true" class="col-span-4" />
        <MainGameCard title="Crush" color="pink" :figure="pinkFigure" figureClass="-right-0" :isClosed="true" class="col-span-7" />
    </div>
</template>
