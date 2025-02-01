// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
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

// This method is called when your extension is deactivated
export function deactivate() {}
