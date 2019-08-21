export const getExtraHeight = (strength) => {
    const inverse = strength < 0;
    const factor = inverse ? 2.5 : 1;
    const strengthWithFactor = factor * Math.abs(strength);
    return Math.floor(strengthWithFactor);
}

export const findFluidImage = (file, filename) => {
    const image = file.edges.find(n => {
      return n.node.relativePath.includes(filename);
    });
    if (!image) {
      return null;
    }
    return image;
}
