let $floatingWindowContent = null;
let $floatingWindowOpenBtn = null;
let $floatingWindowCloseBtn = null;
let $input = null;
let $output = null;

const ENTER_KEYCODE = 13;
const UP_KEYCODE = 38;
const DOWN_KEYCODE = 40;
const ESCAPE_KEYCODE = 27;
const TAB_KEYCODE = 9;

const RUN_COMMAND = "console/run?command=";
const GET_OUTPUT = "console/out";
const COMPLETE_COMMAND = "console/complete?command=";
const GET_COMMAND_LIST = "console/commandList";
const GET_COMMAND_HISTORY = "console/commandHistory";
const GET_COMMAND_HISTORY_INDEX = "console/commandHistory?index=";

const openFloatingWindow = () => {
    $floatingWindowContent.show();
    $floatingWindowOpenBtn.hide();
    $floatingWindowCloseBtn.show();
}

const closeFloatingWindow = () => {
    $floatingWindowContent.hide();
    $floatingWindowOpenBtn.show();
    $floatingWindowCloseBtn.hide();
}

// TODO: Test
const scrollToBottom = () => {
    $output.scrollTop($output[0].scrollHeight);
}

// TODO: Test
const resetInput = () => {
    $input.val("");
    // TODO: Reset command index if tracked
}

$(document).ready(() => {
    $floatingWindowContent = $("#windowContent");
    $floatingWindowOpenBtn = $("#openWindowBtn");
    $floatingWindowCloseBtn = $("#closeWindowBtn");
    $input = $("#input");
    $output = $("#output");
    // TODO: Could use only one button and change the class by code instead of change display

    if (!$floatingWindowContent || !$floatingWindowOpenBtn || !$floatingWindowCloseBtn
        || !$input || !$output) {
        alert("Could not get necessary elements");
    }

    closeFloatingWindow();
    $floatingWindowOpenBtn.click(() => openFloatingWindow());
    $floatingWindowCloseBtn.click(() => closeFloatingWindow());

    $input.keydown(e => {
        const command = $input.val();
        if (e.keyCode == ENTER_KEYCODE) {
            e.preventDefault();
            // TODO: Run command
        }
        else if (e.keyCode == UP_KEYCODE) {
            // TODO: Move to prev command
        }
        else if (e.keyCode == DOWN_KEYCODE) {
            // TODO: Move to next command
        }
        else if (e.keyCode == ESCAPE_KEYCODE) {
            resetInput();
        }
        else if (e.keyCode == TAB_KEYCODE) {
            e.preventDefault();
            // TODO: Complete command
        }
    });
});
