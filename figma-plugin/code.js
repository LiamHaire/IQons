// Figma plugin sandbox — receives messages from the UI and places SVGs on the canvas

figma.showUI(__html__, { width: 640, height: 640, title: "IQons" });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "drop-icon") {
    const { id, title, variant, svgPaths } = msg;

    // Wrap the inner paths in a full SVG element
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">${svgPaths}</svg>`;

    try {
      const node = await figma.createNodeFromSvgAsync(svgString);
      node.name = `${title} / ${variant}`;

      // Place at centre of current viewport
      const viewport = figma.viewport.center;
      node.x = viewport.x - node.width / 2;
      node.y = viewport.y - node.height / 2;

      figma.currentPage.appendChild(node);
      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);

      figma.ui.postMessage({ type: "drop-success", id });
    } catch (err) {
      figma.ui.postMessage({ type: "drop-error", message: String(err) });
    }
  }

  if (msg.type === "resize") {
    figma.ui.resize(msg.width, msg.height);
  }
};
