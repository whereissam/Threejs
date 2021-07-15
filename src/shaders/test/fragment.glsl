varying vec2 vUv;

void main()
{
    // float strengh =1.0 - vUv.y;
    // float strengh =vUv.y * 10.0;
    float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    gl_FragColor = vec4(strength, strength, strength, 1.5);
}