use gloo_console::console_dbg;
use wasm_bindgen::prelude::*;
use yew::prelude::*;

#[function_component(OnKeyUpDemo)]
fn on_key_up_demo() -> Html {
    let onkeyup = move |e: KeyboardEvent| {
        {
            console_dbg!(&e);
            console_dbg!(e.type_());
            console_dbg!(e.code());
        }
        .into()
    };
    html! {
        <form>
            <input placeholder={ "Nickname" } type="text"/>
            <input placeholder={ "Password" } type="password" {onkeyup}/>
            <button type={"button"}>
                { "Enter" }
            </button>
        </form>
    }
}

#[wasm_bindgen]
pub fn run_app() -> Result<(), JsValue> {
    yew::start_app::<OnKeyUpDemo>();
    Ok(())
}
