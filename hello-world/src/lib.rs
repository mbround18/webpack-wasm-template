use wasm_bindgen::prelude::*;

// The main function which will be referenced in JavaScript
#[wasm_bindgen]
pub fn main() -> String {
    // Returning a string to use in JavaScript land.
    String::from("Hello, world!")
}
