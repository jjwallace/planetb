// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use wasm_bindgen::prelude::*;
use std::f64::consts::PI;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct OrbitResult {
    pub x: f64,
    pub y: f64,
}

// Our Add function
// wasm-pack requires "exported" functions
// to include #[wasm_bindgen]
#[wasm_bindgen]
pub fn orbit(origin_x: f64, origin_y: f64, orbit_angle: f64, orbit_period: i32, orbit_distance: i32) -> JsValue {
    // use web_sys::console;
    
    let mut x: f64 = 0.0;
    let mut y: f64 = 0.0;
    let pi = std::f64::consts::PI;

    for n in 1..1000000 {

        // var ang = (orbitObject.orbit.angle * 2.0 * Math.PI) / 180.0;
        // orbit_angle.sin()
    
        
        let ang: f64 = (orbit_angle * 2.0 * pi) / 180.0;

        let x1: f64 = ang.cos() * orbit_distance as f64 - ang.sin() * orbit_distance as f64 + origin_x;
        let y1: f64 = ang.sin() * orbit_distance as f64 - ang.cos() * orbit_distance as f64 + origin_y;

        x += x1;
        y += y1;
        // console::log_1(&n.into());
    }

    let orbit_result = OrbitResult {
        x: x,
        y: y,
    };

    

    JsValue::from_serde(&orbit_result).unwrap()
}