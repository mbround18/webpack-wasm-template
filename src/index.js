/**
 * When importing a Rust WebAssembly crate,
 * you must always add a /pkg to the import like below.
 * This is because, when webpack builds the crate it will output the contents into a pkg folder.
 * If you wish to manually build, you can use the command `wasm-pack build --target web` inside the `hello-world` folder
 */
import * as helloWorld from '../hello-world/pkg'


document.getElementById("app").innerText =
    /**
     * Now we can simply call the function `main` from our Rust package :)
     */
    helloWorld.main();

