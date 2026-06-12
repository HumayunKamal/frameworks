// Custom cursor implementation
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let rx = 0,
    ry = 0,
    mx = 0,
    my = 0;

document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
});

(function lerpRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(lerpRing);
})();
