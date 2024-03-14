#version 330 core

in vec3 aPosition; // Vertex position input
in vec2 aTexCoord; // Texture coordinate input

out vec2 pos; // Pass texture coordinate to fragment shader

void main() {
    pos = aTexCoord; // Pass texture coordinate to next stage

    vec4 position = vec4(aPosition, 1.); // Convert position to 4-component vector
    position.xy = position.xy * 2. - 1.; // Transform position

    gl_Position = position; // Set position for rendering
}
