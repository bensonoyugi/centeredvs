# CenteredVS

A Visual Studio Code extension that automatically centers the editor layout when the editor is opened. No more manual commands—just a clean, centered workspace every time you start coding!

## Features

- **Automatic Centering**: Automatically centers the editor layout upon opening VS Code.
- **Seamless Integration**: Works out of the box with no additional configuration required.
- **Lightweight**: Minimal impact on performance or startup time.

## Installation

1. Open **Visual Studio Code**.
2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for `CenteredVS`.
4. Click **Install** to install the extension.
5. Reload VS Code if prompted.

## Usage

Once installed, the extension will automatically center the editor layout every time you open VS Code. No further action is required!

If you want to manually trigger the centered layout, you can use the command palette:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette.
2. Type `CenteredVS: Center Layout` and press `Enter`.

## Configuration

CenteredVS works without any configuration. However, if you want to customize its behavior, you can add the following settings to your `settings.json` file:

```json
{
  "centeredvs.autoCenter": true, // Automatically center the layout on startup
  "centeredvs.centerOnCommand": true // Enable manual centering via command palette
}
