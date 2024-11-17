
# Rust-Wasm Grayscale Image Transformer

This is a Rust-based WebAssembly (Wasm) application that processes images, converting them to grayscale directly in the browser. The solution ensures privacy by avoiding any server-side interaction, leveraging Rust's performance and the flexibility of WebAssembly.

---

## Features

- **Privacy First**: All image processing is done in the browser; no data leaves the user's machine.
- **High Performance**: Rust's robust libraries and WebAssembly's speed make the processing efficient.
- **Easy Integration**: Frontend implementation using React enables smooth interaction.

---

## Installation and Setup

### Prerequisites
- **Rust**: Install from [rust-lang.org](https://www.rust-lang.org/)
- **wasm-pack**: Install using the command:
  ```bash
  cargo install wasm-pack
  ```
- **Node.js**: Ensure you have Node.js installed.

---

## Usage

1. Upload an image using the **Upload Image** button.
2. The image will be processed in your browser and displayed in grayscale format.

---

## Dependencies

### Rust
- [`wasm-bindgen`](https://crates.io/crates/wasm-bindgen): For JavaScript and WebAssembly interoperability.
- [`base64`](https://crates.io/crates/base64): For Base64 encoding and decoding.
- [`image`](https://crates.io/crates/image): For image manipulation.

### JavaScript
- React: For building the user interface.
- Webpack: For bundling the frontend.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit and push your changes.
4. Open a pull request with a detailed description.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
