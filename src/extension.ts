// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";

// This method is called when the extension is activated
// The extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const centerEditorLayout = () => {
		vscode.commands.executeCommand("workbench.action.centerLayout");
	};

	const autoCenter = vscode.workspace
		.getConfiguration("centeredvs")
		.get<boolean>("autoCenter", true);

	if (autoCenter) {
		centerEditorLayout();
	}

	const disposable = vscode.commands.registerCommand(
		"centeredvs.centerLayout",
		() => {
			centerEditorLayout();
			vscode.window.showInformationMessage("Editor Layout Centered");
		}
	);

	context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {}
