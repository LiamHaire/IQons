// Figma plugin sandbox — receives messages from the UI and places SVGs on the canvas

figma.showUI(__html__, { width: 640, height: 560, title: "IQons" });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "drop-icon") {
    const { id, title, variant, svgPaths } = msg;

    // Convert fill-opacity attribute to rgba() so Figma's SVG importer handles it correctly
    // e.g. fill="#22262B" fill-opacity="0.2"  →  fill="rgba(34,38,43,0.2)"
    const sanitised = svgPaths.replace(
      /fill="(#[0-9a-fA-F]{6})"\s+fill-opacity="([^"]+)"/g,
      (_, hex, opacity) => {
        const r = parseInt(hex.slice(1,3), 16);
        const g = parseInt(hex.slice(3,5), 16);
        const b = parseInt(hex.slice(5,7), 16);
        return `fill="rgba(${r},${g},${b},${opacity})"`;
      }
    );

    const svgString = [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">`,
      sanitised,
      `</svg>`,
    ].join("");

    try {
      const node = figma.createNodeFromSvg(svgString);
      node.name = `${title} / ${variant}`;

      // Place at centre of current viewport
      const viewport = figma.viewport.center;
      node.x = viewport.x - node.width / 2;
      node.y = viewport.y - node.height / 2;

      figma.currentPage.selection = [node];
      figma.viewport.scrollAndZoomIntoView([node]);

      figma.ui.postMessage({ type: "drop-success", id });
    } catch (err) {
      figma.ui.postMessage({ type: "drop-error", message: String(err) });
    }
  }
};
