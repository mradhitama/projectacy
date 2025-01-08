<template>
    <div>
        <h5 class="text-darkOcean dark:text-white font-bold group">
            Hi, I'm
            <span class="text">
                <span class="a text-greenOcean">A</span><span class="cy text-greenOcean">CY</span>
                <span class="adhitama">dhitama</span>
            </span>
        </h5>
        <p class="mt-1 text-gray-500">
            Software Engineer, Currenly working at AWDA based in Jakarta
        </p>
    </div>
</template>

<script>
</script>

<style scoped>
.text {
    position: relative;
    display: inline-block;
}

.text .cy {
    display: inline-block;
    transition: transform 0.35s ease-in-out;
}

.text .adhitama {
    position: absolute;
    top: 0;
    left: 1.1rem;
    opacity: 0;
    transition: opacity 0.25s ease-in-out 0.25s;
}

.text-container:hover .cy {
    transform: translateX(6rem);
}

.text-container:hover .adhitama {
    opacity: 1;
}

.text-container:not(:hover) .adhitama {
    opacity: 0;
    transition: opacity 0.25s ease-out;
}
</style>